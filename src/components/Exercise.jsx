import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex';

import { exerciseList } from '../exercises/exerciseList';

import './Exercise.css';

const NUM_EXERCISES = 10;

class Exercise extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      completed: false,
    };
  }

  async importExerciseCreator(exKey) {
    try {
      const exDetails = exerciseList.find((ex) => ex.key === exKey);
      this.setState({ exTitle: exDetails.name });

      // console.log('exDetails: ', exDetails);

      const exModule = await import('../exercises/' + exDetails.filename);

      return exModule.default;
    } catch (err) {
      console.log('Error: ' + err);
    }
  }

  async componentDidMount() {
    // console.log('props: ', this.props);
    const exKey = parseInt(this.props.match.params.id);
    const exCreator = await this.importExerciseCreator(exKey);

    this.setState({ exCreator });

    this.createNewExercise();
  }

  checkAnswer() {
    return this.state.exercise.checkMethod(
      this.state.answer,
      this.state.exercise.answerMath
    );
  }

  incrementCounter() {
    console.log('Before: ', this.state.counter);
    const counter = this.state.counter + 1;
    console.log('New counter: ', counter);
    this.setState({ counter: counter }, () => {
      console.log('async: ', this.state.counter);
    });
    console.log('After: ', this.state.counter);
  }

  handleCorrectAnswer() {
    if (this.state.counter + 1 >= NUM_EXERCISES) {
      this.setState({
        completed: true,
        counter: this.state.counter + 1,
      });
    } else {
      this.setState({ counter: this.state.counter + 1 });
      this.createNewExercise();
    }
  }

  createNewExercise() {
    const exercise = this.state.exCreator();
    this.setState({ exercise });
  }

  submitAnswerHandler(event) {
    event.preventDefault();

    const isCorrect = this.checkAnswer();
    if (isCorrect) {
      console.log('Correct!');
      this.setState({ answer: null });
      this.handleCorrectAnswer();
    } else {
      console.log('Wrong?');
    }
  }

  changeAnswerHandler(event) {
    // console.log('change: ', event.target.value);
    this.setState({
      answer: event.target.value,
    });
  }

  render() {
    // console.log('state: ', this.state);

    return (
      <div className="">
        <Link
          to="/"
          className="btn red accent-3 grey-text text-lighten-4 findbtn"
        >
          Back to Home
        </Link>
        {this.state.exercise ? (
          <>
            <h2 className="grey-text text-lighten-4">
              {this.state.exTitle || 'Exercise'}
            </h2>
            <div className="divider red accent-3"></div>
            <div className="container">
              <h5 className="grey-text text-lighten-4">
                {this.state.exercise.questionText}
              </h5>
              <div className="alien-green-text">
                <Latex displayMode={true}>
                  {this.state.exercise.questionLatex ||
                    String.raw`$\int_0^\infty x^2 dx$`}
                </Latex>
              </div>
              <form className="" onSubmit={this.submitAnswerHandler.bind(this)}>
                <div className="input-field">
                  {/* <label htmlFor="answerid">Answer: </label> */}
                  <input
                    type="text"
                    name="answerid"
                    id="answerid"
                    onChange={this.changeAnswerHandler.bind(this)}
                    autoComplete="off"
                    className="center-align grey-text text-lighten-4"
                    placeholder="Answer"
                    value={this.state.answer || ''}
                  />
                </div>
                <input
                  type="submit"
                  value="Ok!"
                  className="btn red accent-3 grey-text text-lighten-4"
                />
              </form>
            </div>
            <p className="grey-text text-lighten-4">
              {this.state.completed
                ? 'Well Done!'
                : `Completed: ${this.state.counter} / ${NUM_EXERCISES}`}
            </p>
          </>
        ) : (
          <>
            <h1 className="grey-text text-lighten-4">Creating Exercise...</h1>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Exercise);
