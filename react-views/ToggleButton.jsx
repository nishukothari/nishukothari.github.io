import React from 'react'
import { Button } from 'react-bootstrap'

class ToggleButton extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

        this.collapse = this.collapse.bind(this)
    }

    collapse(event){
        if(this.state.open){
            document.getElementsByClassName("myNav")[0].style.maxWidth = "0%"
            document.getElementsByClassName("myNav")[0].style.visibility = "hidden"
            for(item in document.getElementsByClassName("navText")){
                item.style.visibility = "hidden"
            }
            this.setState({
                open: false
            })
        }

        else{
            document.getElementsByClassName("myNav")[0].style.maxWidth = "25%"
            document.getElementsByClassName("myNav")[0].style.visibility = "visible"
            for(item in document.getElementsByClassName("navText")){
                item.style.visibility = "visible"
            }
            this.setState({
                open: true
            })
        }
    }

    render(){

        return(
                <Button className="buttonStyle" onClick={this.collapse}>
                    ☰
                </Button>
        )
    }
}

export default ToggleButton