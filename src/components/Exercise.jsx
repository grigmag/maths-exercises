import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex';

import { exerciseList } from '../exercises/exerciseList';

async function importExercise(exKey) {
  try {
    const exDetails = exerciseList.find((ex) => ex.key === exKey);
    console.log('exDetails: ', exDetails);

    const exModule = await import('../exercises/' + exDetails.filename);

    return exModule.default;
  } catch (err) {
    console.log('Error: ' + err);
  }
}

class Exercise extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // console.log('props: ', this.props);
    const exKey = parseInt(this.props.match.params.id);
    const exCreator = await importExercise(exKey);
    const exercise = exCreator();

    this.setState({
      exCreator,
      exercise,
    });
  }

  render() {
    console.log('state: ', this.state);

    return (
      <div>
        <Link to="/">Home</Link>
        {this.state.exCreator ? (
          <>
            <h1>Exercise</h1>
            <p>{this.state.exercise.questionText}</p>
            {/* <Latex displayMode={true}>$\int_0^\infty x^2 dx$</Latex> */}
            <Latex displayMode={true}>
              {this.state.exercise.questionLatex}
            </Latex>
            <form
              onSubmit={(event) => {
                // this.submitAnswerHandler(event);
                event.preventDefault();
                console.log(event.target);
              }}
            >
              <label htmlFor="answerid">Answer: </label>
              <input type="text" name="answerid" id="answerid" />
              <input type="submit" value="Ok!" />
            </form>
          </>
        ) : (
          <h1>Creating Exercise...</h1>
        )}
      </div>
    );
  }
}

export default withRouter(Exercise);
