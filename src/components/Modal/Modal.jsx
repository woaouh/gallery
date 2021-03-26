/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Modal.module.scss';

import Loader from '../Loader/Loader';

import { toggleModal } from '../../redux/gallerySlice';
import Form from '../Form/Form';
import CommentsList from '../CommentsList/CommentsList';

export default function Modal() {
  const dispatch = useDispatch();
  const imageUrl = useSelector(({ gallery }) => gallery.bigImage.url);
  const bigImageStatus = useSelector(({ gallery }) => gallery.bigImageStatus);

  function onCloseModalHandler() {
    dispatch(toggleModal());
  }

  return (
    <dialog className={classes.modal}>
      <div className={classes.left_block}>
        <div className={classes.image_container}>
          {bigImageStatus === 'succeeded' ? <img src={imageUrl} alt="gallery content" /> : <Loader />}
        </div>
        <Form />
      </div>
      <CommentsList />
      <button className={classes.close_btn} onClick={onCloseModalHandler} type="button" />
    </dialog>
  );
}
