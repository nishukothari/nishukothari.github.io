import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'

import HomeView from './HomeView'

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
            <Row className="rowHolder">
                <Col xs={{span: 12, offset: 0}} className="viewHolder">
                    {myRender}
                </Col>
            </Row>
        </Container>)
    }
}

export default MasterView