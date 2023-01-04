import { Component } from "react";
import css from "../Modal/Modal.module.css"

export class Modal extends Component {

  onEscape = (e) => { if (e.key === 'Escape') this.props.hideModal() }  
    
  onClick = (e) => { if (e.target === e.currentTarget) this.props.hideModal() } 

  componentDidMount() {         
      window.addEventListener("keydown", this.onEscape);   
  }

  componentWillUnmount() { 
      window.removeEventListener("keydown", this.onEscape);
  }

    render(){
        return (
            <div className={css.Overlay}>
  <div className={css.Modal}>
    <img src={this.props.imgUrl} alt="" />
  </div>
</div>
        )
    }
}