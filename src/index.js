import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.state = {
      value: 'Loading...'
    };
  }

  fetchAPI() {
    fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json()).then((data) => {
      console.log(data);
      this.setState({
        Category: data.category,
        IconUrl: data.icon_url,
        ID: data.id,
        URL: data.url,
        value: data.value,
      })
    })
  }

    componentDidMount() {
      this.fetchAPI();
    }
    render() {
      var data = this.state
        return(
          <div>
            <div className="quoteBox shadow">
              <h2>{data.value}</h2>
                <img onClick={this.fetchAPI} src="http://www.freeiconspng.com/uploads/reload-icon-18.png" width="42px" alt=""/>
            </div>
          </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
