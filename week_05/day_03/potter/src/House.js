import React, { Component } from 'react';

class House extends Component {
    render() {
        console.log(this.props.house);

        return (
            <div className="card">
                <h2>{this.props.house.houseName}</h2>
                <img src={this.props.house.imgSrc} alt="" />
                <p>Founder: {this.props.house.founder}</p>
                <p>Element: {this.props.house.element}</p>
            </div>
        )
    }
}

export default House;