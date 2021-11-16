import "./App.css";
import Logo from "./componenets/Logo/Logo";
import Navigation from "./componenets/Navigation/Navigation";
import ImageForm from "./componenets/ImageForm/ImageForm";
import Rank from "./componenets/Ranking/Rank";
import Particles from "react-particles-js";
import { Component } from "react";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageForm
         onInputchange={this.onInputChange} 
         onButtonSubmit={this.onButtonSubmit}  
         />
        
        {/*<AiRecognition />*/}
      </div>
    );
  }
};

export default App;
