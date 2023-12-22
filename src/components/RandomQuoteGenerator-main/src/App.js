import React from "react";
import { getRandomNumber, quotes, getRandomColor } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";

export class App extends React.Component {
  constructor(props) {
    super(props);
    if (quotes.length === 0) {
      this.state = {
        quote: quotes[0].quote,
        author: quotes[0].author
      };
    } else {
      const x = getRandomNumber(0, quotes.length);
      this.state = {
        quote: quotes[x]?.quote || quotes[0]?.quote,
        author: quotes[x]?.author || quotes[0]?.quote
      };
    }
  }

  handleChange = () => {
    let x = getRandomColor();
    document.documentElement.style.setProperty("--background-color", x);
    const randomNumber = getRandomNumber(0, quotes.length);
    if (randomNumber >= quotes.length) {
      this.setState({
        quote: quotes[0].quote,
        author: quotes[0].author
      });
    } else {
      this.setState({
        quote: quotes[randomNumber]?.quote || "No quotes available",
        author: quotes[randomNumber]?.author || "Unknown"
      });
    }
  };

  render() {
    return (
      <div className="quote-box" id="quote-box">
        <div className="social-media-buttons">
          <a
            title="Tweet it!"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${this.state.quote}+${this.state.author}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            title="Post it on Tumblr!"
            id="tumblr_icon"
            href={`https://twitter.com/intent/tweet?text=${this.state.quote}+${this.state.author}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTumblr} />
          </a>
        </div>
        <div className="text" id="text">
          {this.state.quote}
        </div>
        <div className="author" id="author">
          {this.state.author}
        </div>
        <button
          className="new-quote"
          id="new-quote"
          onClick={this.handleChange.bind(this)}
        >
          New Quote
        </button>
        <div className="by" id="by">
          <a
            className="page-author"
            id="page-author"
            href="https://www.linkedin.com/in/sergiu-george-pop-0a9097260/"
          >
            by Pop Sergiu-George
          </a>
        </div>
      </div>
    );
  }
}
