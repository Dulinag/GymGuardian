// src/components/ScrollDownButton.tsx

// import React from 'react';

const ScrollDownButton: React.FC = () => {
  const scrollToBottom = () => {
    const element = document.getElementById('bottom');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button
 
    >
      Scroll Down
    </button>
    </>
  
  );
};

export default ScrollDownButton;
