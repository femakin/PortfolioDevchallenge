import React from "react";
import photo1 from "../Images/photo1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="container">
{/* https://res.cloudinary.com/femakin/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1609350951/photo1_znqchy.jpg */}
         {/* Portfolio Header */}
      <div className="portfolio_Header">
        <div className="left_content">
          <img src={photo1} alt="photo1" className="header_image" />
        </div>

        <div className="right_content">
          <div className="right_inner_one">
            <div className="inner_one_left">
              <h2 className="name">Billy Pearson</h2>
              <p className="title">Front-end developer</p>
            </div>
            <div className="inner_one_right">
              <p className="email"><FontAwesomeIcon icon={faEnvelope} className="icon" />billy@example.com</p>
              <p className="contact"><FontAwesomeIcon icon={faPhoneAlt} className="icon" />(+603) 546 624 342</p>
            </div>
          </div>
          <div className="right_inner_two">
            <p className="inner_two_one">
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.{" "}
            </p>
            <p className="inner_two_two">
              {" "}
              Donec aliquam est dui, vel vestibulum diam sollicitudin id.
              Quisque feugiat malesuada molestie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
