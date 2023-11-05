import React from "react";
import { Form, Preview } from "../components";
import styles from "../App.module.css";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import "../index.css";

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
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
    <div className={styles.app}>
        <br/>
        <br/>
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
