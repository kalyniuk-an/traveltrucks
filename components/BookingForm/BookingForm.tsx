'use client';

import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { MdErrorOutline } from 'react-icons/md';
import { createBooking } from '@/lib/api';
import css from './BookingForm.module.css';

interface BookingFormProps {
  camperId: string;
}

interface BookingFormValues {
  name: string;
  email: string;
}

const initialValues: BookingFormValues = {
  name: '',
  email: '',
};

const bookingSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^[\p{L}\s'-]{2,}$/u, 'Please enter your name.')
    .required('Please enter your name.'),
  email: Yup.string().trim().email('Please enter your email.').required('Please enter your email.'),
});

export default function BookingForm({camperId}: BookingFormProps) {
  const handleSubmit = async (
    values: BookingFormValues,
    actions: FormikHelpers<BookingFormValues>
  ) => {
    try {
      const { message } = await createBooking(camperId, {
        name: values.name.trim(),
        email: values.email.trim(),
      });
      toast.success(message);
      actions.resetForm();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={bookingSchema} onSubmit={handleSubmit}>
      {({ errors, touched, isSubmitting }) => {
        const nameError = touched.name && errors.name;
        const emailError = touched.email && errors.email;

        return (
          <Form className={css.form} noValidate>
            <h2 className={css.title}>Book your campervan now</h2>
            <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

            <div className={css.fields}>
              <div className={css.field}>
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                {nameError && <span className={css.floatingLabel}>Name*</span>}
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name*"
                  className={`${css.input} ${nameError ? css.inputError : ''}`}
                  aria-invalid={Boolean(nameError)}
                  aria-describedby={nameError ? 'name-error' : undefined}
                />
                {nameError && <MdErrorOutline className={css.errorIcon} aria-hidden="true" />}
                <ErrorMessage name="name" component="p" id="name-error" className={css.errorText} />
              </div>

              <div className={css.field}>
                <label htmlFor="email" className="visually-hidden">
                  Email
                </label>
                {emailError && <span className={css.floatingLabel}>Email*</span>}
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email*"
                  className={`${css.input} ${emailError ? css.inputError : ''}`}
                  aria-invalid={Boolean(emailError)}
                  aria-describedby={emailError ? 'email-error' : undefined}
                />
                {emailError && <MdErrorOutline className={css.errorIcon} aria-hidden="true" />}
                <ErrorMessage
                  name="email"
                  component="p"
                  id="email-error"
                  className={css.errorText}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${css.submit}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
