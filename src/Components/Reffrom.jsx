import React, { useRef } from 'react';

const FormWithRef = () => {
  // Creating refs for form elements
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Accessing values using refs
    const nameValue = nameInputRef.current.value;
    const emailValue = emailInputRef.current.value;

    // Do something with the form data
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);

    // You can perform additional actions here, such as making API calls or updating state
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameInputRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithRef;
