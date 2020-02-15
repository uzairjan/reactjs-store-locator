import React from 'react';
import { Grid, Paper, Typography, AppBar, Toolbar, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

import LocationSearchInput from './components/LocationSearchInput';

import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon, Polyline} from 'google-maps-react';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  }
}));

 const handleSubmit =() =>{
  alert("hello word");
}


class  App extends React.Component{

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ];
  return (
      <div>
        <AppBar position="static" style={{ backgroundColor:'orange', marginBottom: '10px', alignItems:'center' }} align="center">
            <Toolbar>
                <Typography align="center" color="inherit"  variant="h5" > Store Locator App </Typography>
            </Toolbar>
        </AppBar>
          <Grid container>
              <LocationSearchInput />
                  {/* <form onSubmit={() =>handleSubmit()} >
                      <Input 
                        type="text"
                        fullWidth
                        placeholder="Please enter the location address"
                      />
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        startIcon={<SaveIcon />}
                      >
                        Submit
                      </Button>
                  </form> */}
              <Grid md={9} item style={{ height:'400px' }}>
                       <Typography align="center" variant="h4">Stores Locations</Typography>
                    <Paper style={{ height:'400px' }}>
                        <Map google={this.props.google}
                              onClick={this.onMapClicked}>
                            <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />
                            <Marker
                               onClick={this.onMarkerClick}
                                    title={'The marker`s title will appear as a tooltip.'}
                                    name={'SOMA'}
                                    position={{lat: 37.778519, lng: -122.405640}} />
                            <Marker
                                  onClick={this.onMarkerClick}
                                  name={'Dolores park'}
                                  position={{lat: 37.759703, lng: -122.428093}} />
                            <Marker />
                    
                            <InfoWindow
                              marker={this.state.activeMarker}
                              visible={this.state.showingInfoWindow}>
                                <div>
                                  <h1>{this.state.selectedPlace.name}</h1>
                                </div>
                            </InfoWindow>
                            <Polygon
                                paths={triangleCoords}
                                strokeColor="#0000FF"
                                strokeOpacity={0.8}
                                strokeWeight={2}
                                fillColor="#0000FF"
                                fillOpacity={0.35} />
                        
                          </Map>
                    </Paper>
              </Grid>
          </Grid>
      </div>
  );
}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAnAtgveckNAK93r1QI7wHct_Q-mDDvop4")
})(App)