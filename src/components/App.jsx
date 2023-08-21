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
        queue : newQueue
      }
    })
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        page : prevState.page + 1
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
    }).then(() =>{
      this.setState(prevState =>{
        return {
          ...prevState,
          loading : false
        }
      })
    });
    

    }

    if(prevState.page !== this.state.page){
      console.warn(`Page ${this.state.page}`)
      fetchImages(this.state.queue, this.state.page)
      .then(res =>{
        this.setState(prevState => {
          return {
            ...prevState,
            images : [...prevState.images, ...res] 
          }
        })
      })
    
    }
  }

  render() {
    return (
      <>
        <Searchbar changeQueue={this.changeQueue}/>
        {this.state.loading ? <Loader/> : <ImageGallery images={this.state.images}/>}
        {this.state.images.length !== 0 ? <Button loadMore={this.handleLoadMore}/> : null}
      </>
    );
  }
}

ReactDOM.render(<App step={5} />, document.getElementById("root"));