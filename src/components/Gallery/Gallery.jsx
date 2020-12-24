import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Gallery.module.sass';
import { Card } from '../Card/Card';

export function Gallery() {
  const images = useSelector(({ gallery }) => gallery.images);
  return (
    <section className={classes.Gallery}>
      {images.map((image) => (
        <Card key={image.id} url={image.url} id={image.id} />
      ))}
    </section>
  );
}
