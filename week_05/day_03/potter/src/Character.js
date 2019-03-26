import React, { Component } from 'react';

class Character extends Component {
    render() {

        return (
            <div className="card">
                <h2>{this.props.char.charName}</h2>
                <img src={this.props.char.imgSrc} alt="" />
                <p>House: {this.props.houseName} </p>
            </div>
        )
    }
}

export default Character;