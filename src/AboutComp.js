import React from "react";
import SearchComp from "./SearchComp";
<<<<<<< HEAD
import { Map, GoogleApiWrapper } from "google-maps-react";

export class AboutComp extends React.Component {
=======

// import { Map, GoogleApiWrapper } from "google-maps-react";

// const mapStyles = {
//   width: "100%",
//   height: "30%"
// };

export default class AboutComp extends React.Component {
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
  render() {
    console.log(this.props.userLatLng);
    return (
<<<<<<< HEAD
      <div>
        <div className="search">
          <SearchComp />
        </div>
        <div>
          <Map
            google={this.props.google}
            zoom={13}
            style={{ width: "100%", height: "30%" }}
            initialCenter={{ lat: 47.6194679, lng: -122.3009064 }}
            // lat: 47.6194679, lng: -122.3009064
          />
        </div>
      </div>
=======
      <SearchComp />
      // <Map
      //   google={this.props.google}
      //   zoom={8}
      //   style={mapStyles}
      //   initialCenter={{ lat: 47.444, lng: -122.176 }}
      // />
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyATO-qfqEDrcOxjP9v8kmDWAaJkfJratdY",
})(AboutComp);
