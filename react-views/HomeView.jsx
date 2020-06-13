import React from 'react'


class HomeView extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <div className="sayHello">Hello! I'm Nishu Kothari</div>
                <img src="images/profile.png" className="profPic"></img>
                <div className="subHeader">Programmer · Student · Musician</div>
                <div className="logoRow">
                    <a href="https://github.com/nishukothari" target="_blank"><img src="images/gh.png" className="logo"></img></a>
                    <a href="https://www.facebook.com/nishuk12" target="_blank"><img src="images/fb.png" className="logo"></img></a>
                    <a href="https://www.instagram.com/nishu_k/" target="_blank"><img src="images/ig.png" className="logo"></img></a>
                    <a href="https://www.linkedin.com/in/nishukothari/" target="_blank"><img src="images/li.png" className="logo"></img></a>
                </div>
            </div>)
    }
}

export default HomeView