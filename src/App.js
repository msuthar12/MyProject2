import "./Components/CssFiles/Navbar.css";
import "./Components/CssFiles/NewsItems.css";
import "./Components/CssFiles/NewsContainer.css";
import "./Components/CssFiles/ItemModal.css";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/JsFiles/Navbar";
import News from "./Components/JsFiles/News";
import ItemModal from "./Components/JsFiles/ItemModal";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newsTypes: "",
      handleNews: this.allNews,
      child: React.createRef(),
      buttonStatus: "on",
    };
  }

  newsLoader = () => {
    this.state.child.current.loadNewsTypes();
    this.setState({ buttonStatus: "off" });
    console.log("I am setTimeOut");
  };

  allNews = (event) => {
    
    document.getElementById("typeBtn1").style.backgroundColor = "#353839";
    document.getElementById("typeBtn1").style.color = "#e7eff6";
    document.getElementById("typeBtn1").disabled = false;

    document.getElementById("typeBtn2").style.backgroundColor = "#353839";
    document.getElementById("typeBtn2").style.color = "#e7eff6";
    document.getElementById("typeBtn2").disabled = false;

    document.getElementById("typeBtn3").style.backgroundColor = "#353839";
    document.getElementById("typeBtn3").style.color = "#e7eff6";
    document.getElementById("typeBtn3").disabled = false;

    document.getElementById("typeBtn4").style.backgroundColor = "#353839";
    document.getElementById("typeBtn4").style.color = "#e7eff6";
    document.getElementById("typeBtn4").disabled = false;

    


    if (event.target.id == "typeBtn1") {
      this.setState({ newsTypes: "technology" });
      document.getElementById(event.target.id).style.backgroundColor =
        "#e7eff6";
      document.getElementById(event.target.id).style.color = "#353839";
      document.getElementById(event.target.id).disabled = true;
    } else if (event.target.id == "typeBtn2") {
      this.setState({ newsTypes: "sports" });
      document.getElementById(event.target.id).style.backgroundColor =
        "#e7eff6";
      document.getElementById(event.target.id).style.color = "#353839";
      document.getElementById(event.target.id).disabled = true;
    } else if (event.target.id == "typeBtn3") {
      this.setState({ newsTypes: "politics" });
      document.getElementById(event.target.id).style.backgroundColor =
        "#e7eff6";
      document.getElementById(event.target.id).style.color = "#353839";
      document.getElementById(event.target.id).disabled = true;
    } else {
      this.setState({ newsTypes: "business" });
      document.getElementById(event.target.id).style.backgroundColor =
        "#e7eff6";
      document.getElementById(event.target.id).style.color = "#353839";
      document.getElementById(event.target.id).disabled = true;
    }

    
    console.log("I am tech");
    setTimeout(() => {
      this.newsLoader();
    }, 500);
  };

  render() {
    return (
      <div className="mainContainer">
        <Navbar
          btnStatus={this.state.buttonStatus}
          handleNews={this.state.handleNews}
        />

        <News
          ref={this.state.child}
          apiKey="4ca0a7e5deed4567a1a57c6b41596bff"
          content="top-headlines"
          newsTypes={this.state.newsTypes}
          pageSize="6"
        />

        {/* <ItemModal/> */}
      </div>
    );
  }
}
