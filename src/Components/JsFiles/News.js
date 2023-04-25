import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "../Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=2`;
    this.setState({
      loading: true,
    });

    let newsData = await fetch(url);
    let myNewsData = await newsData.json();
    if (myNewsData.status == "ok") {
      
      console.log(myNewsData.status);
      this.setState({
        articles: myNewsData.articles,
        totalResults: myNewsData.totalResults,
        loading: false,
      });
    } else {
      document.getElementById("navBtn").style.display="none";
      
      this.setState({
        errorMsg: "Sorry!! currently we are not available",
        loading: false,
      });
    }
  }

  changePageToNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 2)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
        this.props.apiKey
      }&page=${this.state.page + 1}&pagesize=2`;
      this.setState({
        loading: true,
      });
      let newsData = await fetch(url);
      let myNewsData = await newsData.json();

      this.setState({
        page: this.state.page + 1,
        articles: myNewsData.articles,
        loading: false,
      });
    }
  };
  changePageToPrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      this.props.apiKey
    }&page=${this.state.page - 1}&pagesize=2`;
    this.setState({
      loading: true,
    });
    let newsData = await fetch(url);
    let myNewsData = await newsData.json();

    this.setState({
      page: this.state.page - 1,
      articles: myNewsData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="newsHeading">
          <h2>KhabriLal Ki Khabre</h2>
        </div>
        <div className="mainNewsContainer">
          <h1>{this.state.errorMsg}</h1>
          {this.state.loading && <Spinner />}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              let imgUrl = "";

              if (element.urlToImage == null || element.urlToImage === "/") {
                imgUrl =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqDTHZL2PkarHYtXZURqck83NIdLFHSaKiA&usqp=CAU";
              } else {
                imgUrl = element.urlToImage;
              }

              return (
                <div className="newsContainer" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 70) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={imgUrl}
                    readMoreUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div id="navBtn" className="pageNavigateBtn">
          <button
            
            disabled={this.state.page <= 1}
            className="previousBtn"
            onClick={this.changePageToPrevious}
          >
            Previous
          </button>
          <button
            
            disabled={this.state.page + 1 > this.state.totalResults / 2}
            className="nextBtn"
            onClick={this.changePageToNext}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
