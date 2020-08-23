import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react";
import "./AddEdit.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router-dom";

AddEdit.propTypes = {};

function AddEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector(state => state.photos.find(x => x.id === parseInt(photoId)));

  const initialValues = isAddMode
    ? {
      title: '',
      categoryId: null,
      photo: '',
    }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit: ", values);

      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(values);
          console.log({ action });
          dispatch(action);
          return;
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />
      <div className="photo-edit__form">
        <PhotoForm 
          initialValues={initialValues}
          onSubmit={handleSubmit} 
        />
      </div>
    </div>
  );
}

export default AddEdit;
