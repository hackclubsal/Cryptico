import React from 'react';
import cryp from '../assets/images/cryp.png';
import classes from './About.module.css';
const About = () => {
  return (
    <div className={classes.body}>
      <div className="row mt-5">
        <div className="col-lg-6">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className="container-fluid">
            <h2 className="">Who we are?</h2>
            <h3 className="">
              <b>Cryptico</b> is a online Crypto news platform, where you can
              check live Crypto values, You can convert one crypto currenciy to
              another. Also you will get all latest crypto news and updates on
              this platform.
            </h3>
          </div>
          <p>&nbsp;</p>
        </div>
        <div className="col-lg-6">
          <img className={classes.poster} src={cryp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
