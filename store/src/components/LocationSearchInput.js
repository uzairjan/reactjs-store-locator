import React, { Component } from 'react';
import { Grid, Typography, Paper, TextField } from '@material-ui/core';
import  Autocomplete  from "@material-ui/lab/Autocomplete";





class LocationSearchInput extends Component {
  render(){
    return(
        <Grid md={3} item >  
            <Typography variant="h4" align="center" >Enter Store Location</Typography>
              <Paper style={{ height:'400px',padding:20, paddingTop:30, boxSizing:"border-box" }}>
                  <Autocomplete 
                    options={films}
                    getOptionLabel={option => option.title}
                    renderInput={params => (
                      <TextField {...params} label="Enter the address" variant="outlined" fullWidth />
                    )}
                  />
              </Paper>
        </Grid>  
    );
  }
}

const films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];

export default LocationSearchInput;











// import React from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';


// import { Input } from "@material-ui/core";
 
// class LocationSearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '' };
//   }
 
//   handleChange = address => {
//     this.setState({ address });
//   };
 
//   handleSelect = address => {
//     geocodeByAddress(address)
//       .then(results => console.log(results))
//       // .then(latLng => console.log('Success', latLng))
//       .catch(error => console.error('Error', error));
//   };
 
//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <Input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }

// export default LocationSearchInput;