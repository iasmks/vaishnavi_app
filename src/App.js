import react, { useState } from "react";
import "./index.css";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

   //show image based on bmi calculation
  let imgSrc;
  if(bmi < 1){
    imgSrc = null
  } else { 
    if(bmi < 25){
    imgSrc = require('../src/img/red.png')
  } else if(bmi >= 25 && bmi < 30){
    imgSrc = require('../src/img/healthy.jpg')
  }else {
    imgSrc = require('../src/img/red.png')
  }
}


  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();
    if(weight === "" || height === "") return;
    if (weight === 0 || height === 0 ){
      alert("Please enter valid weight & height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1))

      //logic for message

      if(bmi < 25){
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('Your a healthy Weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }



  let reset = () => {
    // window.location.reset()
    setHeight("");
    setWeight("");
    setBmi("");
    setMessage("");
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button
              className="btn"
              type="submit"
              onClick={() => {
                calcBmi();
              }}
            >
              Submit
            </button>
            <button
              className="btn btn-outline"
              onClick={reset}
              type="submit"
            >
              Reset
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;

