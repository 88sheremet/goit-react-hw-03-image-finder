import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";
import css from "../ImageGallery/ImageGallery/module.css"

export class ImageGalley extends Component {
    render(){
        return (
            <ul className={css.ImageGallery}>
                <ImageGalleryItem/>
  {/* <!-- Набор <li> с изображениями --> */}
</ul>
        )
    }
}