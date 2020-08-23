import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('worldwide');
  useEffect(() => {
      const getCountriesData = async () => {
        await fetch ('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => {
            return({
              name: country.country,      //United States
              value: country.countryInfo.iso2,     //UK, USA, FR
            })
          });
          setCountries(countries);
        });
      }
      getCountriesData();
  }, [])

  const onCountryChange = async (event) =>{
    const countryCode = event.target.value;
    console.log(countryCode);

    setCountry(countryCode);
  }


  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1> Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select 
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                  )
                )
              }
            </Select>
          </FormControl>  
        </div>
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={2332} total={2000}/>
          <InfoBox title="Recovered" cases={2332} total={3000}/>
          <InfoBox title="Deaths" cases={2332} total={4000}/>
        </div>

        

        {/* Table */}

        {/* Graph */}

        {/* Map */}
        <Map />
      </div>
      <Card className="app__right">
            <CardContent>
              <h3> Live Cases by Country</h3>
              <h3> WorldWide New Cases</h3>
            </CardContent>
      </Card>
      
    </div>
  );
}

export default App;
