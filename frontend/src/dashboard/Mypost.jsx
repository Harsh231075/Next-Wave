import React, { useState } from "react";
import axios from "axios";

const Mypost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the backend
    const postData = { title, content };

    // Retrieve token from localStorage
    const token = localStorage.getItem("authToken"); // Token ko localStorage se retrieve karein

    try {
      const response = await axios.post(
        "http://localhost:3000/post/create",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Token ko Authorization header mein bheja
          },
        }
      );

      console.log("Post created successfully:", response.data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your post title"
            required
          />
        </div>

        {/* Content Input */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your post content here"
            rows="6"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mypost;
