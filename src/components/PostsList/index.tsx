import React from "react";
import { useAppSelector } from "../../hooks";
import { PostItem } from "../PostItem";
import style from "./style.module.css"

export const PostsList: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.postsList);

  return (
    <ul className={style.list}>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </ul>
  );
};
