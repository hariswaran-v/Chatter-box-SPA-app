import { Outlet } from "react-router-dom";
import { useState } from "react";
import TheNavbar from "../Navbar";
import Footer from "../Footer";
import NewPost from "../NewPost";

const GuestLayout = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "This is my first sample blog post.",
    },
  ]);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = new Date().toLocaleString();
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    setPostTitle("");
    setPostBody("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <TheNavbar />
      <main className="flex-grow ">
        <Outlet
          context={{
            posts,
            handleSubmit,
            postTitle,
            setPostTitle,
            postBody,
            setPostBody,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
