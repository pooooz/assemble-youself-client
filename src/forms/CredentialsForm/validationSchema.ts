import * as Yup from 'yup';

import { Target } from './types';

const requiredMessage = 'Обязательное поле!';

const minNameLength = 3;
const minPasswordLength = 8;

const nameLengthErrorMessage = `Количество символов в имени должно быть больше, чем ${minNameLength}!`;
const emailFormatErrorMessage = 'Неверный формат email!';
const passwordLengthErrorMessage = `Количество символов в пароле должно быть больше, чем ${minPasswordLength}!`;

export const getValidationSchema = (target: Target) => (target === 'registration'
  ? Yup.object().shape({
    name: Yup.string().required(requiredMessage).min(minNameLength, nameLengthErrorMessage),
    email: Yup.string().email(emailFormatErrorMessage).required(requiredMessage),
    password: Yup.string().required(requiredMessage).min(
      minPasswordLength,
      passwordLengthErrorMessage
    )
  })
  : Yup.object().shape({
    email: Yup.string().email(emailFormatErrorMessage).required(requiredMessage),
    password: Yup.string().required(requiredMessage).min(
      minPasswordLength,
      passwordLengthErrorMessage
    )
  }));
