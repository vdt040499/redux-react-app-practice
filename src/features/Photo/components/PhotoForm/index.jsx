import React from 'react';
import PropTypes from 'prop-types';

import Images from '../../../../constants/images';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTION } from '../../../../constants/global';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
            </FormGroup>

            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select 
                    name="category"
                    id="categoryId"

                    placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTION}
                />
            </FormGroup>
            <FormGroup>
                <Label for="photoId">Photo</Label>
                <div><Button type="button" outline color="primary">Random a photo</Button></div>
                <div>
                    <img src={Images.COLORFUL_BG} width="200px" height="200px" alt="colorful_photo"/>
                </div>
            </FormGroup>
            <FormGroup>
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;