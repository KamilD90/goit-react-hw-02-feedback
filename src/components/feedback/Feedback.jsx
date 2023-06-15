import css from './Feedback.module.css';
import { Component } from "react";

 export class Feedback extends Component{


    constructor (props) {
        super(props);
        this.state={
            good: 0,
            neutral: 0, 
            bad: 0, 
            // total: 0,
        }
    }

    handlePositive = ()=> {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
    }
    

    handleNeutral =() => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
    }

    handleNegative = () => {
        this.setState( prevState => ({
            bad: prevState.bad + 1
        }));
    }

    // countTotalFeedback = () => {
    //  const { good, neutral, bad } = this.state;
    //  // lub  :  const total = this.state.good + this.state.neutral + this.state.bad
    //  const total = good+ bad + neutral;
    //  this.setState({total : total});
    // }

    render () {
        const {good, neutral, bad} = this.state
        const total = good + neutral + bad; 
        const positivePercentage= (good/total) *100 ; 

        return (
            <div className={css.wrapper}>
                <h2 className={css.title}>Please leave your feedback</h2>
                <button type="button" onClick={this.handlePositive} className={[css.btn, css.btn__positive]}>Good</button>
                <button type="button" onClick={this.handleNeutral} className={[css.btn, css.btn__neutral]}>Neutral</button>
                <button type="button" className={[css.btn, css.btn__negative]} onClick={this.handleNegative}>Bad</button>
                <h3 className='css.subtitle'>Statistic</h3>
                <ul className='statList'>
                  <li className='statList_item'><span className='statList__item-name'>Positive:<span className='statList__item-value'>{good}</span></span></li>
                  <li className='statList_item'><span className='statList__item-name'>Neutral:<span className='statList__item-value'>{neutral}</span></span></li>
                  <li className='statList_item'><span className='statList__item-name'>Negative:<span className='statList__item-value'>{bad}</span></span></li>
                  <li className='statList_item'><span className='statList__item-name'>Total:<span className='statList__item-value'>{total}</span></span></li>
                  {total !==0 && (<li className='statList_item'><span className='statList__item-name'>Positive Feedback:<span className='statList__item-value'>{positivePercentage.toFixed(1)}%</span></span></li>)}
                   
                </ul>
            </div>
        );
    }

}

export default Feedback;

