
import React, { Component } from "react";
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { FeedbackOptions } from './FeedbackOptions'
import { Title, Section } from './FeedbackOptions/styled'
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
      handleFeedbackBtn = (e) => {
        const {name} = e.currentTarget
           this.setState((state) => ({
            [name]: state[name] + 1,
        }));
    }

    countTotalFeedback() {
        let totalFeedback = 0
        Object.values(this.state).map((el) => {
             return totalFeedback += el
        })
        return totalFeedback
    }
  
    countPositiveFeedbackPercentage() {
       const positiveFeedbackPercentage = this.state.good / this.countTotalFeedback() * 100
return positiveFeedbackPercentage
    }
  
  render() {
     const { good, neutral, bad } = this.state;
      return (
    <ThemeProvider theme = {theme}>
  <Section>
      <Title>Please leave feedback</Title>

          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedbackBtn} />.
          </Section>
          {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback" /> :
            <Section>
              <Title>Statistics</Title>
              <Statistics good={good} neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()} />
            </Section>}
    </ThemeProvider>
  )
  }
}