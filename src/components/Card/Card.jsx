import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Card.module.sass';

import { fetchBigImage, toggleModal } from '../../redux/gallerySlice';

export default function Card({ id, url }) {
  const dispatch = useDispatch();
  const [bigImage, setBigImage] = useState(null);

  useEffect(() => {
    if (bigImage) {
      dispatch(fetchBigImage(id));
    }
  }, [bigImage, dispatch, id]);

  function onCardClickHandler() {
    setBigImage(id);
    dispatch(toggleModal());
  }
  return (
    <div className={classes.Card} onClick={onCardClickHandler} onKeyUp={onCardClickHandler} role="button" tabIndex="0">
      <img src={url} alt="gallery content" />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
