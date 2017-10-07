import React, {Component} from 'react';
import {connect} from 'react-redux';

import Search from './search';
import Beers from './beers';
import {
  searchBeers,
  cancelSearch
} from '../actions';

class App extends Component {
  render() {
    const {messages, loading, beers, cancelSearch} = this.props;
    
    return (
      <div style={{display: 'flex'}}>
        <Search 
          defaultValue={''}
          onChange={this._handleBeerSearch}
          messages={messages}
          loading={loading}
          cancel={cancelSearch} />
        <Beers beers={beers} loading={loading} />
      </div>
    );
  }
  
  _handleBeerSearch = query => this.props.searchBeers(query);
}

export default connect(state => state, {searchBeers, cancelSearch})(App);