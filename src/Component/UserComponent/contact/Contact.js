
import React, { useEffect, useState } from "react";
import "./Contact.css"; 
import { sendCallRequest } from "../../../services/ApiServices";
import { toast } from "react-toastify";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  };

  const [details, setDetails] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isCheck, setIsCheck] = useState(false);

  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isCheck) {
      console.log(details);
    }
  });

  const handleClick = async (e) => {
    e.preventDefault();
    setFormErrors(validate(details));
    setIsCheck(true);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true); // Show loader
      try {
        const response = await sendCallRequest(details);
        if (response.success) {
          setDetails(initialValues); // Reset fields
          toast.success("Thank you, We Will Contact You Shortly");
        } else {
          toast.warning("Something Went Wrong, Try Again Sometime");
        }
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("An error occurred. Please try again.");
      } finally {
        setLoading(false); // Hide loader
      }
    }
  };

  const validate = (value) => {
    const selectDate = new Date(value.date);
    const currentDate = new Date();
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/i;
    if (value.name === "") {
      errors.name = "Please enter your name";
    }
    if (!regex.test(value.email)) {
      errors.email = "This is not a valid email";
    }
    if (value.phone === "") {
      errors.phone = "Please enter a phone number";
    } else if (value.phone.length < 10) {
      errors.phone = "Phone number should not be less than 10 digits";
    } else if (value.phone.length > 10) {
      errors.phone = "Phone number should not be greater than 10 digits";
    }
    if (value.message === "") {
      errors.message = "Please write a message";
    }
    if (selectDate < currentDate) {
      errors.date = "Please choose a correct or future date";
    }
    return errors;
  };

  return (
    <>
      {/* Appointment Start */}
      <div className="container-fluid py-6 px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="mb-4 p-4 gradient-bg text-white rounded">
              <h1 className="display-5 text-uppercase mb-4">
                Request A <span className="text-primary">Call Back</span>
              </h1>
              <p>
                Simply fill out the form below with your name, email, phone
                number, and preferred callback time, along with a brief message
                about your inquiry. We'll get back to you promptly to assist you
                with any questions or assistance you need. Rest assured, your
                privacy is our priority, and your information will be kept
                confidential. Looking forward to connecting with you soon!
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="p-5 gradient-bg-light text-center rounded">
              {loading && <div className="loader">Loading...</div>} {/* Loader */}
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      value={details.name}
                    />
                    <p className="err text-danger">{formErrors.name}</p>
                  </div>

                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      value={details.email}
                    />
                    <p className="err text-danger">{formErrors.email}</p>
                  </div>

                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="date"
                        name="date"
                        value={details.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Call Back Date"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <p className="err text-danger">{formErrors.date}</p>
                  </div>

                  <div className="col-12 col-sm-6">
                    <input
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      className="form-control border-0"
                      placeholder="Mobile Number"
                      style={{ height: "55px" }}
                      value={details.phone}
                    />
                    <p className="err text-danger">{formErrors.phone}</p>
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      rows="5"
                      name="message"
                      onChange={handleChange}
                      placeholder="Message"
                      value={details.message}
                    ></textarea>
                    <p className="err text-danger">{formErrors.message}</p>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3 gradient-btn"
                      type="button"
                      onClick={handleClick}
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
    </>
  );
};

export default Contact;
