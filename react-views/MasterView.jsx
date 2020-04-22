import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'

class MasterView extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){

        const leftCol = (
            <Col xs={{span: 6, offset: 0}} className="leftCol">
                Left Column
            </Col>
        )

        const rightCol = (
            <Col xs={{span: 6, offset: 0}} className="rightCol">
                Right Column
            </Col>
        )
        
        return(
        <Container fluid className="masterContainer">
            <Row className="rowHolder">
                {leftCol}
                {rightCol}
            </Row>
        </Container>)
    }
}

export default MasterView