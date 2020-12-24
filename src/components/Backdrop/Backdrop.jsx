import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Backdrop.module.sass';

import { closeModal } from '../../redux/gallerySlice';

export function Backdrop() {
  const dispatch = useDispatch();

  function onBackdropClickHandler() {
    dispatch(closeModal());
  }
  return <div className={classes.Backdrop} onClick={onBackdropClickHandler} />;
}
