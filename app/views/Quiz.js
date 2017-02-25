import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator,
  TouchableHighlight
} from 'react-native';
const questionsSrc = [
    {
        question: "What day is Pi day",
        choices:  ["3/14", "14/3", "22/7", "Everyday is pi day"],
        answer: '3/14'
    },
    {
        question: "When did Pi day start",
        choices:  ["1978", "1565", "1988", "2007"],
        answer: '1988'
    },
    {
        question: "When did congress pass a law recognizing Pi Day as a national day?",
        choices:  ["2007", "2009", "1988", "1989"],
        answer: '2009'
    },

]
export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.startQuiz = this.startQuiz.bind(this);
        this.answerQuestion = this.answerQuestion.bind(this);
        this.state = {
            isStarted: false,
            endQuiz: false,
            questionIdx: 0,
            questionsArr: [0, 1, 2],
            score: 0,
            currentQuestion: 0,
            currentChoices: 0,
            currentAnswer: 0,
        }
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        })
    }
    componentWillMount() {
        this.setUpQuestions();
    }
    setUpQuestions() {
        let questionsArr = [];
        for(let i = 0; i <= 2; i++) {
            let rand = Math.round(Math.random() * 3);
            while(questionsArr.indexOf(rand) > -1) {
                rand = Math.round(Math.random() * 3);
            }
            questionsArr.push(rand);
        }
        this.setState({
            questionsArr: questionsArr
        })
        this.updateQuestion();
    }
    updateQuestion() {
        let src = questionsSrc[this.state.questionsArr[this.state.questionIdx]];
        this.setState({
            currentQuestion: src.question,
            currentChoices: [src.choices[0], src.choices[1], src.choices[2], src.choices[3]],
            currentAnswer: src.answer
        })
    }
    startQuiz() {
        this.setState({
            isStarted: true
        })
    }
    answerQuestion(choice) {
        if(choice == this.state.currentAnswer) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        if(this.state.questionIdx >= 3) {
            this.endGame();
        } else {
            this.nextQuestion();
            this.updateQuestion();
        }

    }
    nextQuestion() {
        this.setState({
            questionIdx: this.state.questionIdx + 1
        })
    }
    endGame() {
        this.setState({
            endQuiz: true
        })
    }
    render() {
        let content = null;
        if(this.state.isStarted == false) {
            content = <Button onPress={this.startQuiz} title="Start Quiz" />
        } else if(this.state.isStarted == true && this.state.endQuiz == false) {
            content = <Question question={this.state.currentQuestion} choices={this.state.currentChoices} answerQuestion={this.answerQuestion} />
        } else {
            content = <Endquiz />
        }
        return (
            <View style={styles.wrapper}>
                <View  style={styles.backBtn}>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={styles.white}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <View style={styles.digits}>
                        {content}
                    </View>

                </View>
            </View>
        )
    }
}

class Question extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <View>
                <Text> {this.props.question}</Text>
                <View>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[0]) }>
                        <Text style={styles.white}>{this.props.choices[0]}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[1])}>
                        <Text style={styles.white}>{this.props.choices[1]}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[2]) }>
                        <Text style={styles.white}>{this.props.choices[2]}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[3]) }>
                        <Text style={styles.white}>{this.props.choices[3]}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1976D2',
        flex: 1
    },
    backBtn: {
      top: 5,
      left: 5
    },
    white: {
      color: 'white'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    digits: {
      marginTop: -100,
      marginBottom: 50
    }
});
