import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert('Form submitted successfully!');
      }}
    >
      {({ isSubmitting }) => (
        <Form style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" style={styles.input} />
            <ErrorMessage name="firstName" component="div" style={styles.error} />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" style={styles.input} />
            <ErrorMessage name="lastName" component="div" style={styles.error} />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" style={styles.input} />
            <ErrorMessage name="email" component="div" style={styles.error} />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" style={styles.input} />
            <ErrorMessage name="password" component="div" style={styles.error} />
          </div>

          <button type="submit" disabled={isSubmitting} style={styles.button}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '300px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '-10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default UserForm;
