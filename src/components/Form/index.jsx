import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Language,
  FormMobile,
  FormButtons,
  FormColors,
  FormMargins,
  FormPersonal,
  FormLanguage,
  FormHobbies,
  FormEducation,
  FormExperience,
  FormSkills,
  FormProjects,
  FormCourses,
  FormReferences,
  FormSocial,
  FormFooter,
} from "../index";
import styles from "./index.module.css";
import { CSSTransition } from 'react-transition-group';

const Ticket = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.ticket} ${isOpen ? styles.open : ""}`}>
  <button
    className={`flex items-center justify-between w-full p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}
    onClick={toggleOpen}
  >
    <span>{title}</span>
    <span className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-1800 ease-in-out`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
      </svg>
    </span>
  </button>
  <CSSTransition in={isOpen} timeout={100} classNames="ticket-content" unmountOnExit>
    <div className={styles.ticketContent}>{children}</div>
  </CSSTransition>

</div>

  );
};


export const Form = ({ handlePrint }) => {
  const dispatch = useDispatch();

  const handleResetData = (setter) => {
    dispatch(setter([]));
  };

  return (
    <div className={styles.form}>
        <Language />
        <FormMobile />
      <FormButtons handlePrint={handlePrint} />
      <div className={styles.flexedForm}>
        <FormColors />
        {/* <FormMargins /> */}
      </div>
      <Ticket title="Personal Information">
        <FormPersonal />
      </Ticket>
      <Ticket title="Social" handleResetData={handleResetData}>
        <FormSocial handleResetData={handleResetData} />
      </Ticket>
      <Ticket title="Language" handleResetData={handleResetData}>
        <FormLanguage handleResetData={handleResetData} />
      </Ticket>
      <Ticket title="Hobbies" handleResetData={handleResetData}>
        <FormHobbies handleResetData={handleResetData} />
      </Ticket>
      <Ticket title="Education" handleResetData={handleResetData}>
        <FormEducation handleResetData={handleResetData} />
      </Ticket>
      <Ticket title="Experience" handleResetData={handleResetData}>
        <FormExperience handleResetData={handleResetData} />
      </Ticket>
      <Ticket title="Skills" handleResetData={handleResetData}>
        <FormSkills handleResetData={handleResetData} />
      </Ticket>
      <Ticket title="Projects" handleResetData={handleResetData}>
        <FormProjects handleResetData={handleResetData} />
      </Ticket>
      <Ticket title="Courses" handleResetData={handleResetData}>
        <FormCourses handleResetData={handleResetData} />
      </Ticket>
      <Ticket title="References" handleResetData={handleResetData}>
        <FormReferences handleResetData={handleResetData} />
      </Ticket>
      {/*<FormFooter />*/}
    </div>
  );
};
