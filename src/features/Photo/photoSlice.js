import { createSlice } from '@reduxjs/toolkit';

const photo = createSlice({
    name: 'photo',
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            const removePhotoId = action.payload;
            return state.filter(photo => photo.id !== removePhotoId);
        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto } = actions;
export default reducer;