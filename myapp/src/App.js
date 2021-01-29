import React from 'react';
 
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({ [name]: value });
    }
 
  
    handleSubmit(event) {
      alert('A username and password was submitted: ' + this.state.username+' '+this.state.password);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          <input type="text" name='username' placeholder='username' value={this.state.username} onChange={this.handleChange} />
            <input type="text" name='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
 
index.js---

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
