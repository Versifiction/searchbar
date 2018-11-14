import React, { Component } from 'react';

import './App.css';
import Header from '../src/components/Header';
import Input from '../src/components/Input';
import Results from '../src/components/Results';
import initialContacts from './datas/contacts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      contacts: initialContacts,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    this.setState({
      search: evt.target.value,
    })
  }

  render() {
    const { search, contacts } = this.state;
    return (
      <div className="App">
        <Header />
        <Input
          inputValue={search}
          onInputChange={this.handleChange}
        />
        <Results
          inputValue={search}
          contacts={contacts}
        />
      </div>
    );
  }
}

export default App;
