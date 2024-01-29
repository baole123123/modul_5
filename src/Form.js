// import React, { useState } from 'react';

// function Form(props) {
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confimpassword: "",
//     })
//     const handleChange = (event) => {
//         setForm({
//             ...form,
//             [event.target.name]: event.target.value
//         });
//     }
//     const handleSubmit = () => {
//         if (form.name == "" && form.email == "" && form.password == "") {
//             alert("vui lòng điền")
//         }
//         else {
//             const user = { ...form }
//             alert("Đăng nhập thành công ")
//         }
//     }
//     const handleReset = () => {
//         setForm({
//             name: "",
//             email: "",
//             password: "",
//             confimpassword: "",
//         })
//     }
//     return (
//         <div>
//             {/* <h1>Hello {form.name} -- {form.email} -- {form.password}</h1> */}
//             <form>
//                 <div>
//                     <label>Name: </label>
//                     <input name="name" value={form.name} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label>Email: </label>
//                     <input name="email" value={form.email} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label>Password: </label>
//                     <input name="password" value={form.password} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label>Password: </label>
//                     <input name="confimpassword" value={form.confimpassword} onChange={handleChange} />
//                 </div>
//                 <button onClick={handleSubmit}>Submit</button>
//                 <button onClick={handleReset}>Reset</button>
//             </form>
//         </div>
//     );
// }

// export default Form;



import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./App.css";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Quá ngắn!")
        .max(50, "Quá dài!")
        .required("Vui lòng điền"),
    lastName: Yup.string()
        .min(2, "Quá ngắn!")
        .max(50, "Quá dài!")
        .required("Vui lòng điền"),
    email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng điền")
});

function DemoFormik(props) {
    return (
        <div>
            <h1>Hello</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: ""
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <label htmlFor="lastName">Last Name</label>

                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <label htmlFor="email">Email</label>

                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default DemoFormik;