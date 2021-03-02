import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      label: 'CLICK ME',
      list: [],
    };
  }

  getDataFromApi() {
    const API_ENDPOINT = (process.env.NODE_ENV === 'development')
      ? 'http://127.0.0.1:8000/article-list/'
      : 'https://api.wattplanner.ovh/article-list/';

    axios({
      method: 'get',
      url: API_ENDPOINT,
    }).then((response) => {
      this.setState({ list: response.data });
      this.setState({ label: 'CLICKED' });
    });
  }

  render() {
    const { label, list } = this.state;
    return (
      <div>
        <div>{ list.map((e) => <li key={e.id}>{ e.link }</li>) }</div>
        <button type="button" onClick={this.getDataFromApi}>{ label }</button>
      </div>
    );
  }
}

export default App;
