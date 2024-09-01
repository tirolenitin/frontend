// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { sendCallRequest } from "../../../services/ApiServices";

// const InquiryModal = ({ show, handleClose, productName }) => {
//   const [contactDetails, setContactDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: productName || "",
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setContactDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission
// //     console.log(contactDetails);
// //     handleClose(); // Close the modal after submission
// //   };


//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isCheck) {
//       console.log(details);
//     }
//   });

//   const handleClick = async (e) => {
//     e.preventDefault();
//     setFormErrors(validate(details));
//     setIsCheck(true);

//     if (Object.keys(formErrors).length === 0) {
//       setLoading(true); // Show loader
//       try {
//         const response = await sendCallRequest(contactDetails);
//         if (response.success) {
//           setContactDetails({
//             name: "",
//             email: "",
//             phone: "",
//             message:"",
//           }); // Reset fields
//           toast.success("Thank you, We Will Contact You Shortly");
//         } else {
//           toast.warning("Something Went Wrong, Try Again Sometime");
//         }
//       } catch (error) {
//         console.error("Submission error:", error);
//         toast.error("An error occurred. Please try again.");
//       } finally {
//         setLoading(false); // Hide loader
//       }
//     }
//   };

//   const validate = (value) => {
//     const selectDate = new Date(value.date);
//     const currentDate = new Date();
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/i;
//     if (value.name === "") {
//       errors.name = "Please enter your name";
//     }
//     if (!regex.test(value.email)) {
//       errors.email = "This is not a valid email";
//     }
//     if (value.phone === "") {
//       errors.phone = "Please enter a phone number";
//     } else if (value.phone.length < 10) {
//       errors.phone = "Phone number should not be less than 10 digits";
//     } else if (value.phone.length > 10) {
//       errors.phone = "Phone number should not be greater than 10 digits";
//     }
//     if (value.message === "") {
//       errors.message = "Please write a message";
//     }
//     if (selectDate < currentDate) {
//       errors.date = "Please choose a correct or future date";
//     }
//     return errors;
//   };
//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Send Inquiry</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form >
//           <Form.Group controlId="formName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your name"
//               name="name"
//               value={contactDetails.name}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter your email"
//               name="email"
//               value={contactDetails.email}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="formPhone">
//             <Form.Label>Phone</Form.Label>
//             <Form.Control
//               type="tel"
//               placeholder="Enter your phone number"
//               name="phone"
//               value={contactDetails.phone}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="formMessage">
//             <Form.Label>Message</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               placeholder="Enter your message"
//               name="message"
//               value={contactDetails.message}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Button variant="primary" type="button" onClick={handleClick}>
//             Submit Inquiry
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default InquiryModal;


import React, { useState ,useEffect} from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { sendCallRequest } from "../../../services/ApiServices";
import { toast } from "react-toastify";

const InquiryModal = ({ show, handleClose, productName }) => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: productName || "",
  });

  const [loading, setLoading] = useState(false); // For loader state
  const [formErrors, setFormErrors] = useState({});
  const [isCheck, setIsCheck] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const errors = validate(contactDetails);
    setFormErrors(errors);
    setIsCheck(true);

    if (Object.keys(errors).length === 0) {
      setLoading(true); // Show loader
      try {
        const response = await sendCallRequest(contactDetails);
        if (response.success) {
          setContactDetails({
            name: "",
            email: "",
            phone: "",
            message: productName || "",
          }); // Reset fields
          toast.success("Thank you, We Will Contact You Shortly");
          handleClose(); // Close the modal after successful submission
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
    return errors;
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Inquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={contactDetails.name}
              onChange={handleChange}
              isInvalid={!!formErrors.name}
              required
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={contactDetails.email}
              onChange={handleChange}
              isInvalid={!!formErrors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={contactDetails.phone}
              onChange={handleChange}
              isInvalid={!!formErrors.phone}
              required
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              name="message"
              value={contactDetails.message}
              onChange={handleChange}
              isInvalid={!!formErrors.message}
              required
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={handleClick}
            disabled={loading} // Disable button when loading
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Submit Inquiry"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InquiryModal;
