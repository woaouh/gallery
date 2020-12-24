import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Card.module.sass';

import { fetchBigImage } from '../../redux/gallerySlice';

export function Card({ id, url }) {
  const dispatch = useDispatch();
  const [bigImage, setBigImage] = useState(null);

  useEffect(() => {
    if (bigImage) {
      dispatch(fetchBigImage(id));
    }
  }, [bigImage, dispatch, id])

  function onCardClickHandler() {
    setBigImage(id);
  }
  return (
    <div className={classes.Card} onClick={onCardClickHandler}>
      <img src={url} alt={id} id={id} className='image' />
    </div>
  );
}
