import React from "react";
import photo1 from "../Images/photo1.jpg";
import photo2 from "../Images/photo2.jpeg";
import photo3 from "../Images/photo3.jpeg";
import photo4 from "../Images/photo4.jpeg";
import photo5 from "../Images/photo5.jpeg";
import photo6 from "../Images/photo6.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="container">

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

{/* Experience and Skills */}

<div className="experience">
    <div className="left_experience">
<div className="exp_top">
    <h2 className="exp_title">Front end</h2>
    <figure>
    <label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>
    </figure>
    <figure>
    <label for="file">Downloading progress:</label>
<progress id="file" value="62" max="100"> 32% </progress>
    </figure>
    <figure>
    <label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>
    </figure>
    <figure>
    <label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>
    </figure>
    <figure>
    <label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>
    </figure>
</div>
<div className="exp_bottom">
    <h2 className="exp_title">Hobbies</h2>
    <div className="exp_interest">
<img src={photo2} alt="" className="exp_image"/>
<h2 className="hobby_interest">Reading</h2>
<p className="purpose">Try to learn something new every day</p>
    </div>
    <div className="exp_interest">
<img src={photo3} alt="" className="exp_image"/>
<h2 className="hobby_interest">Reading</h2>
<p className="purpose">Try to learn something new every day</p>
    </div>
    <div className="exp_interest">
<img src={photo4} alt="" className="exp_image"/>
<h2 className="hobby_interest">Reading</h2>
<p className="purpose">Try to learn something new every day</p>
    </div>
</div>
    </div>
    <div className="right_experience">

<div className="right_exp_top">
    <p className="right_title_top">Blog</p>
    <div className="right_top">
        <h2 className="title_exp">
        GraphQL for children
        </h2>
        <img src={photo5} alt="jpeg" className="blogimge"/>
    </div>
    <p className="descr">In this article I tell a story about GraphQL, 
    focus on how it helps working process become better, especially for frontend developers</p>
    <a href="/" className="blog_link">google</a>
</div>



<div className="right_exp_bottom">
    <h2 className="exp_title">Experiences</h2>
    <div className="experiences">
        <div>
        <img src={photo6} alt="logo" className="logo"/>
        <div className="des">
            <h2 className="date">May 2019 - now</h2>
            <p className="exp_role">Frontend developer</p>
            <h2 className="exp_duty">Design reusable React components as a part of overal frontend development
             in a multi tenant world wide project, working with charts to show high traffic data to customers.</h2>
        </div>
        </div>



        <div>
        <img src={photo6} alt="logo" className="logo"/>
        <div className="des">
            <h2 className="date">May 2019 - now</h2>
            <p className="exp_role">Frontend developer</p>
            <h2 className="exp_duty">Design reusable React components as a part of overal frontend development
             in a multi tenant world wide project, working with charts to show high traffic data to customers.</h2>
        </div>
        </div>
    </div>
</div>



    </div>
</div>











































    </div>
  );
}
