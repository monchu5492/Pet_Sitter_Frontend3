import React from "react";
import SearchComp from "./SearchComp";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class AboutComp extends React.Component {
  render() {
    console.log(this.props.userLatLng);
    return (
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
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyATO-qfqEDrcOxjP9v8kmDWAaJkfJratdY",
})(AboutComp);
