import Banner from 'components/Banner';
import Images from 'constants/images';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import PhotoList from 'features/Photo/components/PhotoList';
import { useSelector } from 'react-redux';

Main.propTypes = {};

function Main(props) {

    const photos = useSelector(state => state.photos);
    console.log(photos);

    const handlePhotoEditClick = (photo) => {
        console.log(photo);
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log(photo);
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG}/>
            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
                <PhotoList 
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default Main;