import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-teal-400 flex justify-center items-center z-50">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingAnimation;
