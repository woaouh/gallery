import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './App.module.scss';

import Backdrop from '../Backdrop/Backdrop';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

import { fetchImages } from '../../redux/gallerySlice';

export default function App() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(({ gallery }) => gallery.isModalOpen);
  const status = useSelector(({ gallery }) => gallery.status);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <main className={classes.app}>
      <h1>Photo Gallery</h1>
      {isModalOpen && <Backdrop />}
      {isModalOpen && <Modal />}
      {status === 'loading' ? <Loader /> : <Gallery />}
    </main>
  );
}
