import React from "react";
import Button from "../../../components/UI/Button/Button";
import homeVideo from "../../../image/kay2g9fc.mp4";
import classes from "./HomeMain.module.css";
import { Link } from 'react-router-dom';
const HomeMain = () => {
  return (
    <div className={`${classes.homeMain}`}>
      <div className="container ">
      <div className="row">
        <div className={`col-md-6 mb-4 ${classes.video}`}>
          <video
            loop={true}
            autoPlay={true}
            autoplayTimeout={10000}
            autoplayHoverPause={true}
            muted={true}
          >
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
        <div className="col-md-6">
          <div className={`${classes.titleBar}`}></div>
          <div className={`${classes.text} ms-5`}>
            <div>
              <h1>
                 <br /> Library Management <br /> System
              </h1>
              <p>
                 library Management System
              </p>
            </div>
            <Button className={`${classes.button}`} >
            <Link to="/library">Access  Library</Link>
              </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeMain;
