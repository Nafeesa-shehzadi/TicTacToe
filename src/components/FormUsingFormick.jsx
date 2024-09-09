import React from "react";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

// Define initial values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
};

// Define validation schema
const Formvalidation = yup.object({
  firstName: yup
    .string()
    .min(3, "Name must be at least 3 characters long.")
    .required("First name is required."),
  lastName: yup
    .string()
    .min(3, "Name must be at least 3 characters long.")
    .required("Last name is required."),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is required.")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  gender: yup.string().required("Gender is required"),
});

function FormUsingFormick() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <div className="register-form">
        <h2>Registration form(using formik)</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={Formvalidation}
          onSubmit={(values) => {
            console.log("form data", values);
            alert("Data submitted successfully!");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  style={
                    errors.firstName && touched.firstName
                      ? {
                          borderColor: "red",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="small"
                  className="error-message"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  style={
                    errors.firstName && touched.firstName
                      ? {
                          borderColor: "red",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                  placeholder="Last Name"
                />
                <ErrorMessage
                  name="lastName"
                  component="small"
                  className="error-message"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  style={
                    errors.firstName && touched.firstName
                      ? {
                          borderColor: "red",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="error-message"
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  style={
                    errors.password && touched.password
                      ? {
                          borderColor: "red",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="error-message"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  style={
                    errors.confirmPassword && touched.confirmPassword
                      ? {
                          borderColor: "red",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="small"
                  className="error-message"
                />
              </div>
              <div>
                <p>Gender:</p>

                <label>
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="gender" value="other" />
                  Other
                </label>
                <ErrorMessage name="gender" component="small" />
              </div>
              <button type="submit" disabled={Formvalidation}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormUsingFormick;
