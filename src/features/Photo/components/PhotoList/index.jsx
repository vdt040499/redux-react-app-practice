import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, CardImg } from 'reactstrap';

PhotoList.propTypes = {
    photoList: PropTypes.object,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
    photoList: [],
    onPhotoEditClick: null,
    onPhotoRemoveClick: null,
}

function PhotoList(props) {

    const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

    return (
        <Row>
            {photoList.map(photo => (
                <Col xs='12' md='6' lg='3'>
                  <CardImg src={photo.photo}></CardImg>
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;