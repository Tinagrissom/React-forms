import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);

    // if (event.target.value.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
    // clears the error message on first keystroke
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);

    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
    // displays error message if input field is clicked and then clicked out of
  };

  const reset = () => {
      setEnteredValue('');
      setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;

// custom hook used to manage state and login for input
// value, touched state, validity, validation information should be passed on from
// outside, to make this hook reusable
