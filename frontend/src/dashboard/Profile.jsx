import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch user data and posts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Get token from localStorage
        if (!token) {
          throw new Error('Unauthorized: No token found');
        }

        const response = await axios.get('http://localhost:3000/my-profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data)
        setUserData(response.data); // Set fetched user data
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch profile data');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Update profile function
  const handleUpdate = async (updatedDetails) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(
        'http://localhost:3000/profile',
        updatedDetails,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data)
      setUserData(response.data); // Update user data with new details
      alert('Profile updated successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update profile');
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* User Profile Section */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={userData.photo || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full shadow-md"
        />
        <div>
          <h1 className="text-2xl font-bold">{userData.name}</h1>
          <p className="text-gray-600">{userData.email}</p>
          <p className="text-sm text-gray-500">
            {/* {userData.details.profession}, {userData.details.location} */}
          </p>
        </div>
      </div>

      {/* Basic Details Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Basic Details</h2>
        {/* <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Age:</strong> {userData.details.age}</li>
          <li><strong>Location:</strong> {userData.details.location}</li>
          <li><strong>Profession:</strong> {userData.details.profession}</li>
        </ul> */}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={() => handleUpdate({ location: 'Updated Location' })}
        >
          Update Profile
        </button>
      </div>

      {/* User Posts Section
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">My Posts</h2>
        {userData.posts.length > 0 ? (
          <ul className="space-y-2">
            {userData.posts.map((post, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded shadow-sm hover:shadow-md transition-shadow"
              >
                {post.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No posts yet.</p>
        )}
      </div> */}

      {/* Badges Section */}
      {/* <div>
        <h2 className="text-xl font-semibold mb-4">Badges</h2>
        {userData.badges.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {userData.badges.map((badge, index) => (
              <span
                key={index}
                className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-full shadow-md"
              >
                {badge}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No badges yet.</p>
        )}
      </div> */}
    </div>
  );
}

export default Profile;
