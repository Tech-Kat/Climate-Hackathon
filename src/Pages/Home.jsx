import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Grid">
      <div className="Column">
        <h1> What is Light pollution and how does it effect the climate?</h1>

        <h2>
          Light pollution is the excessive or misdirected artificial light that
          is emitted into the environment at night. It can take the form of sky
          glow, glare, light trespass, and other types of unwanted and
          unnecessary artificial light. Light pollution can have various impacts
          on the climate, including:
        </h2>
        <br />
        <h2>1. Increased energy consumption</h2>
        <br />
        <h2>2. Disruption of ecosystems</h2>
        <br />
        <h2>3. Interference with astronomical observations</h2>
        <br />
        <h2>4. Alteration of the Earth's natural rhythms</h2>
        <br/>
        <br/>
        <h1 className="h2-Ques">
            Lets see how your household is contributing to light pollution in your community. 
        </h1>
        <button className="home-nav-btn">
          <Link to="/survey" className="home-nav-link">Click Here</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
