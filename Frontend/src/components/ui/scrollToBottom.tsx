// ScrollDownButton.js

import React from 'react';

const ScrollDownButton = () => {
  const scrollToBottom = () => {
    const element = document.getElementById('bottom');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Scroll Down
    </button>
  );
};

export default ScrollDownButton;
