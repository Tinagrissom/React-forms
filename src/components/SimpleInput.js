import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  // updating enteredName with setEnteredName on change
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // if (event.target.value.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
    // clears the error message on first keystroke
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
    // displays error message if input field is clicked and then clicked out of
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // will stop default behavior of browser to sned http request to server

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    // displays error message if form is submitted and input is empty

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    // react refs always has a current property that points at input element
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  // In reality wouldn't do both ref and state to get input, differences below
  // Refs read value when needed
  // State will log every key stroke

  // If you want to read data only when form is submitted - ref might be better
  // If you need entered value for instant validation - state might be better
  // State can also reset entered input

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
