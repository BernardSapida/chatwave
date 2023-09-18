import * as Yup from 'yup';

export const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
};

export const validationSchema = Yup.object({
    firstname: Yup.string().min(6, 'Firstname is too short').required('Firstname is required'),
    lastname: Yup.string().min(6, 'Lastname is too short').required('Lastname is required'),
    email: Yup.string().email('Email address is invalid').required('Email is required'),
});