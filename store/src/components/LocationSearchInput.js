import React, {useState, useEffect, useMemo} from 'react';
import {TextField, Typography, Grid, Divider } from '@material-ui/core';
import Autocomplete  from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles} from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';



export default function GoogleMaps() {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const autocompleteService = { current: null};

  const handleChange = event => {
      setInputValue(event.target.value);
    
  };

  const fetch = useMemo(
    () => 
        throttle((input, callback) => {
          autocompleteService.current.getPlacePredictions(input, callback);
        },200),
        [],
  );

  useEffect(() =>{
    let active = true;

    if(!autocompleteService.current && window.google){
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }

    if(inputValue === '') {
      setOptions([]);
      return undefined;
    }

    if(!autocompleteService.current){
      return undefined;
    }

    fetch({input:event.target.value}, results => {
      if(active){
        setOptions(results || []);
      }
    });

    return () => {
      active = false;
    };

  },[inputValue, fetch]);
  

  return (
    <Autocomplete
      id="google-map.demo"
      options={options}
      getOptionLabel = {option => (typeof option ==='string' ? option : option.description)}
      autoComplete
      includeInputInList
      freeSolo
      disableOpenOnFocus
      renderInput={params => (
        <TextField 
          {...params}
          label="Add a location"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      )}
      renderOption={option => {
        console.log('render option: ',option);
        const matches = option.structured_formatting.main_text_matched_substrings;
      }}
    />
    // end of autocomplete
  );
}
