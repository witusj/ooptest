import QuizItem from '../components/quizitem'
import items from './api/items.json'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

let scoreboard = new Array(5).fill(0)
console.log(scoreboard)

const shuffleArray = (ta, fa, tp) => { // This function creates a shuffled array of answer options. The position of the true answer is stored in the variable 'trueposition'

  const arr = fa
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  arr.splice(tp, 0, ta)

  console.log(arr, tp)
  return {
    arr,
    tp
  }
}

const sumArray = (arr) => {
  const reducer = (acc, curr) => acc + curr
  const totsum = arr.reduce(reducer)
  return totsum
}

const questions = items.map((item) => {
  const falselength = item.falseanswers.length
  const randomnr = (falselength + 1) * Math.random()
  const trueposition = Math.floor(randomnr)
  const options = shuffleArray(item.trueanswer, item.falseanswers, trueposition)
  return (
    <QuizItem
      scoreboard={scoreboard}
      qid={item.qid}
      text={item.text}
      options={options.arr}
      trueposition={options.tp}
    />
  )
})

export default function Home() {
  const [totalscore, setTotalscore] = useState(0)
  return (
    <div>
      <div className="container-fluid">
        {questions}
      </div>
      <Button type="button" className="btn btn-success"
        onClick={(event) => {
          console.log(scoreboard)
          setTotalscore(sumArray(scoreboard))
          event.preventDefault() // Important! Otherwise the score will be calculated when a radio button is checked
        }
        }>Eindscore</Button>
      <div>{totalscore}</div>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
    </div >
  )
}
