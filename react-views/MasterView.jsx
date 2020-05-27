import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'

import HomeView from './HomeView'
import ToggleButton from './ToggleButton'

class MasterView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currTab: 0
        }
    }

    render(){

        let myRender = <React.Fragment></React.Fragment>

        switch(this.state.currTab){
            case(0):
                myRender = <HomeView></HomeView>
                break;
        }
        
        return(
        <Container fluid className="masterContainer">
            <ToggleButton></ToggleButton>
            <Row className="contRow">
                <Col xs={{span: 12, offset: 0}} className="rowHolder">
                    <Row className="contRow">
                        <Col xs={{span: 2, offset: 0}} className="myNav">
                            <Col xs={{span:7, offset: 5}}>
                                <Row><div className="navText">Home</div></Row>
                                <Row><div className="navText">Resume</div></Row>
                                <Row><div className="navText">Projects</div></Row>
                                <Row><div className="navText">About Me</div></Row>
                                <Row><div className="navText">Contact</div></Row>
                            </Col>
                        </Col>
                        <Col xs={{span: 9, offset: 0}} className="viewHolder">
                            {myRender}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>)
    }
}

export default MasterView