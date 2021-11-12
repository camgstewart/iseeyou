import "./App.css";
import Logo from "./componenets/Logo/Logo";
import Navigation from "./componenets/Navigation/Navigation";
import ImageForm from "./componenets/ImageForm/ImageForm";
import Rank from "./componenets/Ranking/Rank";
import Particles from "react-particles-js";

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
function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageForm />

      {/*<AiRecognition />*/}
    </div>
  );
}

export default App;
