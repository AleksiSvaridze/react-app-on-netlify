import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    isOpen: false,
  };
  handleInfo = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { id, name, city, img, info } = this.props.tourDataProps;
    const { removeTourProp } = this.props;

    return (
      <article className="tour">
        <section className="img-container">
          <img src={img} alt={city} />
          <span className="close-btn" onClick={() => removeTourProp(id, name)}>
            <i className="fas fa-window-close"></i>
          </span>
        </section>

        <section className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5 onClick={this.handleInfo}>
            info{" "}
            <span>
              {!this.state.isOpen ? (
                <i className="fas fa-caret-square-down"></i>
              ) : (
                <i className="fas fa-caret-square-up"></i>
              )}
            </span>
          </h5>
          {this.state.isOpen && <p>{info}</p>}
        </section>
      </article>
    );
  }
}
