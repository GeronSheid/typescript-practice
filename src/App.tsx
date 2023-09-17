import React, {useEffect} from "react";
import { useAppDispatch } from "./hooks";
import { fetchPosts } from "./store/postsSlice";
import { PostsList } from "./components/PostsList";
import { AddPostForm } from "./components/AddPostForm";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className="container">
      <AddPostForm/>
      <PostsList/>
    </div>
  );
};

export default App;
