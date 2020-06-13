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
            var barText = document.getElementsByClassName("navText");
            for (var i = 0; i < barText.length; i++) {
                barText.item(i).style.visibility = "hidden";
            }
            this.setState({
                open: false,
            })
        }

        else{
            document.getElementsByClassName("myNav")[0].style.maxWidth = "25%"
            document.getElementsByClassName("myNav")[0].style.visibility = "visible"
            var barText = document.getElementsByClassName("navText");
            for (var i = 0; i < barText.length; i++) {
                barText.item(i).style.visibility = "visible";
            }
            this.setState({
                open: true
            })
        }
    }

    render(){
        let text = (this.state.open) ? "✕" : "☰"
        return(
                <Button className="buttonStyle" onClick={this.collapse}>
                    {text}
                </Button>
        )
    }
}

export default ToggleButton