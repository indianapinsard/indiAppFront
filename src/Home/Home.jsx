import React, { Component } from 'react';

import endpoint from 'Globals/endpoint';
import { getArticleList } from 'Globals/api';
import { getRequest } from 'Utils/api';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.setListState = this.setListState.bind(this);
  }

  getDataFromApi() {
    const url = `${endpoint}${getArticleList}`;
    getRequest(url, this.setListState);
  }

  setListState(response) {
    this.setState({ list: response.data });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="homePage">
        <h1>Le site Pensez c&apos;est chouette est en construction !</h1>
        <div>{ list.map((e) => <li key={e.id}>{ e.link }</li>) }</div>
        <button type="button" onClick={this.getDataFromApi}>Récupérer les liens</button>
      </div>
    );
  }
}

export default Home;
