"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firbase";
import toast from "react-hot-toast";

export default function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [fileId, filename, setIsRenameModalOpen, isRenameModalOpen] =
    useAppStore((state) => [
      state.fileId,
      state.filename,
      state.setIsRenameModalOpen,
      state.isRenameModalOpen,
    ]);

  const renameFile = async () => {
    if (!user || !fileId) return;

    const toastId = toast.loading("Renaming...");

    await updateDoc(doc(db, "users", user.id, "files", fileId), {
      filename: input,
    });
    toast.success("Rename Successfully", {
      id: toastId,
    });
    setInput("");
    setIsRenameModalOpen(false);
  };

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the file</DialogTitle>
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />
          <div className="flex justify-end space-x-2 py-3">
            <Button
              size="sm"
              className="px-3"
              variant={"ghost"}
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={() => renameFile()}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
