import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Form.module.sass';

import { postComment } from '../../redux/gallerySlice';

export default function Form() {
  const dispatch = useDispatch();
  const imageId = useSelector(({ gallery }) => gallery.bigImage.id);
  const [form, setForm] = useState({ name: '', comment: '' });

  function onSubmitHandler(e) {
    e.preventDefault();
    const body = { id: imageId, body: form };
    dispatch(postComment(body));
  }

  function onChangeHandler({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <form name="comment-form" className={classes.Form} onSubmit={onSubmitHandler}>
      <input type="text" name="name" placeholder="Your name" onChange={onChangeHandler} />
      <input type="text" name="comment" placeholder="Your comment" onChange={onChangeHandler} />
      <button type="submit">Leave a comment</button>
    </form>
  );
}
