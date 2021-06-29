// Burada post işlemleri için bir component oluşturduk.

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormField, Button, Label } from 'semantic-ui-react'
import NorthwindTextInput from '../utilities/customFormControls/NorthwindTextInput'

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 0 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur")
    })

    return (
        // <div>
        <Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                // console.log(values)
            }}>
            <Form className="ui form">
                <NorthwindTextInput name="productName" placeholder="Ürün Adı" />

                {/* <FormField>
                        <Field name="productName" placeholder="Ürün Adı" ></Field>
                        <ErrorMessage name="productName" render={error =>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>

                        <label>Ürün Adı</label>
                        <input value="productName" name="productName" placeholder='Ürün Adı' />

                    </FormField> */}

                <NorthwindTextInput name="unitPrice" placeholder="Ürün Fiyatı" />

                {/* <FormField>

                        <Field name="unitPrice" placeholder="Ürün Fiyatı" ></Field>
                        <ErrorMessage name="unitPrice" render={error =>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>

                        <label>Ürün Fiyatı</label>
                        <input value="unitPrice" name="unitPrice" placeholder='Ürün Fiyatı' />

                    </FormField> */}
                <Button color="green" type="submit" >Ekle</Button>
            </Form>
        </Formik>
        // </div>
    )
}
