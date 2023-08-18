import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal, Button } from 'react-bootstrap';

const AdminLogin = ({ show, handleClose }) => {

  // Define the initial form values
  const initialValues = {
    email: '',
    password: '',
  };

  // Define the form validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Perform login logic here, e.g., API call, authentication
    console.log(values);
    setSubmitting(false);
  };


  return (
    <Modal className="admin-login-container" show={show} onHide={handleClose}>
      <Modal.Header closeButton className="admin-login-header"><span className="login-modal-header">Admin Secrect!</span></Modal.Header>
      <Modal.Body className="admin-login-body">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="admin-login-form">
              <div className="email-group">
                <Field className="admin-email" type="email" id="email" name="email" placeholder="Email Address"/>
                <ErrorMessage className="admin-login-error" name="email" component="div" />
              </div>
              <div className="password-group">
                <Field className="admin-password" type="password" id="password" name="password" placeholder="Password"/>
                <ErrorMessage className="admin-login-error" name="password" component="div" />
              </div>
                <div>
                 <Button className="login-modal-submit" type="submit" disabled={isSubmitting}>Login </Button>
                </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default AdminLogin;
