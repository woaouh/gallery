import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';

export default function Card({ id, url, onClickHandler }) {
  return (
    <div
      className={classes.card}
      onClick={() => onClickHandler(id)}
      onKeyUp={() => onClickHandler(id)}
      role="button"
      tabIndex="0"
    >
      <img src={url} alt="gallery content" />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
