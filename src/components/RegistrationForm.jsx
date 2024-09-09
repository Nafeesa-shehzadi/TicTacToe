import React, { useState, useEffect } from "react";

function RegistrationForm() {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);

  const handlechange = (event) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate form submission process
    setTimeout(() => {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Password does not match");
        alert("Password does not match");
      } else {
        setErrorMessage("");
        alert("Data submitted successfully!");
        console.log(formData);
      }
      setIsSubmitting(false);
    }, 1000); // Simulating a delay for form submission
  };
  useEffect(() => {
    // Validate form fields
    const isValid =
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.gender &&
      formData.password === formData.confirmPassword;

    setIsFormValid(isValid);
    setIsFirstNameValid(formData.firstName.length >= 3);
    setIsLastNameValid(formData.lastName.length >= 3);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email));
    setIsPasswordValid(/(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(formData.password));
    setIsConfirmPasswordValid(formData.password === formData.confirmPassword);
    setIsGenderValid(formData.gender !== "");
  }, [formData]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <div className="register-form">
        <h2>Registration form</h2>
        <form onSubmit={handlesubmit}>
          <div>
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handlechange}
              pattern="[A-Za-z]{3,}"
              title="Name must have minimum 3 characters."
              placeholder="FirstName"
              style={{
                borderColor: isFirstNameValid ? "gray" : "red",
              }}
            />
          </div>
          <div>
            <label htmlFor="lastName">LastName:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              required
              onChange={handlechange}
              pattern="[A-Za-z]{3,}"
              title="Name must have minimum 3 characters."
              placeholder="LastName"
              style={{
                borderColor: isLastNameValid ? "gray" : "red",
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              placeholder="example@gmail.com"
              required
              style={{
                borderColor: isEmailValid ? "gray" : "red",
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handlechange}
              placeholder="........"
              required
              pattern="(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
              title="password must have minimum 8 characters ,1 Number and 1 Special character."
              style={{
                borderColor: isPasswordValid ? "gray" : "red",
              }}
            />
          </div>
          <div>
            <label htmlFor="Cpassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handlechange}
              required
              title={errorMessage ? errorMessage : "confirm your password"}
              placeholder="ConfirmPassword"
              style={{
                borderColor: isConfirmPasswordValid ? "gray" : "red",
              }}
            />
          </div>
          <div>
            <label>
              <label>Gender:</label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handlechange}
                style={{
                  borderColor: isGenderValid ? "gray" : "red",
                }}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handlechange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handlechange}
              />
              Other
            </label>
          </div>
          <button type="submit" disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? <span className="loader"></span> : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
