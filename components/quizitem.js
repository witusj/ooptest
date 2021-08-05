import { Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'

class quizItem { // The quiz item object
    constructor(questiontext, trueanswer, falseanswers) {
        this.questiontext = questiontext
        this.trueanswer = trueanswer
        this.falseanswers = falseanswers
        this.falselength = this.falseanswers.length
        this.randomnr = (this.falselength + 1) * Math.random()
        this.trueposition = Math.floor(this.randomnr)
    }

    shuffleArray() { // This method creates a shuffled array of answer options. The position of the true answer is stored in the variable 'trueposition'
        const array = this.falseanswers
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        array.splice(this.trueposition, 0, this.trueanswer)
        return {
            array
        }
    }
}

const calculateScore = (choice, correct) => {
    const score = (choice == correct ? 1 : 0)
    return score
    console.log(score)
}

const newItem = new quizItem("To be or not to be?", "YES", ["no", "maybe", "sure", "ok"])
const truePosition = newItem.trueposition
const questiontext = newItem.questiontext
const answerOptions = newItem.shuffleArray()

const QuizItem = () => {
    const [choice, setChoice] = useState(-1)
    const [score, setScore] = useState(0)

    return (
        <div>
            <div className="lead">{questiontext}</div>
            <div>{truePosition}</div>
            <Form>
                {answerOptions.array.map((option, index) => ( // Create the answer options and store their array index in the id of the input element
                    <div key={index} className="form-check">
                        <input className="input form-check-input" type="radio" name="question1" id={index} onChange={(e) => setChoice(e.target.id)} // If the radio button is checked the button's id is stored in the variable 'choice'
                        />
                        <label className="form-check-label" htmlFor={index}>
                            {option}
                        </label>
                    </div>
                ))}
                <Button type="button" className="btn btn-success"
                    onClick={(event) => {
                        setScore(calculateScore(choice, truePosition))
                        event.preventDefault()
                    }
                    }>Submit</Button>
            </Form>
            <div>The score is {score}</div>
        </div>

    )
}

export default QuizItem