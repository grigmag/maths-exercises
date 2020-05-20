import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import exerciseCategories from '../exercises/exerciseCategories';

import './Home.css';

class Home extends Component {
  render() {
    const exCategoriesComponent = exerciseCategories.map((cat) => {
      return (
        <div className="card red accent-3 exercise-card" key={cat.key}>
          <Link to={'/' + cat.folder}>
            <div className="card-content">
              <div>
                <h4 className="category-name grey-text text-lighten-4">
                  {cat.title}
                </h4>
              </div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <>
        <h1 className="alien-green-text">Welcome!</h1>
        <div className="container exercise-list-container">
          {exCategoriesComponent}
        </div>
      </>
    );
  }
}

export default withRouter(Home);
