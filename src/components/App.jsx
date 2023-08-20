import React, { Component } from "react";
import ReactDOM from "react-dom";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import { fetchImages } from "api";



export class App extends Component {
  state = {
    images : [],
    queue : '',
    page: 1
  };

  changeQueue = (newQueue) => {
    this.setState(prevState => {
      return {
        ...prevState,
        page : 1,
        queue : newQueue,
        loading : false

      }
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.queue !== this.state.queue){
      
      fetchImages(this.state.queue, this.state.page)
      .then(res =>{
        this.setState(prevState => {
          return {
            ...prevState,
            loading : true,
            images : res 
          }
        })
    })
    this.setState(prevState => {
      return {
        ...prevState,
        loading : false
      }
    })

    }
  }

  render() {
    return (
      <>
        <Searchbar changeQueue={this.changeQueue}/>
        {this.state.loading ? <Loader/> : <ImageGallery images={this.state.images}/>}
        {this.state.images.length ? <Button /> : null}
      </>
    );
  }
}

ReactDOM.render(<App step={5} />, document.getElementById("root"));