import { PHOTO_CATEGORY_OPTION } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
    const initalValues = {
        title: '',
        categoryId: null,
        photo: '',
    };

    const validationSchema = Yup.object().shape({
      title: Yup.string().required('This field is required.'),

      categoryId: Yup.number().required('This field is required.').nullable(),

      photo: Yup.string().when('categoryId', {
        is: 1,
        then: Yup.string().required('This field is required.'),
        otherwise: Yup.string().notRequired()
      }),
    });

  return (
    <Formik
        initialValues={initalValues}
        validationSchema={validationSchema}
        onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        //do something here
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
                name='title'
                component={InputField}

                label="Title"
                placeholder="Eg: Wow nature ..."
            >   
            </FastField>

            <FastField
                name='categoryId'
                component={SelectField}

                label="Category"
                placeholder="What's your photo category ?"
                options={PHOTO_CATEGORY_OPTION}
            >   
            </FastField>

            <FastField
                name='photo'
                component={RandomPhotoField}

                label="Photo"
            >   
            </FastField>

            <FormGroup>
              <Button type='submit' color="primary">
                {isSubmitting && <Spinner size='sm'/>}
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
