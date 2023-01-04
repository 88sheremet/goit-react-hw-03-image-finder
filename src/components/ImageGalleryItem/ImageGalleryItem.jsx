// import { Component } from "react"
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ image, clickHandler }) =>  (
        <li className={css.ImageGalleryItem} onClick={clickHandler}>
           <img className={css.ImageGalleryItemImage} src={image.webformatURL} data-modal={image.largeImageURL} alt={image.tags} />
        </li>
  )