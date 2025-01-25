import React, { useEffect, useState } from "react";
import axios from "axios";

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch posts from the backend API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/post/all-post"); // Replace with your API endpoint
        console.log(response.data);
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Community</h1>
        <p className="text-lg mb-6">
          Share your thoughts, ideas, and connect with others in the community!
        </p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-lg shadow hover:bg-gray-100">
          Share Your Post
        </button>
      </section>

      {/* Posts Section */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Community Posts</h2>

        {loading && <p>Loading posts...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <p className="text-sm text-gray-500">
                By: {post.userName || "Anonymous"} |{" "}
                {new Date(post.time).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
