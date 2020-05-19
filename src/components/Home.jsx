import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { exerciseList } from '../exercises/exerciseList';

import './Home.css';

class Home extends Component {
  render() {
    const exListComponent = exerciseList.map((ex) => {
      return (
        <Link to={'/ex' + ex.key} key={ex.key}>
          <div className="card red accent-3 exercise-card">
            <div className="card-content">
              <div>
                <h4 className="exercise-name grey-text text-lighten-4">
                  {ex.name}
                </h4>
              </div>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <>
        <h1 className="alien-green-text">Welcome!</h1>
        <div className="container exercise-list-container">
          {exListComponent}
        </div>
      </>
    );
  }
}

export default withRouter(Home);
