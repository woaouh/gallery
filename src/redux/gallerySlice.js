import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  images: [],
  status: 'idle',
  error: null,
  bigImage: '',
  bigImageStatus: 'idle',
  bigImageError: null,
  isModalOpen: false,
}

const URL = 'https://boiling-refuge-66454.herokuapp.com/images';

export const fetchImages = createAsyncThunk('gallery/fetchImages', async () => {
  const response = await fetch(URL);
  return await response.json();
})

export const fetchBigImage = createAsyncThunk('gallery/fetchBigImage', async (id) => {
  const response = await fetch(`${URL}/${id}`);
  return await response.json();
})

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    closeModal(state) {
      state.isModalOpen = false
    },
  },
  extraReducers: {
    [fetchImages.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchImages.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.images = action.payload
    },
    [fetchImages.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchBigImage.pending]: (state, action) => {
      state.bigImageStatus = 'loading'
    },
    [fetchBigImage.fulfilled]: (state, action) => {
      state.bigImageStatus = 'succeeded'
      state.isModalOpen = true
      state.bigImage = action.payload.url
    },
    [fetchBigImage.rejected]: (state, action) => {
      state.bigImageStatus = 'failed'
      state.bigImageError = action.error.message
    }
  }
})

export const { closeModal } = gallerySlice.actions;

export default gallerySlice.reducer;