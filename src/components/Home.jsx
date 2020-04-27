import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { exerciseList } from '../exercises/exerciseList';

import './Home.css';

class Home extends Component {
  render() {
    const exListComponent = exerciseList.map((ex) => {
      return (
        <div className="container exercise-list-container">
          <div className="card red accent-3 exercise-card">
            <div className="card-content">
              <div key={ex.key}>
                <Link to={'/ex' + ex.key}>
                  <h4 className="exercise-name grey-text text-lighten-4">
                    {ex.name}
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <h1 className="alien-green-text">Welcome!</h1>
        {exListComponent}
      </>
    );
  }
}

export default withRouter(Home);
