/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  images: [],
  status: 'idle',
  error: null,
  bigImage: '',
  bigImageStatus: 'idle',
  bigImageError: null,
  isModalOpen: false,
};

const URL = 'https://boiling-refuge-66454.herokuapp.com/images';

export const fetchImages = createAsyncThunk('gallery/fetchImages', async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
});

export const fetchBigImage = createAsyncThunk('gallery/fetchBigImage', async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const result = await response.json();
  return result;
});

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
  extraReducers: {
    [fetchImages.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchImages.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.images = action.payload;
    },
    [fetchImages.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchBigImage.pending]: (state) => {
      state.bigImageStatus = 'loading';
      state.isModalOpen = true;
    },
    [fetchBigImage.fulfilled]: (state, action) => {
      state.bigImageStatus = 'succeeded';
      state.bigImage = action.payload.url;
    },
    [fetchBigImage.rejected]: (state, action) => {
      state.bigImageStatus = 'failed';
      state.bigImageError = action.error.message;
    },
  },
});

export const { toggleModal } = gallerySlice.actions;

export default gallerySlice.reducer;
