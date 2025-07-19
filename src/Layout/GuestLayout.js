import { Outlet } from "react-router-dom";
import { useState } from "react";
import TheNavbar from "../Navbar";
import Footer from "../Footer";

const GuestLayout = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Made a video about Tesla Q1 results and broke down the financials.",
    },
    {
      id: 2,
      title: "React vs Vue - A Developer's Perspective",
      datetime: "August 15, 2021 09:32:10 AM",
      body: "Shared my experience building apps in both React and Vue, comparing their strengths.",
    },
    {
      id: 3,
      title: "My Freelance Journey Begins",
      datetime: "September 05, 2021 04:45:22 PM",
      body: "Just landed my first freelance web development project. Super excited!",
    },
    {
      id: 4,
      title: "Learning TypeScript",
      datetime: "October 10, 2021 01:12:48 PM",
      body: "Started learning TypeScript to level up my JavaScript skills and improve code quality.",
    },
    {
      id: 5,
      title: "Productivity Tools I Love",
      datetime: "November 22, 2021 08:00:00 AM",
      body: "Wrote a blog post about the tools I use daily to stay productive—Notion, VS Code, and Trello.",
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <TheNavbar />
      <main className="flex-grow px-4 py-6">
        <Outlet context={{ posts }} />
      </main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
