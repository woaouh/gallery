import { useDispatch, useSelector } from 'react-redux';
import classes from './Modal.module.sass';

import { closeModal } from '../../redux/gallerySlice';

export function Modal() {
  const dispatch = useDispatch();
  const imageUrl = useSelector(({ gallery }) => gallery.bigImage);

  function onCloseModalHandler() {
    dispatch(closeModal());
  }
  return (
    <dialog className={classes.Modal}>
      <div className={classes.LeftBlock}>
        <div className={classes.ImageContainer}>
          <img src={imageUrl} alt="gallery content" />
        </div>
        <form name='comment-form'>
          <input type='text' name='name' placeholder='Your name' />
          <input type='text' name='comment' placeholder='Your comment' />
          <button>Leave a comment</button>
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
      <button className={classes.CloseBtn} onClick={onCloseModalHandler}></button>
    </dialog>
  );
}
