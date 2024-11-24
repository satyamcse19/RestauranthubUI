import React, { useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    password: '',
    role: '',
  });

  // Handle form input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle phone number input (only numbers allowed and maximum 10 digits)
    if (name === 'phoneNumber') {
      if (/[^0-9]/.test(value)) {
        return; // Ignore any non-numeric input
      }

      if (value.length > 10) {
        return; // Prevent more than 10 digits
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field dynamically on each key press
    validateForm(name, value);
  };

  // Validate individual fields and set errors
  const validateForm = (fieldName, value) => {
    let formErrors ={...errors};
    let isValid = true;

    switch (fieldName) {
      case 'email':
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) {
          formErrors.email = 'Email is required';
          isValid = false;
        } else if (!emailPattern.test(value)) {
          formErrors.email = 'Invalid email format';
          isValid = false;
        } else {
          formErrors.email = '';
        }
        break;

      case 'name':
        if (!value) {
          formErrors.name = 'Name is required';
          isValid = false;
        } else {
          formErrors.name = '';
        }
        break;

      case 'phoneNumber':
        const phonePattern = /^[0-9]{10}$/;
        if (!value) {
          formErrors.phoneNumber = 'Phone number is required';
          isValid = false;
        } else if (value.length !== 10) {
          formErrors.phoneNumber = 'Phone number must be 10 digits';
          isValid = false;
        } else if (!phonePattern.test(value)) {
          formErrors.phoneNumber = 'Phone number must be numeric';
          isValid = false;
        } else {
          formErrors.phoneNumber = '';
        }
        break;

      case 'password':
        const passwordPattern = /[^a-zA-Z0-9]/;
        if (!value) {
          formErrors.password = 'Password is required';
          isValid = false;
        } else if (!passwordPattern.test(value)) {
          formErrors.password = 'Password must contain at least one non-alphanumeric character';
          isValid = false;
        } else {
          formErrors.password = '';
        }
        break;

      case 'role':
        if (!value) {
          formErrors.role = 'Role is required';
          isValid = false;
        } else {
          formErrors.role = '';
        }
        break;

      default:
        break;
    }

    setErrors({...errors,formErrors});
    return isValid;
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
      debugger;
    // Validate all fields when the user clicks Register
    let isValid = true;
    Object.keys(formData).forEach((field) => {
      isValid = validateForm(field, formData[field]) && isValid;
    });

    if (!isValid) {
      return; // Stop submission if any field is invalid
    }

    try {
      const response = await axios.post('https://localhost:7002/api/auth/register', formData);
      if (response.data.isSuccess) {
        if (!formData.role) {
          formData.role = 'CUSTOMER';
        }
        const roleResponse = await axios.post('https://localhost:7002/api/auth/AssignRole', formData);
        if (roleResponse.data.isSuccess) {
            toast.success("Registration Successful!");
            navigate("/login")
        }
      }
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container border p-4 mt-5">
        <div className="row text-center p-3">
          <h1>Register</h1>
        </div>
        <div className="row">
          {/* Email Input */}
          <div className="col-12 col-md-6 offset-md-3 pb-2">
            <input
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              type="email"
              placeholder="Email..."
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Name Input */}
          <div className="col-12 col-md-6 offset-md-3 pb-2">
            <input
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Name..."
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Phone Number Input */}
          <div className="col-12 col-md-6 offset-md-3 pb-2">
            <input
              className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
              placeholder="Phone Number..."
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
          </div>

          {/* Password Input */}
          <div className="col-12 col-md-6 offset-md-3 pb-2">
            <input
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              type="password"
              placeholder="Password..."
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Role Select */}
          <div className="col-12 col-md-6 offset-md-3 pb-2">
            <select
              className={`form-select ${errors.role ? 'is-invalid' : ''}`}
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">--Select Role--</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
            {errors.role && <div className="invalid-feedback">{errors.role}</div>}
          </div>

          {/* Submit Button */}
          <div className="col-12 col-md-6 offset-md-3 pb-2">
            <button type="submit" className="form-control btn btn-success">
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
