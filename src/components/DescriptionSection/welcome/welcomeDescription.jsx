import React from "react";
import './welcomeDescription.module.css';

export const WelcomeDescription = () => {
  return (
    <div className="p-2 rounded-lg relative">
      <div className="animated-background">
      <h1 className="text-3xl font-bold mb-4 flex flex-col items-center pt-10 z-10 relative">Hello, Welcome to CV Builder!</h1>
      <p>Welcome to Career Builder – Your Gateway to Professional Success! Craft tailored and impactful resumes effortlessly with Career Builder, the premier online CV-building platform.</p>
      <p>Our intuitive and user-friendly interface empowers you to showcase your skills and achievements in a way that captures the attention of prospective employers. Choose from a curated collection of modern and responsive templates, ensuring your CV stands out in today's competitive job market. Career Builder leverages cutting-edge technologies like React and Vite to provide a seamless and dynamic user experience. Whether you're a seasoned professional or entering the workforce, our platform guides you through the process of creating a standout CV that reflects your unique career journey. Start building your future with Career Builder – where your professional aspirations come to life!</p>
      </div>
    </div>
  );
};
