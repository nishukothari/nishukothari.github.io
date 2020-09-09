import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import HomeView from './HomeView'
import ProjectView from './ProjectView'

import '../public/styles/MasterView.css'

class MasterView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currTab: 0
        }

        this.changeView = this.changeView.bind(this)
    }

    changeView(argument){
        if(argument != this.state.currTab){
            this.setState({
                currTab: argument,
            })
        }
    }

    render(){
        let views = new Map()
        views.set(0, <HomeView/>)
        views.set(1, <ProjectView/>)
        views.set(2, <React.Fragment/>)
        views.set(3, <React.Fragment/>)
        views.set(4, <React.Fragment/>)

        return(
            <div className="FullSite">
                <Navbar className="Nav" expand="lg">
                    <Nav>
                        <Nav.Link className="Tab" onClick={() => this.changeView(0)}>Home</Nav.Link>
                        <Nav.Link className="Tab" onClick={() => this.changeView(1)}>Projects</Nav.Link>
                        <Nav.Link className="Tab" onClick={() => this.changeView(2)}>Resume</Nav.Link>
                    </Nav>
                </Navbar>
                {views.get(this.state.currTab)}
            </div>
        )
    }
}

export default MasterView