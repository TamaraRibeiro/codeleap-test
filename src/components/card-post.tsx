import { Alarm, NotePencil, Trash, User } from "@phosphor-icons/react";

export default function CardPost({title, content, deletePost, editPost}: {title: string; content: string; deletePost: () => void; editPost: () => void}) {
  return (
    <div className="border border-amethyst-950 bg-amethyst-50 rounded-xl px-4 py-5 shadow-xl flex flex-col justify-between min-w-94 h-56">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex items-center justify-between text-amethyst-950">
          <p className="font-bold text-lg uppercase">{title}</p>
          <div className="flex gap-2 items-center">
            <div onClick={deletePost} className="cursor-pointer ">
              <Trash className="size-5 transition ease-in-out duration-300 hover:text-amethyst-700 hover:scale-110" />
            </div>
            <div className="cursor-pointer">
              <NotePencil onClick={editPost} className="size-5 transition ease-in-out duration-300 hover:text-amethyst-700 hover:scale-110" />
            </div>
          </div>
        </div>
        <p className="font-semibold text-amethyst-900">
          {content}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <div className="size-5 rounded-full border border-amethyst-900 flex justify-center items-end">
            <User className="size-3.5 text-amethyst-950" />
          </div>
          <p className="text-amethyst-900/80 font-semibold text-sm">Author's name</p>
        </div>

        <div className="flex items-center gap-1.5">
            <div>
            <Alarm className="size-4.5" />
            </div>
        <p className="text-amethyst-900/80 font-semibold text-sm">25 seconds ago</p>
        </div>
      </div>
    </div>
  );
}
