/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Modal.module.sass';

import Loader from '../Loader/Loader';

import { closeModal } from '../../redux/gallerySlice';

export default function Modal() {
  const dispatch = useDispatch();
  const imageUrl = useSelector(({ gallery }) => gallery.bigImage);

  function onCloseModalHandler() {
    dispatch(closeModal());
  }
  return (
    <dialog className={classes.Modal}>
      <div className={classes.LeftBlock}>
        <div className={classes.ImageContainer}>
          {imageUrl ? <img src={imageUrl} alt="gallery content" /> : <Loader />}
        </div>
        <form name="comment-form">
          <input type="text" name="name" placeholder="Your name" />
          <input type="text" name="comment" placeholder="Your comment" />
          <button type="button">Leave a comment</button>
        </form>
      </div>
      <div className={classes.RightBlock}>
        <div>
          <span className={classes.Date}>18.12.2019</span>
          <p className={classes.Comment}>Nice photo</p>
        </div>
        <div>
          <span className={classes.Date}>18.12.2019</span>
          <p className={classes.Comment}>I was there!</p>
        </div>
      </div>
      <button className={classes.CloseBtn} onClick={onCloseModalHandler} type="button" />
    </dialog>
  );
}
