import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';


import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';
import questionsSrc from '../components/Questions';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.startQuiz = this.startQuiz.bind(this);
        this.answerQuestion = this.answerQuestion.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            isStarted: false,
            endQuiz: false,
            questionIdx: 0,
            questionsArr: [0, 1, 2],
            score: 0,
            currentQuestion: 0,
            currentChoices: 0,
            currentAnswer: 0
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
        for(let i = 0; i < 10 ; i++) {
            let rand = Math.round(Math.random() * 18); // should be 1 less number of questions in questionsSrc
            while(questionsArr.indexOf(rand) > -1) {
                rand = Math.round(Math.random() * 18);
            }
            questionsArr.push(rand);
        }
        this.setState({
            questionsArr: questionsArr
        })
    }
    updateQuestion(newIdx) {
        // why pass in value? because react isn't waiting until this.state.questionIdx is updated before calling update question even though it's in the callback
        // What this means is that the first question has to be answered twice before it updates the question to the new question so passing in the value fixes this
        let src = questionsSrc[this.state.questionsArr[newIdx]];
        this.setState({
            currentQuestion: src.question,
            currentChoices: [src.choices[0], src.choices[1], src.choices[2], src.choices[3]],
            currentAnswer: src.answer
        })
    }
    startQuiz() {
        this.updateQuestion(0); // should start at index 0, have to pass in value so yea
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
        if(this.state.questionIdx >= 9) {
            this.endQuiz();
        } else {
            this.nextQuestion();
        }

    }
    nextQuestion() {
        let newIdx = this.state.questionIdx + 1;
        this.setState({
            questionIdx: newIdx
        },
            this.updateQuestion(newIdx) // see comment on updateQuestion question
        );
    }
    endQuiz() {
        this.setState({
            endQuiz: true
        })
    }
    reset() {
        this.setState({
            isStarted: false,
            endQuiz: false,
            questionIdx: 0,
            questionsArr: [0, 1, 2],
            score: 0,
            currentQuestion: 0,
            currentChoices: 0,
            currentAnswer: 0
        })
        this.setUpQuestions();
    }
    render() {
        let content = null;
        let top = null;

        if(this.state.isStarted == false) {
            content = <StartButton startQuiz={this.startQuiz} />
            top = <Text style={styles.title}>Quiz</Text>

        } else if(this.state.isStarted == true && this.state.endQuiz == false) {
            content = <Question question={this.state.currentQuestion} choices={this.state.currentChoices} answerQuestion={this.answerQuestion} />
            top = <Text style={styles.question}>{this.state.currentQuestion}</Text>
        } else {
            content = <Endquiz score={this.state.score} reset={this.reset}/>
            top = <Text style={styles.title}>{this.state.score}0%</Text>
        }
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Home') } />
                <View style={styles.top}>{top}</View>
                <View style={styles.content}>{content}</View>
            </BackgroundImage>
        )
    }
}
class StartButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.message}>Multiple Choice 10 question quiz about pi! Study the learn section to get a better score.</Text>
                <TouchableHighlight style={styles.roundedBtn} onPress={ () => this.props.startQuiz() }>
                    <Text style={styles.centerNav}>Start</Text>
                </TouchableHighlight>
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
            <View style={styles.containerChoices}>
                <View style={styles.choiceRow}>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[0])} style={styles.choice}>
                        <Text style={styles.choiceText}>{this.props.choices[0]}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[1])} style={styles.choice}>
                        <Text style={styles.choiceText}>{this.props.choices[1]}</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.choiceRow}>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[2])} style={styles.choice}>
                        <Text style={styles.choiceText}>{this.props.choices[2]}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[3])} style={styles.choice}>
                        <Text style={styles.choiceText}>{this.props.choices[3]}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
class Endquiz extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let message = null;
        if(this.props.score == 10) {
            message = `You got ${this.props.score} out 10! Amazing! You're a pi expert!`;
        } else if(this.props.score > 8) {
            message = `You got ${this.props.score} out 10! Amazing! You really know pi!`;
        } else if(this.props.score > 5) {
            message = `You got ${this.props.score} out 10! Good job!`;
        } else if(this.props.score > 1) {
            message = `You got ${this.props.score} out 10! Better luck next time!`;
        } else {
            message = `You got ${this.props.score} out 10! Check out the learn section!`;
        }
        return(
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
                <View>
                    <TouchableHighlight style={styles.roundedBtn} onPress={ () => this.props.reset() }>
                        <Text style={styles.centerNav}>Try again</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        top: 50
    },
    top: {
        bottom: 50,
    },
    title: {
        color:'#810000',
        fontSize: 58,
        fontWeight: "700",
        fontFamily: 'Roboto'
    },
    question: {
        color:'#810000',
        fontSize: 18,
        fontWeight: "700",
        fontFamily: 'Roboto',
        width: 275,
        height: 150,
        textAlign: 'center',
    },
    message: {
        color: '#d7933f',
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
        width: 250,
        lineHeight: 20
    },
    centerNav: {
        fontSize: 22,
        marginBottom: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
        paddingTop: 7,
        paddingBottom: 7
    },
    roundedBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginTop: 25,
        alignSelf: 'center'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },
    containerChoices: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30
    },
    choiceRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    choice: {
        width:175,
        height: 125,
        borderRadius: 25,
        backgroundColor: '#d7933f',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5

    },
    choiceText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '500',
        color:'#810000',
        padding: 5
    }

});
