import React from 'react'

class ExpandButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonText: "+",
            projectKey: this.props.projectKey
        }

        this.switchText = this.switchText.bind(this)
    }

    switchText() {
        if(this.state.buttonText == "+") {
            this.setState({
                buttonText: "–"
            })
            document.getElementById(this.state.projectKey).style.display = "table-cell"
        } else {
            this.setState({
                buttonText: "+"
            })
            document.getElementById(this.state.projectKey).style.display = "none"
        }
    }

    render(){
        return(
            <button onClick={this.switchText}> {this.state.buttonText} </button>
        )
    }
}

export default ExpandButton