import css from './Feedback.module.css';
import { Component } from 'react';

class Feedback extends Component {
  //   handlePositive = () => {
  //     this.setState(prevState => ({
  //       good: prevState.good + 1,
  //     }));
  //   };

  //   handleNeutral = () => {
  //     this.setState(prevState => ({
  //       neutral: prevState.neutral + 1,
  //     }));
  //   };

  //   handleNegative = () => {
  //     this.setState(prevState => ({
  //       bad: prevState.bad + 1,
  //     }));
  //   };

  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className={css.btn__box}>
        <button
          type="button"
          onClick={() => onLeaveFeedback('good')}
          className={[css.btn, css.btn__positive].join(' ')}
        >
          Positive
        </button>
        <button
          type="button"
          onClick={() => onLeaveFeedback('neutral')}
          className={[css.btn, css.btn__neutral].join(' ')}
        >
          Neutral
        </button>
        <button
          type="button"
          className={[css.btn, css.btn__negative].join(' ')}
          onClick={() => onLeaveFeedback('bad')}
        >
          Negative
        </button>
      </div>
    );
  }
}

export default Feedback;
