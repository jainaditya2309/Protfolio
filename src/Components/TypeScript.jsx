import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypeScript = () => {
  const typedElement = useRef(null); // Reference to the element where the text will appear
  const typedInstance = useRef(null); // Reference to the Typed.js instance

  useEffect(() => {
    // Initialize Typed.js
    typedInstance.current = new Typed(typedElement.current, {
      strings: ['Web Developer', 'Robotic Engineer', 'Vedio Editor'],
      typeSpeed: 50,
    });

    // Cleanup on component unmount
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <span ref={typedElement}></span> {/* This is where the animated text will appear */}
    </div>
  );
};

export default TypeScript;