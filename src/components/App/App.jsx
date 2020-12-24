import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './App.module.sass';

import { Backdrop } from '../Backdrop/Backdrop';
import { Gallery } from '../Gallery/Gallery';
import { Modal } from '../Modal/Modal';

import { fetchImages } from '../../redux/gallerySlice';

export function App() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(({ gallery }) => gallery.isModalOpen);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <main className={classes.App}>
      <h1>Photo Gallery</h1>
      {isModalOpen && <Backdrop />}
      {isModalOpen && <Modal />}
      <Gallery />
    </main>
  );
}
