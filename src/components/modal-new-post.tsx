import { useEffect, useState } from "react";
import Button from "./button";
import { Post } from "../types/types";

export default function ModalCreatePost({
  openModalCreatePost,
  savePost,
  editPost,
}: {
  openModalCreatePost: () => void;
  savePost: (newPost: Post, index: number | null) => void;
  editPost: { post: Post; index: number } | null;
}) {
  const [newPost, setNewPost] = useState<Post>({
    title: "",
    content: "",
    author: "Author's name", // Placeholder, replace with actual user
    created_at: "25 seconds ago",
  });

  useEffect(() => {
    if (editPost) {
      setNewPost(editPost.post);
    }
  }, [editPost]);

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  }

  function handlePostButton() {
    savePost(newPost, editPost ? editPost.index : null);

    if (editPost) {
      alert("post saved");
    } else {
      alert("new post created");
    }

    openModalCreatePost();
  }
  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-[#F2F2FB]/90 rounded-lg">
      <div className="border border-amethyst-950 bg-amethyst-50 rounded-xl px-4 py-5 shadow-xl flex flex-col justify-between w-80">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-semibold text-[17px] text-amethyst-900 text-center">
            {editPost ? "Edit Your Post" : "Publish Your New Post"}
          </p>
          <div className="flex flex-col gap-1.5">
            <input
              type="text"
              name="title"
              value={newPost.title}
              className="bg-amethyst-100 rounded-sm shadow-md px-1 py-1 text-sm placeholder:text-amethyst-900/80 placeholder:text-sm placeholder:font-semibold placeholder:leading-5 outline-none"
              placeholder="Title"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <textarea
              name="content"
              value={newPost.content}
              className="bg-amethyst-100 rounded-sm shadow-md min-h-40 max-h-72 px-1 py-1 text-sm placeholder:text-amethyst-900/80 placeholder:text-sm placeholder:font-semibold placeholder:leading-5 outline-none"
              placeholder="Start typing..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-4">
            <Button text="Cancel" action={openModalCreatePost} />
            <Button
              text={editPost ? "Save" : "Post"}
              action={handlePostButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
