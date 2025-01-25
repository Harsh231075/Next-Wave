const Post = require('../models/postSchema');
const User = require('../models/userSchema');
// Create Post
const createPost = async (req, res) => {
  const { title, content } = req.body; // Extract fields from request body

  try {
    // Create a new post with the provided data and user ID
    const newPost = new Post({
      title,
      content,
      user: req.user, // Assuming user ID is attached to req.user
      createdAt: Date.now(),
    });

    // Save the post to the database
    await newPost.save();

    res.status(201).json({ message: "Post created successfully", post: newPost }); // Respond with the created post
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
};

// Update Post
const updatePost = async (req, res) => {
  const { postId } = req.params; // Extract post ID from request parameters
  const { title, content } = req.body; // Extract fields to update from request body

  try {
    // Find the post by ID
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" }); // If post doesn't exist
    }

    // Check if the current user is the owner of the post
    if (post.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" }); // User is not the owner
    }

    // Update post fields if provided, else retain existing values
    post.title = title || post.title;
    post.content = content || post.content;
    post.updatedAt = Date.now(); // Update the timestamp

    // Save the updated post
    await post.save();

    res.status(200).json({ message: "Post updated successfully", post }); // Respond with updated post
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
};

const getAllPosts = async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find().sort({ createdAt: -1 }); // Sort posts by newest first

    // Format posts with user details
    const formattedPosts = await Promise.all(
      posts.map(async (post) => {
        // Fetch the user details by userId
        const user = await User.findById(post.user);

        return {
          title: post.title,
          content: post.content,
          userId: post.user, // User ID
          userName: user ? user.username : "Unknown", // If user exists, take name; else show "Unknown"
          time: post.createdAt, // Post creation time
        };
      })
    );

    res.status(200).json(formattedPosts); // Send formatted posts array as a response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
};

const getUserPosts = async (req, res) => {
  try {
    // Extract user ID from the token (middleware me set kiya hoga)
    const userId = req.user;

    // Fetch posts created by this user
    const posts = await Post.find({ user: userId }).sort({ createdAt: -1 }); // Sort posts by newest first

    // Format posts with user details
    const formattedPosts = await Promise.all(
      posts.map(async (post) => {
        const user = await User.findById(userId);

        return {
          title: post.title,
          content: post.content,
          userId: post.user, // User ID
          userName: user ? user.name : "Unknown", // If user exists, take name; else show "Unknown"
          time: post.createdAt, // Post creation time
        };
      })
    );

    res.status(200).json(formattedPosts); // Send formatted posts array as a response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
};


module.exports = { createPost, updatePost, getAllPosts, getUserPosts };
