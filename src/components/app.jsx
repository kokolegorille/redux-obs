import React, {Component} from 'react';
import {connect} from 'react-redux';

import Search from './search';
import Beers from './beers';
import {searchBeers} from '../actions';

class App extends Component {
  render() {
    return (
      <div>
        <Search 
          defaultValue={''}
          onChange={this._handleBeerSearch} />
          <Beers beers={this.props.beers} loading={this.props.loading} />
      </div>
    );
  }
  
  _handleBeerSearch = query => this.props.searchBeers(query);
}

export default connect(state => state, {searchBeers})(App);