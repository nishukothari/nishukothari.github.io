import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import '../public/styles/ProjectView.css'
import projectData from '../public/json/projects.json'

class ProjectView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            display: [],
            shownElements: [],
            elements: projectData,
            currentTagFilter: "All",
            currentLanguageFilter: "All",
            languages: new Set(),
            tags: new Set()
        }

        this.updateAll = this.updateAll.bind(this)
    }

    componentDidMount(){
        if(!this.state.loading){
            this.setState({
                loading: true
            })
        }

        this.updateAll()
    }

    updateAll(){
        for(var i = 0; i < this.state.elements["projArray"].length; ++i){
            var p = this.state.elements["projArray"][i]
            var tagMatch = false
            var languageMatch = false
            for(var j = 0; j < p["tags"].length; ++j){
                var tag = p["tags"][j]
                this.state.tags.add(tag)
                if(!tagMatch && (tag == this.state.currentTagFilter || this.state.currentTagFilter == "All")){
                    tagMatch = true
                }
            }

            for(var j = 0; j < p["languages"].length; ++j){
                var lang = p["languages"][j]
                this.state.languages.add(lang)
                if(!languageMatch && (lang == this.state.currentLanguageFilter || this.state.currentLanguageFilter == "All")){
                    languageMatch = true
                }
            }
            
            if(tagMatch && languageMatch){
                this.state.shownElements.push(p)
            }
        }

        for(var i = 0; i < this.state.shownElements.length;){
            var rowOfThree = []
            for(var j = 0; j < 3; ++j){
                var show = this.state.shownElements[i]
                rowOfThree.push(
                    <Card className="projCard">
                        <Card.Header className="pCardHeader">{show["name"]}</Card.Header>
                        <Card.Body className="pCardBody">{show["description"]}</Card.Body>
                        <Card.Footer className="pCardFooter"></Card.Footer>
                    </Card>
                )
                ++i
                if(i == this.state.shownElements.length){
                    break;
                }
            }
            
            this.state.display.push(
                <Row>
                    {rowOfThree}
                </Row>
            )
        }
    }

    render(){
        if(this.state.loading == false){
            return(
                <div>
                    loading...
                </div>
            )
        }else{
            console.log(this.state.shownElements)
            console.log(this.state.display)
            return(
                <div className="project">
                    <Col xs={{span: 12, offset: 0}} className="projContainer">
                        {this.state.display}
                    </Col>
                </div>
            )
        }
    }
}

export default ProjectView