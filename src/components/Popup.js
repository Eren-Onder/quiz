import React from "react";

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "start",
      title: "Quiz için Hazır mısınız?",
      text: "Kolay Gelsin",
      buttonText: "BAŞLA",
    };

    this.popupHandle = this.popupHandle.bind(this);
  }

  popupHandle() {
    let { time } = this.state;

    if (time === "başla") {
      this.setState({
        time: "bitir",
        title: "tebrikler!",
        buttonText: "Restart",
      });

      this.props.startQuiz();
    } else {
      // location.reload(); // restart the application
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text:
        "Sınavı Tamamladınız. <br /> You got: <strong>" +
        this.props.score +
        "</strong> dışında <strong>" +
        this.props.total +
        "</strong> sorular doğru.",
    });
  }

  createMarkup(text) {
    return { __html: text };
  }

  render() {
    let { title, text, buttonText } = this.state;

    let { style } = this.props;

    return (
      <div className="popup-container" style={style}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="popup">
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={this.createMarkup(text)} />
              <button className="fancy-btn" onClick={this.popupHandle}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Popup;
