import { Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'


const QuizItem = (props) => {
    const [choice, setChoice] = useState(-1) // Variable and method for storing and updating the user's choice -> integer
    const [score, setScore] = useState(0) // Variable and method for storing and updating the score of a particular quiz question -> integer
    const [scoreboard, setScoreboard] = useState(props.scoreboard) // Variable and method for storing and updating the scoreboard
    const options = props.options

    const calculateScore = (choice, correct) => { // This function determines the score for a particular quiz question
        const score = (choice == correct ? 1 : 0)
        setScore(score)
        return (
            score
        )
    }

    const updateScoreboard = (sc, sb, i) => { // This function updates the scoreboard
        sb[i] = sc
        setScoreboard(sb)
    }

    return (
        <div key={props.qid} className="test">
            <div className="lead">{props.text}</div>
            <div>{props.trueposition}</div>
            <Form>
                {options.map((option, index) => ( // Create the answer options and store their array index in the id of the input element
                    <div key={index.toString()} className="form-check">
                        <input className="input form-check-input" type="radio" name={`question${props.qid}`} id={index} onChange={(e) => setChoice(e.target.id)} // If the radio button is checked the button's id is stored in the variable 'choice'
                        />
                        <label className="form-check-label" htmlFor={index}>
                            {option}
                        </label>
                    </div>
                ))}
                <Button type="button" className="btn btn-success"
                    onClick={(event) => {
                        const newscore = calculateScore(choice, props.trueposition)
                        updateScoreboard(newscore, scoreboard, props.qid)
                        event.preventDefault() // Important! Otherwise the score will be calculated when a radio button is checked
                    }
                    }>Submit</Button>
            </Form>
            <div>The score is {score}</div>
        </div>

    )
}

export default QuizItem