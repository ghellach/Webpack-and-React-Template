import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Fly in the sky</h1>
            </div>
        )
    }
}

export default App

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;


module.hot.accept();