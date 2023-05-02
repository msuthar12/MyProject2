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
      country:"in"
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/${this.props.content}?country=${this.state.country}&category=${this.props.newsTypes}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });

    let newsData = await fetch(url);
    let myNewsData = await newsData.json();
    if (myNewsData.status == "ok") {
      
      
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

  loadNewsTypes = async () => {
    console.log("I am newsTypes");
    let url = `https://newsapi.org/v2/${this.props.content}?country=${this.state.country}&category=${this.props.newsTypes}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });

    let newsData = await fetch(url);
    let myNewsData = await newsData.json();
    if (myNewsData.status == "ok") {
      
      
      this.setState({
        articles: myNewsData.articles,
        totalResults: myNewsData.totalResults,
        loading: false,
      });
    }
  };

  changePageToNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/${this.props.content}?country=${this.state.country}&category=${this.props.newsTypes}&apiKey=${
        this.props.apiKey
      }&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
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
    let url = `https://newsapi.org/v2/${this.props.content}?country=${this.state.country}&category=${this.props.newsTypes}&apiKey=${
      this.props.apiKey
    }&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
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

  handleCountrySpecificNews = async () =>{

    let countryCode = document.getElementById("country").value;
    console.log(countryCode);
    let url = `https://newsapi.org/v2/${this.props.content}?country=${countryCode}&category=${this.props.newsTypes}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });

    let newsData = await fetch(url);
    let myNewsData = await newsData.json();
    if (myNewsData.status == "ok") {
      
      
      this.setState({
        articles: myNewsData.articles,
        totalResults: myNewsData.totalResults,
        loading: false,
        country:countryCode
      });

    } else {
      document.getElementById("navBtn").style.display="none";
      
      this.setState({
        errorMsg: "Sorry!! currently we are not available",
        loading: false,
      });
    }
    
  }

  render() {
    return (
      <>
        <div className="newsHeading">
          <h2>NEWS WORLD</h2>
        </div>
        <div className="countryContainer">
              <select name="country" id="country" onClick={this.handleCountrySpecificNews}>
                <option value="in">India</option>
                <option value="us">USA</option>
                <option value="mx">Mexico</option>
                <option value="ca">Canada</option>
                <option value="cn">China</option>
                <option value="ru">Russia</option>
                <option value="sg">Singapore</option>
                <option value="it">Italy</option>
                <option value="eg">Egypt</option>
                <option value="au">Australia</option>
              </select>
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
            
            disabled={this.state.page + 1 > this.state.totalResults / this.props.pageSize}
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
