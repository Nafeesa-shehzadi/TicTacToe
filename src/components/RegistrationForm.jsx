import React, { useState } from "react";

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
  const handlechange = (event) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Password does not match");
      alert("Password does not match");
      console.log("Password does not match");
      console.log(formData.password);
      console.log(formData.confirmPassword);
    } else {
      setErrorMessage("");
      alert("Data submitted succesfully!");
      console.log(formData);
    }
  };

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
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
