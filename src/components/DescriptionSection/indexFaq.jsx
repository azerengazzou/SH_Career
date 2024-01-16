import React from "react";
import { Accordion } from ".";
import './index.module.css';
import { WelcomeDescription } from "./welcome/welcomeDescription";
export const FAQ = () => {
  return (
    <>
            <WelcomeDescription />
    
 {/*    <div className="p-2 rounded-lg relative">
      <div className="pl-20 pr-20">
        <div className="p-2">
          <Accordion title="Do you prefer Android or iOS" answer="I like to use iOS products" />
        </div>
        <div className="p-2">
          <Accordion title="Do you prefer writing CSS or Tailwind?" answer="I like to use Tailwind" />
        </div>
        <div className="p-2">
          <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
        </div>
      </div>
    </div> */}
    </>
  );
};
