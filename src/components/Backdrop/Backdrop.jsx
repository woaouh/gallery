/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Backdrop.module.scss';

import { toggleModal } from '../../redux/gallerySlice';

export default function Backdrop() {
  const dispatch = useDispatch();

  function onBackdropClickHandler() {
    dispatch(toggleModal());
  }

  return (
    <div
      className={classes.backdrop}
      onClick={onBackdropClickHandler}
      onKeyUp={onBackdropClickHandler}
      role="button"
      tabIndex="0"
    />
  );
}
