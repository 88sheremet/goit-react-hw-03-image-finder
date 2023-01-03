import { Component } from "react"
import css from "../ImageGalleryItem/.ImageGalleryItem.module.css"

export class ImageGalleryItem extends Component {
    render(){
        return (
            <li className={css.ImageGalleryItem}>
  <img className={css.ImageGalleryItemImage} src="" alt="search image" />
</li>
        )
    }
  }