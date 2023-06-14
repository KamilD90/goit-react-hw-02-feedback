import css from './Feedback.module.css';
import { Component } from "react";

 export class Feedback extends Component{
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    constructor () {
        super();
        this.handlePositive.bind(this)
        this.handleNegative.bind(this)
    }

    handleNegative(ev) {
        console.log(" Click on positive opinion", ev);
    }

    render () {
        const {good, neutral, bad} = this.props
        return (
            <div className={css.wrapper}>
                <h2 className={css.title}>Please leave your feedback</h2>
                <button type="button" OnClick={this.handlePositive} className={css.btn}>Good</button>
                <button type="button" onClick={ev => {
                    console.log('klik na opinie neutralną', ev)
                }}className={css.btn}>Neutral</button>
                <button type="button" className={css.btn} onClick={this.handleNegative}>Bad</button>
                <h3>Statistic</h3>
                <span>{good}</span>
                <span>{neutral}</span>
                <span>{bad}</span>
            </div>
        )
    }

}

export default Feedback;

