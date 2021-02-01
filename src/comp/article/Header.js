import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

export default class Header extends Component {
  state = {
    "weather": {
      "location": {
        "name": "City",
        "country": ""
      },
      "current": {
       " humidity": "0",
       "temp_c": 0,
        "condition": {
          "text": "Condition",
          "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
        },
    }
  }}
  async forecast() {
    const url_one = "https://geo.ngtv.io/locate";
    const one = await fetch(url_one);
    const location = await one.json();
    const url_two = await `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location.states[0].cities[0]},${(location.country==='ZA'?"SOUTH AFRICA":location.country)}`;
    const two = await fetch(url_two);
    const weather = await two.json();
    this.setState({ weather });
  }
componentDidMount(){
  this.forecast()
}
  render() {
    
    return (
      <Paper className="weather-section" component="section" style={root}>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gridTemplateRows: "1fr",
          }}
        >
          <div>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold" lineHeight="normal" m={1}>
               {`${this.state.weather.location.name}, ${this.state.weather.location.country}`}
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box boxShadow={0} lineHeight="normal" m={1}>
                <b><p>
                {this.state.weather.current.condition.text}
                </p>
                </b>
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box boxShadow={0} lineHeight="normal" m={1}>
              humidity: {this.state.weather.current.humidity}
              </Box>
            </Typography>
          </div>
          <Typography
            style={{ marginLeft: "auto" }}
            variant="subtitle1"
            gutterBottom
          >
            <Box fontWeight="fontWeightBold" lineHeight="normal" m={1}>
            <img src=  {this.state.weather.current.condition.icon} alt={this.state.weather.current.condition.text}></img>
            <h3 style={{margin:"0"}} >{this.state.weather.current.temp_c} °C</h3>
            </Box>
          </Typography>
        </div>
      </Paper>
    );
  }
}
const root = {
  margin: "10px auto",
  maxWidth: 700,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: '10px',
 
};

const KEY = process.env.REACT_APP_KEY;
