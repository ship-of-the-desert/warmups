import React, { Component } from 'react';
import './App.css';

class Student extends Component {

    state = {
        className: "",
        statue: ""
    }

    handleClick = () => {
        console.log("Hello", this.props.name);
        this.setState({ className: "red", statue: `I am the mighty ${this.props.name}! How dare you touch me!!?` })
    }

    handleContextMenu = (e) => {
        e.preventDefault();
        console.log("Bye", this.props.name);
        this.setState({ className: "purple", statue: "Stop. Poking. Around!!" })
    }

    handleDoubleClick = () => {
        this.setState({ className: "green", statue: "STOP IT!!!" })
        setTimeout(() => {
            this.setState({ className: "", statue: "" })
        }, 1000);
    }

    render() {
        return (

            <li className={this.state.className}
                onDoubleClick={this.handleDoubleClick}
                onContextMenu={this.handleContextMenu}
                onClick={this.handleClick}
            >
                {this.props.name}
                <br></br>
                {this.state.statue}

            </li>

        );
    }
}

export default Student;
