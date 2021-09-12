import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex';

import Tally from './Tally';

import './Exercise.css';

const NUM_EXERCISES = 10;

const MESSAGES = {
  invalidAnswer: 'Invalid answer, try again!',
  secondTry: 'Not quite right, try again!',
  fail: 'Good try, next exercise!',
  success: 'Correct, well done!',
  completed: 'Well done, you completed the exercise!',
  start: "Let's start!",
};

const POINTS = {
  success: 100,
  secondTry: 50,
};

class Exercise extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      completed: false,
      // array elements take values 'success', 'fail', or null
      exerciseResults: new Array(NUM_EXERCISES).fill(null),
      score: 0,
      isSecondTry: false,
      message: MESSAGES.start,
    };
  }

  async importExerciseCreator(exKey) {
    try {
      const exerciseList = await import(
        '../exercises/' + this.props.folder + '/exerciseList'
      ).then((module) => module.default);

      const exDetails = exerciseList.find((ex) => ex.key === exKey);
      this.setState({ exTitle: exDetails.name });

      // console.log('exDetails: ', exDetails);

      const exModule = await import(
        '../exercises/' + this.props.folder + '/' + exDetails.filename
      );

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

  createNewExercise() {
    const exercise = this.state.exCreator();
    this.setState({ exercise });
  }

  answerExists() {
    if (!this.state.answer) {
      return false;
    } else if (typeof this.state.answer !== 'string') {
      return false;
    } else if (this.state.answer.trim().length === 0) {
      return false;
    }

    return true;
  }

  processAnswer() {
    let answer = this.state.answer.trim().toLowerCase();
    return answer;
  }

  validateAnswer(answer) {
    if (!this.state.exercise.validationMethods) {
      return true;
    }

    for (const method of this.state.exercise.validationMethods) {
      if (method(answer)) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }

  checkAnswer(answer) {
    return this.state.exercise.checkMethod(
      answer,
      this.state.exercise.answerMath
    );
  }

  beforeNewExercise() {
    if (this.state.counter + 1 >= NUM_EXERCISES) {
      this.setState({
        completed: true,
        counter: this.state.counter + 1,
        isSecondTry: false,
        message: MESSAGES.completed,
      });
    } else {
      this.setState({ counter: this.state.counter + 1, isSecondTry: false });
      this.createNewExercise();
    }
  }

  submitAnswerHandler(event) {
    event.preventDefault();

    if (!this.answerExists()) {
      this.setState({
        message: MESSAGES.invalidAnswer,
      });
      return;
    }

    const answer = this.processAnswer();

    if (!this.validateAnswer(answer)) {
      this.setState({
        message: MESSAGES.invalidAnswer,
      });
      return;
    }

    const isCorrect = this.checkAnswer(answer);

    if (isCorrect) {
      const exerciseResults = this.state.exerciseResults;
      exerciseResults[this.state.counter] = 'success';

      const score =
        this.state.score +
        (this.state.isSecondTry ? POINTS.secondTry : POINTS.success);

      this.setState({
        answer: null,
        exerciseResults,
        score,
        message: MESSAGES.success,
      });

      this.beforeNewExercise();
    } else {
      if (!this.state.isSecondTry) {
        this.setState({
          message: MESSAGES.secondTry,
          isSecondTry: true,
        });
      } else {
        const exerciseResults = this.state.exerciseResults;
        exerciseResults[this.state.counter] = 'fail';

        this.setState({
          answer: null,
          exerciseResults,
          message: MESSAGES.fail,
        });

        this.beforeNewExercise();
      }
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
        <Link to="/" className="btn red accent-3 grey-text text-lighten-4">
          Back to Home
        </Link>

        {this.state.exercise ? (
          <>
            <h2 className="grey-text text-lighten-4">
              {this.state.exTitle || 'Exercise'}
            </h2>
            <div className="divider red accent-3"></div>
            <div className="container exercise-container">
              <h5 className="grey-text text-lighten-4">
                {this.state.exercise.questionText}
              </h5>
              <div className="alien-green-text exercise-math">
                <Latex displayMode={true}>
                  {this.state.exercise.questionLatex}
                </Latex>
              </div>
              <form className="" onSubmit={this.submitAnswerHandler.bind(this)}>
                <div className="my-input">
                  {/* <label htmlFor="answerid" className="answer-label">
                    Answer
                  </label> */}
                  <input
                    type="text"
                    name="answerid"
                    id="answerid"
                    onChange={this.changeAnswerHandler.bind(this)}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    className="answer-input center-align grey-text text-lighten-4"
                    // placeholder="Answer"
                    value={this.state.answer || ''}
                    autoFocus={true}
                  />
                </div>
                <input
                  type="submit"
                  value="Ok!"
                  className="btn red accent-3 grey-text text-lighten-4"
                  disabled={this.state.completed}
                />
              </form>
            </div>
            <h5 className="grey-text text-lighten-4">{this.state.message}</h5>
            <h4 className="grey-text text-lighten-4">
              Score: {this.state.score}
            </h4>

            <Tally exerciseResults={this.state.exerciseResults} />
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
