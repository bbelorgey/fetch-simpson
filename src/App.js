import React, { Component } from 'react';

import './App.css';
import GenerateEmployee from './GenerateEmployee';
import DisplayEmployee from './DisplayEmployee';

const sampleEmployee = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection : "Left"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      employee:  sampleEmployee
    };
  }
  getEmployee() {
    let nbR = 10;
    let myRandom = Math.floor(Math.random() * nbR);
    // Récupération de l'employé via fetch
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${nbR}`)
      .then(response  =>  response.json())
      .then(data  => {
        console.log(data.results);
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee:  data[myRandom],
        });
    });
  }

  render() {

    return (

      <div>
        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
        <DisplayEmployee  employee={this.state.employee}  />
      </div>
    );
  }
}

export default App;
