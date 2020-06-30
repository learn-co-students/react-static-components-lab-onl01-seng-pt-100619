import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img alt="white cat making circular head movement" src="/cat.gif" />
      </div>
    );
  }
}
