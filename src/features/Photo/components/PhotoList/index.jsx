import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

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
                  <PhotoCard 
                    photo={photo}
                    onEditClick={onPhotoEditClick}
                    onRemoveClick={onPhotoRemoveClick}
                />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;