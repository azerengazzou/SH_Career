import React from "react";
import { Accordion } from ".";
import "./index.module.css";

export const AccordionBuilder = () => {
  return (
    <>
      <div className="p-2 rounded-lg relative">
        <div className="pl-20 pr-20">
          <div className="p-2">
            <Accordion
              title="Craft Unique Resumes with Career Builder"
              answer="Unleash your creativity with our free CV builder. Customize the style and layout of your resume by adjusting and dragging-and-dropping sections. Stand out from the crowd with personalized, professional CVs."
            />
          </div>
          <div className="p-2">
            <Accordion
              title="Flexible Design Choices"
              answer="Express your preferences with our CV builder. Customize the standard theme to get more than 1000 new and modern cv template.
              Your resume, your style."
            />
          </div>
        </div>
      </div>
      <p className="pl-14 mt-6 mx-4 text-gray-700 text-left">
  Elevate your career with Career Builder's free CV builder. Craft unique and personalized resumes effortlessly.
  <p className="mt-3">
    Our platform empowers you with flexible design choices, allowing you to express your style using our meticulously curated themes. Customize your CV effortlessly with our intuitive color palette, creating a standout professional document that reflects your individuality and skills.
  </p>
  <p className="mt-3">
    Experience the freedom to drag and drop CV elements, organizing and presenting your information exactly how you want it. Tailor your CV to your unique story and make a lasting impression in the competitive job market.
  </p>
  <p className="mt-3">
    Once your CV is perfected, download it as a polished PDF version or save it as a JSON file for future use. Career Builder provides you with the tools you need to succeed in your career journey.
  </p>
</p>

    </>
  );
};
