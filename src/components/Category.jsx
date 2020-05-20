import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Category.css';

class Category extends Component {
  state = {
    exerciseList: null,
  };

  async componentDidMount() {
    const exerciseList = await this.importExerciseList();
    this.setState({ exerciseList });
  }

  async importExerciseList() {
    try {
      const exListModule = await import(
        '../exercises/' + this.props.categoryData.folder + '/exerciseList'
      );
      return exListModule.default;
    } catch (err) {
      console.log('Error: ' + err);
    }
  }

  render() {
    const exListComponent = this.state.exerciseList ? (
      this.state.exerciseList.map((ex) => {
        return (
          <Link to={this.props.location.pathname + '/ex' + ex.key} key={ex.key}>
            <div className="card red accent-3 exercise-card">
              <div className="card-content">
                <h4 className="exercise-name grey-text text-lighten-4">
                  {ex.name}
                </h4>
              </div>
            </div>
          </Link>
        );
      })
    ) : (
      <h1 style={{ color: 'white' }}>Loading exercises...</h1>
    );

    return (
      <div>
        <Link to="/" className="btn red accent-3 grey-text text-lighten-4">
          Back to Home
        </Link>

        <h1 className="alien-green-text">{this.props.categoryData.title}</h1>
        <div className="container exercise-list-container">
          {exListComponent}
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
