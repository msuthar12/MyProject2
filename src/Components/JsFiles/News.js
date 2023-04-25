import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount(){

    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca0a7e5deed4567a1a57c6b41596bff&page=${this.state.page}`;
    let newsData = await fetch(url);
    let myNewsData = await newsData.json();
    
    this.setState({
      articles:myNewsData.articles
    });
  }

  changePageToNext =async ()=>{
   
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca0a7e5deed4567a1a57c6b41596bff&page=${this.state.page+1}`;
    let newsData = await fetch(url);
    let myNewsData = await newsData.json();
    
    this.setState({
      page:this.state.page+1,
      articles:myNewsData.articles
    });
    
  }
  changePageToPrevious =async ()=>{
    
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca0a7e5deed4567a1a57c6b41596bff&page=${this.state.page-1}`;
    let newsData = await fetch(url);
    let myNewsData = await newsData.json();
    
    this.setState({
      page:this.state.page-1,
      articles:myNewsData.articles
    });
    
  }
  
  

  render() {
    
    return (
      <>
        <div className="newsHeading">
          <h2>KhabriLal Ki Khabre</h2>
        </div>
        <div className="mainNewsContainer">
          {this.state.articles.map((element) => {

              let imgUrl = "";

              if (element.urlToImage==null || element.urlToImage==="/"){

                imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqDTHZL2PkarHYtXZURqck83NIdLFHSaKiA&usqp=CAU";
                
              }
              else{
                imgUrl = element.urlToImage;
              }

            return (
              <div className="newsContainer" key={element.Id}>
                <NewsItems title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,88):""} imageUrl={imgUrl} readMoreUrl={element.url} />
              </div>
            );
          })}
        </div>
        <div className="pageNavigateBtn">
          <button disabled={this.state.page<=1} className="previousBtn" onClick={this.changePageToPrevious}>Previous</button>
          <button disabled={this.state.page===2} className="nextBtn" onClick={this.changePageToNext}>Next</button>
        </div>
      </>
    );
  }
}
