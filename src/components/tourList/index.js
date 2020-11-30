import React, { Component } from "react";
import Tour from "../tour";
import "./tourList.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TourData: tourData,
    };
  }
  removeTour = (id, name) => {
    const filteredData = this.state.TourData.filter((tour) => tour.id !== id);
    this.setState({
      TourData: filteredData,
    });
    console.log("deleted " + name + " - " + id);
  };
  render() {
    return (
      <section className="tourlist">
        {this.state.TourData.map((tour) => {
          return (
            <Tour
              key={tour.id}
              tourDataProps={tour}
              removeTourProp={() => this.removeTour(tour.id, tour.name)}
            />
          );
        })}
      </section>
    );
  }
}
