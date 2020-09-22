import React from 'react'
import {Col} from 'react-bootstrap'
import '../public/styles/ResumeView.css'

class ResumeView extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="resume">
                <Col xs={{span: 12, offset: 0}} className="resumeContainer">
                    <embed className="pdfWindow" src="docs/Kothari_Nishant_Resume.pdf"></embed>
                </Col>
            </div>)
    }
}

export default ResumeView