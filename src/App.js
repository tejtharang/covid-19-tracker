import React, { useState, useEffect } from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';
import MapChart from './MapChart';
import { groupByState } from './transform';

function App() {
  const [covid19Info, setCovid19Info] = useState("");
  const [content, setContent] = useState("");
  
  useEffect(() => {
    const url = 'https://finnhub.io/api/v1/covid19/us?token=bpvvt8nrh5rddd65degg';
    fetch(url)
    .then(result => result.json())
    .then(result => {
      setCovid19Info(groupByState(result));
    })
    .catch(error => console.log(error));
  }, []);
  
  return (
    <div className="container">
      <div className="jumbotron">
        <h2>COVID-19 tracking by state</h2>
        <h5>Hover over a state to display data</h5>
      </div>
      <div className='App'>
        <MapChart setTooltipContent={setContent} covid19Info={covid19Info}/>
        <ReactTooltip>
          <p>{`State        : ${content['state']}`}</p>
          <p>{`+Ve cases    : ${content['case']}`}</p>
          <p>{`Deaths       : ${content['death']}`}</p>
          <p>{`Last updated : ${content['updated']} EST`}</p>
        </ReactTooltip>
      </div>
    </div>
  );
}

export default App;
