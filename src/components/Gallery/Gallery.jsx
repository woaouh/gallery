import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Gallery.module.sass';

import Card from '../Card/Card';

import { fetchBigImage, toggleModal } from '../../redux/gallerySlice';

export default function Gallery() {
  const images = useSelector(({ gallery }) => gallery.images);
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentId) {
      dispatch(fetchBigImage(currentId));
    }
  }, [dispatch, currentId]);

  function onCardClickHandler(id) {
    setCurrentId(id);
    dispatch(toggleModal());
  }
  return (
    <section className={classes.Gallery}>
      {images.map((image) => (
        <Card key={image.id} url={image.url} id={image.id} onClickHandler={onCardClickHandler} />
      ))}
    </section>
  );
}
