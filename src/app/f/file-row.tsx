import { FileIcon, Folder as FolderIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { deleteFile } from "~/server/actions";
import type { File, Folder } from "~/server/db/schema";

export function FileRow(props: { file: File }) {
  const { file } = props;

  return (
    <li
      key={file.id}
      className="hover:bg-gray-750 border-b border-gray-700 px-6 py-4"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 flex items-center">
          <a
            href={file.url}
            className="flex items-center text-gray-100 hover:text-blue-400"
            target="_blank"
          >
            <FileIcon className="mr-3" size={20} />
            {file.name}
          </a>
        </div>
        <div className="col-span-2 text-gray-400">{"File"}</div>
        <div className="col-span-3 text-gray-400">{file.size}</div>
        <div className="col-span-1 text-right text-gray-400">
          <Button
            aria-label="Delete file"
            variant="ghost"
            onClick={() => deleteFile(file.id)}
          >
            <Trash2Icon className="" size={20} />
          </Button>
        </div>
      </div>
    </li>
  );
}

export function FolderRow(props: { folder: Folder }) {
  const { folder } = props;

  return (
    <li
      key={folder.id}
      className="hover:bg-gray-750 border-b border-gray-700 px-6 py-4"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 flex items-center">
          <Link
            href={`/f/${folder.id}`}
            className="flex items-center text-gray-100 hover:text-blue-400"
          >
            <FolderIcon className="mr-3" size={20} />
            {folder.name}
          </Link>
        </div>
        <div className="col-span-3 text-gray-400"></div>
        <div className="col-span-3 text-gray-400"></div>
      </div>
    </li>
  );
}
