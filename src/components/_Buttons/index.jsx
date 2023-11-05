
import { useWords } from "../../hooks";
import { Button } from "../_form";
import styles from "./index.module.css";
import React from 'react';

export const Buttons = ({
  dirty,
  handleReset,
  handleResetData,
  setter,
  state,
  isArray = true,
}) => {
const words = useWords();

  return (
    <>
      <Button type="submit" variant="default" disabled={!dirty}>
        {words.add}
      </Button>
      <Button
        type="reset"
        variant="danger"
        onClick={handleReset}
        disabled={!dirty}
      >
        {words.clear}
      </Button>
      <Button
        type="button"
        variant="danger"
        onClick={() => {
          handleResetData(setter);
        }}
        disabled={
          isArray ? state.length === 0 : Object.keys(state).length === 0
        }
      >
        {words.clear_all}
      </Button>
    </>
  );
};
