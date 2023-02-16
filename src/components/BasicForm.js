import useInputBasic from "../hooks/use-input-basic";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInputBasic(value => value.trim() !== '');

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInputBasic(value => value.trim() !== '');

  const {
    value: emailAddress,
    isValid: emailAddressIsValid,
    hasError: emailAddressInputHasError,
    valueChangeHandler: emailAddressChangeHandler,
    inputBlurHandler: emailAddressBlurHandler,
    reset: resetEmailAddressInput
  } = useInputBasic(value => value.trim().includes('@') && value.length >= 5);

  let formIsValid = firstNameIsValid && lastNameIsValid && emailAddressIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    //Check form validity 
    if (!formIsValid){
      return;
    }

    //Store Responses (Console.log)
    console.log(firstName, lastName, emailAddress)

    //reset values
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailAddressInput();
  };

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailAddressInputClasses = emailAddressInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstName} />
          {firstNameInputHasError ? <p className="error-text">Name must not be empty.</p> : ''}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastName} />
          {lastNameInputHasError ? <p className="error-text">Name must not be empty.</p> : ''}
        </div>
      </div>
      <div className={emailAddressInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailAddressChangeHandler} onBlur={emailAddressBlurHandler} value={emailAddress} />
        {emailAddressInputHasError ? <p className="error-text">Name must not be empty.</p> : ''}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
