import React from "react";
import { AccordionBuilder, Form, Preview } from "../components";
import styles from "../App.module.css";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import ReactGA from "react-ga";
import "../index.css";
import { NavList } from "../components/Common/Navbar";

function Builder() {
  const { language } = useSelector((state) => state.language);
  const { top, right, bottom, left } = useSelector(
    (state) => state.site.margins
  );

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const getPageMargins = () => {
    return `@page { margin: ${top}px ${right}px ${bottom}px ${left}px !important; }`;
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <NavList />
      <AccordionBuilder />

      <div className={styles.app}>
        <div className={styles.print}>
          <style>{getPageMargins()}</style>
          <Preview ref={printRef} />
        </div>
        <Form handlePrint={handlePrint} />
      </div>
    </>
  );
}

export default Builder;
