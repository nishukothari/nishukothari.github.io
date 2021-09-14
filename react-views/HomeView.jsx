import React from "react";
import "../public/styles/HomeView.css";
import {Row, Col} from "react-bootstrap";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Holder'>
        <div className='Overlay'>
            <div className='titleText'>
                <strong>Hi! I'm Nishu Kothari.</strong>
            </div>
            <img src="images/profile.png" className="profPic"></img>
            <div className="logoRow">
                <a href="https://github.com/nishukothari" target="_blank"><img src="images/gh.png" className="logo"></img></a>
                <a href="https://www.facebook.com/nishuk12" target="_blank"><img src="images/fb.png" className="logo"></img></a>
                <a href="https://www.instagram.com/nishu_k/" target="_blank"><img src="images/ig.png" className="logo"></img></a>
                <a href="https://www.linkedin.com/in/nishukothari/" target="_blank"><img src="images/li.png" className="logo"></img></a>
            </div>
        </div>

        <div className='imageBackground backDesktop'>
          <img className='titleImg' src='images/climbing1920.jpg'/>
        </div>
        <div className='imageBackground backMobile'>
          <img className='titleImg' src='images/climbing620.jpg'/>
        </div>
      </div>
    );
  }
}

export default HomeView;
