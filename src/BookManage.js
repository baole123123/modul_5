import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    firstTitle: Yup.string()
        .required("Vui lòng điền"),
    lastQuantity: Yup.string()
        .required("Vui lòng điền")
});

function BookManage(props) {
    return (
        <div>
            <h1>Hello</h1>
            <Formik
                initialValues={{
                    firstTitle: "",
                    lastQuantity: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="firstTitle">Tiêu đề</label>
                        <Field name="firstTitle" />
                        {errors.firstTitle && touched.firstTitle ? (
                            <div>{errors.firstTitle}</div>
                        ) : null}
                        <label htmlFor="lastQuantity">Số lượng</label>

                        <Field name="lastQuantity" />
                        {errors.lastQuantity && touched.lastQuantity ? (
                            <div>{errors.lastQuantity}</div>
                        ) : null}
                        <button type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default BookManage;