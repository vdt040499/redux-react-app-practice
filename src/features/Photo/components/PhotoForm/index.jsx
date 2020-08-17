import { PHOTO_CATEGORY_OPTION } from "constants/global";
import Images from "constants/images";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Label } from "reactstrap";

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
    };

  return (
    <Formik
        initialValues={initalValues}
    >
      {(formikProps) => {
        //do something here
        const { values, errors, touched } = formikProps;
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

            
            <FormGroup>
              <Label for="photoId">Photo</Label>
              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  src={Images.COLORFUL_BG}
                  width="200px"
                  height="200px"
                  alt="colorful_photo"
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
