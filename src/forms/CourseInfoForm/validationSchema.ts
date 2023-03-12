import * as Yup from 'yup';

const requiredMessage = 'Обязательное поле!';

const minLength = 3;

const lengthErrorMessage = `Количество символов должно быть больше, чем ${minLength}!`;

const urlErrorMessage = 'Неверный формат ссылки';

export const validationSchema = Yup.object().shape({
  course_name: Yup.string().required(requiredMessage).min(minLength, lengthErrorMessage),
  tag: Yup.string().required(requiredMessage).min(minLength, lengthErrorMessage),
  cover_url: Yup.string().url(urlErrorMessage).required(requiredMessage),
  description: Yup.string().required(requiredMessage),
  start_date: Yup.date(),
  end_date: Yup.date(),
  course_program: Yup.array().of(
    Yup.object().shape({
      heading: Yup.string().required(requiredMessage).min(minLength, lengthErrorMessage),
      description: Yup.string().required(requiredMessage).min(minLength, lengthErrorMessage)
    })
  )
});
