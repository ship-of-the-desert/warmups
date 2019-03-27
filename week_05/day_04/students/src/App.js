import React, { Component } from 'react';
import './App.css';
import Student from './Student'


class App extends Component {
  render() {
    const students = [
      "Meshal",
      "Reema",
      "Lamyaa",
      "Areej",
      "Amani",
      "Khuzam",
      "Sarah",
      "Maram",
      "Alhanouf",
      "Ameerah",
      "Rehaab",
      "Noura Alhindi",
      "Munera",
      "Nora Alkhunifer",
      "Aceel",
      "Mohammad Alhamad",
      "Muhammad Hakami",
      "Mortaja",
      "Yasser",
      "Ali",
      "Omar",
      "Abdulaziz"
    ];

    const items = students.map(function (student, index) {
      return (
        <Student name={student} key={index} />
      )
    });
    return (
      <div>
        <h1>All Students</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;
