import React from 'react';
import classes from './CommentsList.module.scss';

const mockComments = [
  { date: '18.12.2019', comment: 'Nice photo', id: 267 },
  { date: '05.9.2019', comment: 'I was there!', id: 125 },
];

export default function CommentsList() {
  return (
    <div className={classes.comments}>
      {mockComments.map((comment) => (
        <div key={comment.id}>
          <span className={classes.date}>{comment.date}</span>
          <p className={classes.comment}>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
