import React from 'react';
import './Home.css';
import gif from '../../assets/Spinning_Ashoka_Chakra.gif';
import Button from '../button/Button';

const Home = () => {
  return (
    <div className="home">
      <div className="home__box">
        <img className="home__gif" src={gif} alt="ashok_chakra" />
        <h1 className="home__head">Jai Hind!!!</h1>
        <p className="home__sub-head">Create your own gifs and have fun :)</p>
        <Button to="/details">Start</Button>
      </div>
    </div>
  );
};

export default Home;
