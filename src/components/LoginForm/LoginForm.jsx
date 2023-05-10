// import { Title, Section, Button, List, Item } from '../Feedback/styled'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//     login: yup.string().required(),
//     password: yup.string().min(6).max(16).required(),
// })

// const initialValues = {
//     login: '',
//     password: '',
// }

// export const LoginForm = () => {
//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     const {login, password} = e.target.elements
//     //     console.log(login.value)
//     //     console.log(password.value)
//     // }
//     const handleSubmit = (values, {resetForm}) => {
//         console.log(values)
//         resetForm();
//     }

//     return (
//          <Formik initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit}>
//         <Section>
//         <Form autoComplete="off">
//             <label htmlFor="login">
//                 Login
//                         <Field type="text" name="login" />
//                          <ErrorMessage component="div" name="login" />
//             </label>
//             <label htmlFor="password">
//                 Password
//                         <Field type="password" name="password" />
//                          <ErrorMessage component="div" name="password" />
//             </label>
//             <button type="submit">Submit</button>
//             </Form>
//             </Section>
//              </Formik>
//     )
// }