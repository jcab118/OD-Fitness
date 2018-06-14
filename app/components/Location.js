import React, {Component} from 'react';
import Google_Map from './Google_Map';

export default class Location extends Component {
  render() {
    return (
      <div>
        <Google_Map lat={40.7781173} lng={-73.97976599999998}/>
      </div>
    );
  }
};
