// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    console.log("Form submitted:", formData);
  
  };

  return (
    <div className="hoGet_inTouchWrap" id="HomeSlide">
      <div className="GetinTouchContain">
        <div className="getINleftSide">
          <h2 className="getInLefHead">
            Ready to Build Next-Level Custom Digital Solutions?
          </h2>

          <p className="getInPARA">
            Please fill in the form and let’s chat to understand how we can help you better
          </p>

          <div className="getInBox">
            <div className="getInSingleBox">
              <div className="getInMain">
                <p className="getInCallus">Call Us</p>
                <p className="getInNUM">
+91-9045-301-702</p>
                <p className="usText">India</p>
              </div>
            </div>
          </div>
         
          <div className="getInBox">
            <div className="getInSingleBox">
              <div className="getInMain">
                <p className="getInCallus">Call Us</p>
                <p className="getInNUM">+1-585-566-2070</p>
                <p className="usText">United States</p>
              </div>
            </div>
          </div>

        </div>

        <div className="getInRight">
          <h2 className="getInRigHead">Get Answers to your Questions</h2>

          <form className="getInForm">
            <div className="getInTwo">
              <input
                name="firstName"
                required
                type="text"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                name="lastName"
                required
                type="text"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              className="busnessInput"
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              id="email"
              required
              type="email"
              placeholder="Email*"
              className="busnessInput"
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="service"
              id="service"
              required
              className="selectSERVICE contactseleservice"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Services*</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="E - Commerce Solutions">E - Commerce Solutions</option>
              <option value="Web development">Web development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Staff Augmentation">Staff Augmentation</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="letConTextarea"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="button" className="letConnecBtn" onClick={handleClick}>
              <span>Let’s Connect</span>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.20697 12.1879L7.91397 6.48093L2.20697 0.773926L0.792969 2.18793L5.08597 6.48093L0.792969 10.7739L2.20697 12.1879Z"
                  fill="#0B56E4"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
