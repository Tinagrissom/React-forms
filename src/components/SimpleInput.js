import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  // updating enteredName with setEnteredName on change

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // will stop default behavior of browser to sned http request to server

    if (enteredName.trim() == "") {
      return;
    }
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    // react refs always has a current property that points at input element
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
  };

  // In reality wouldn't do both ref and state to get input, differences below
  // Refs read value when needed
  // State will log every key stroke

  // If you want to read data only when form is submitted - ref might be better
  // If you need entered value for instant validation - state might be better
  // State can also reset entered input

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
