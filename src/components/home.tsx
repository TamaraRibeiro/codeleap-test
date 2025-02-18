import Button from "./button";
import CardPost from "./card-post";
import { useState } from "react";
import ModalCreatePost from "./modal-new-post";
import { Post } from "../types/types";
import SwitchMode from "./switch-mode";

export default function Home() {
  const [openModalCreatePost, setModalCreatePostOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editPost, setEditPost] = useState<{ post: Post; index: number } | null>(null)

  function handleOpenModalCreatePost() {
    setEditPost(null)
    setModalCreatePostOpen(!openModalCreatePost);
  }

  function handleDeletePost(index: number) {
    alert("Are you sure you want to delete this post?")
    setPosts((prev) => prev.filter((_, i) => i !== index));
  }

  function handleEditPost(post: Post, index: number) {
    setEditPost({ post, index });
    setModalCreatePostOpen(true);
  }

  function handleSaveEditedPost(newPost: Post, index: number | null) {
    if (index !== null) {
      setPosts((prev) =>
        prev.map((post, idx) => (idx === index ? newPost : post))
      );
    } else {
      setPosts((prev) => [newPost, ...prev]);
    }
    setModalCreatePostOpen(false);
  }

  return (
    <div className="bg-amethyst-50 rounded-lg w-full h-full min-h-screen flex justify-center relative px-2.5 pb-5">

      <SwitchMode />

      <div className="space-y-8 mt-16 flex flex-col items-center min-w-94">
        <Button text="create a post" action={handleOpenModalCreatePost} />
        {posts.map((post, index) => (<CardPost key={index} title={post.title} content={post.content} deletePost={() => handleDeletePost(index)} editPost={() => handleEditPost(post, index)}/>) )}
      </div>

      {openModalCreatePost && (
        <ModalCreatePost openModalCreatePost={handleOpenModalCreatePost} savePost={handleSaveEditedPost}
        editPost={editPost} />
      )}
    </div>
  );
}
