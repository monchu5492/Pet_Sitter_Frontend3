import React from "react";
import SearchComp from "./SearchComp";

// import { Map, GoogleApiWrapper } from "google-maps-react";

// const mapStyles = {
//   width: "100%",
//   height: "30%"
// };

export default class AboutComp extends React.Component {
  render() {
    return (
      <SearchComp />
      // <Map
      //   google={this.props.google}
      //   zoom={8}
      //   style={mapStyles}
      //   initialCenter={{ lat: 47.444, lng: -122.176 }}
      // />
    );
  }
}
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyATO-qfqEDrcOxjP9v8kmDWAaJkfJratdY"
// })(AboutComp);
