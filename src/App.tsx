import React from "react";
import Logo from "./Logo/Components/Logo";
import Regions from "./Houses/Components/Regions";
import { regions } from "./Houses/Variabels/regions";

const App: React.FC = () => {
  return (
    <div id="hero">
      <div id="wrapper">
        <Logo />
        <main>
          {regions.map((region, index) => (
            <Regions key={index} regionInfo={region} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
