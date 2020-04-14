import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { exerciseList } from '../exercises/exerciseList';

class Home extends Component {
  render() {
    const exListComponent = exerciseList.map((ex) => {
      return (
        <div key={ex.key}>
          <Link to={'/ex' + ex.key}>
            <h2>{ex.name}</h2>
          </Link>
        </div>
      );
    });

    return (
      <>
        <h1>Welcome!</h1>
        {exListComponent}
      </>
    );
  }
}

export default withRouter(Home);
