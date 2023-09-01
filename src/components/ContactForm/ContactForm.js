import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledField,
  StyledButton,
  Error,
} from './ContactForm.style';

const scheme = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required!'),

  //* Для ментора: Тут я не знаю як додати валідацію для 654-42-42 такого вводу, тому залишив так
  number: Yup.number().required('Required!'),
});

export const ContactForm = ({ addContact }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={scheme}
        onSubmit={(values, actions) => {
          addContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Name
            <StyledField name="name" placeholder="Name" />
            <Error name="name" component="span" />
          </label>

          <label>
            Number
            <StyledField type="number" name="number" placeholder="Number" />
            <Error name="number" component="span" />
          </label>

          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
