import React from 'react'
import { Container, Col, Row, Button} from 'react-bootstrap'

import HomeView from './HomeView'
import ProjectView from './ProjectView'
import ToggleButton from './ToggleButton'

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
        views.set(1, <React.Fragment/>)
        views.set(2, <ProjectView/>)
        views.set(3, <React.Fragment/>)
        views.set(4, <React.Fragment/>)

        return(
        <Container fluid className="masterContainer">
            <ToggleButton></ToggleButton>
            <Row className="contRow">
                <Col xs={{span: 12, offset: 0}} className="rowHolder">
                    <Row className="contRow">
                        <Col xs={{span: 2, offset: 0}} className="myNav">
                            <Col xs={{span:7, offset: 5}}>
                                <div className="navTextTop">
                                <Row><Button className="navText" onClick={() => this.changeView(0)}>Home</Button></Row>
                                <Row><Button className="navText" onClick={() => this.changeView(1)}>Resume</Button></Row>
                                <Row><Button className="navText" onClick={() => this.changeView(2)}>Projects</Button></Row>
                                <Row><Button className="navText" onClick={() => this.changeView(3)}>About Me</Button></Row>
                                <Row><Button className="navText" onClick={() => this.changeView(4)}>Contact</Button></Row>
                                </div>
                            </Col>
                        </Col>
                        <Col xs={{span: 9, offset: 0}} className="viewHolder">
                            {views.get(this.state.currTab)}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>)
    }
}

export default MasterView