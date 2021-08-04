import { Form } from 'react-bootstrap'

class quizItem {
    constructor(questiontext, trueanswer, falseanswers) {
        this.questiontext = questiontext
        this.trueanswer = trueanswer
        this.falseanswers = falseanswers
        this.falselength = this.falseanswers.length
        this.randomnr = (this.falselength + 1) * Math.random()
        this.trueposition = Math.floor(this.randomnr)
    }

    shuffleArray() {
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

const QuizItem = () => {
    const newItem = new quizItem("To be or not to be?", "YES", ["no", "maybe", "sure", "ok"])
    const truePosition = newItem.trueposition
    const questiontext = newItem.questiontext
    const answerOptions = newItem.shuffleArray()
    return (
        <div>
            <div className="lead">{questiontext}</div>
            <div>{truePosition}</div>
            <Form>
                {answerOptions.array.map((option, index) => (
                    <div className="form-check">
                        <input className="input form-check-input" type="radio" name="question1" id={index} />
                        <label className="form-check-label" for={index}>
                            {option}
                        </label>
                    </div>
                ))}
            </Form>
        </div>

    )
}

export default QuizItem