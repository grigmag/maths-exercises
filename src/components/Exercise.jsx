import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex';

import { exerciseList } from '../exercises/exerciseList';

const NUM_EXERCISES = 3;

async function importExerciseCreator(exKey) {
  try {
    const exDetails = exerciseList.find((ex) => ex.key === exKey);
    // console.log('exDetails: ', exDetails);

    const exModule = await import('../exercises/' + exDetails.filename);

    return exModule.default;
  } catch (err) {
    console.log('Error: ' + err);
  }
}

class Exercise extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      completed: false,
    };
  }

  async componentDidMount() {
    // console.log('props: ', this.props);
    const exKey = parseInt(this.props.match.params.id);
    const exCreator = await importExerciseCreator(exKey);

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
      <div>
        <Link to="/">Home</Link>
        {this.state.exercise ? (
          <>
            <h1>Exercise</h1>
            <p>{this.state.exercise.questionText}</p>
            <Latex displayMode={true}>
              {this.state.exercise.questionLatex ||
                String.raw`$\int_0^\infty x^2 dx$`}
            </Latex>
            <form onSubmit={this.submitAnswerHandler.bind(this)}>
              <label htmlFor="answerid">Answer: </label>
              <input
                type="text"
                name="answerid"
                id="answerid"
                onChange={this.changeAnswerHandler.bind(this)}
                autoComplete="off"
                value={this.state.answer || ''}
              />
              <input type="submit" value="Ok!" />
            </form>
            {this.state.completed ? (
              <h2>Well Done!</h2>
            ) : (
              <h2>
                Completed: {this.state.counter} / {NUM_EXERCISES}
              </h2>
            )}
          </>
        ) : (
          <h1>Creating Exercise...</h1>
        )}
      </div>
    );
  }
}

export default withRouter(Exercise);
