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
 
