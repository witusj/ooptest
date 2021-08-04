
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

let newElement = new quizItem("To be or not to be?", "YES", ["no", "maybe", "sure", "ok"])
let n = newElement.trueposition

console.log(newElement.falseanswers)
console.log(newElement.shuffleArray())
console.log(n)
console.log(newElement.shuffleArray().array[n])