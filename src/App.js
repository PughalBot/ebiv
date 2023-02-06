import React from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import './styles.css';

// import video
import videoBg from '../src/assets/bg.mp4';
import Logo from '../src/assets/lol.png';

const App = () => {
  return (
    <section className='page'>
      {/* overlay */}
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='page__content'>
        <img className='logo' src={Logo}/>
        <h1>Launching Soon</h1>
        <h3>
          Official Ebiv Website Will be available soon
        </h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime()}
        />
        <button className='btn'>Soon!!</button>
      </div>
    </section>
  );
};

export default App;
