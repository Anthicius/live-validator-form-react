import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const error = {
    email:
      formData.email.trim().length > 0
        ? formData.email.includes("@") && formData.email.includes(".")
          ? ""
          : "Email must include special characters (-@ -.)."
        : "",
    password:
      formData.password.trim().length > 0
        ? formData.password.trim().length > 8
          ? ""
          : "Password must contain at least 9 characters."
        : "",
    confirmPassword:
      formData.confirmPassword.trim().length > 0
        ? formData.password === formData.confirmPassword
          ? ""
          : "Password doesn't match."
        : "",
  };

  const hasErrors = Object.values(error).some((errorMsg) => errorMsg !== "");

return (
    <form className="form-container">
      <h2>Create Account</h2>
      
      <div className="input-group">
        <label>
          Email
          <input
            type="email"
            className={error.email ? "input-error" : ""}
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          {error.email && <p className="error-msg">{error.email}</p>}
        </label>

        <label>
          Password
          <input
            type="password"
            className={error.password ? "input-error" : ""}
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {error.password && <p className="error-msg">{error.password}</p>}
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            className={error.confirmPassword ? "input-error" : ""}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
          {error.confirmPassword && (
            <p className="error-msg">{error.confirmPassword}</p>
          )}
        </label>
      </div>

      <button disabled={hasErrors} className="submit-btn">
        Sign Up
      </button>
    </form>
  );
};


export default RegistrationForm;
