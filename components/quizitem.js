import { Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'


const QuizItem = (props) => {
    const [choice, setChoice] = useState(-1)
    const [score, setScore] = useState(0)
    const [scoreboard, setScoreboard] = useState(props.scoreboard)
    const options = props.options
    console.log("t1 " + scoreboard)

    const calculateScore = (choice, correct, index) => { // This function determines the score 
        const score = (choice == correct ? 1 : 0)
        setScoreboard(scoreboard[index] = score)
        console.log("t2 " + scoreboard)
        return score
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
                        setScore(calculateScore(choice, props.trueposition, props.qid))
                        event.preventDefault() // Important! Otherwise the score will be calculated when a radio button is checked
                    }
                    }>Submit</Button>
            </Form>
            <div>The score is {score}</div>
        </div>

    )
}

export default QuizItem