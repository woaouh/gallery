import React from 'react';
import classes from './CommentsList.module.sass';

const mockComments = [
  { date: '18.12.2019', comment: 'Nice photo' },
  { date: '05.9.2019', comment: 'I was there!' },
];

export default function CommentsList() {
  return (
    <div className={classes.CommentsList}>
      {mockComments.map((comment) => (
        <div>
          <span className={classes.Date}>{comment.date}</span>
          <p className={classes.Comment}>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
