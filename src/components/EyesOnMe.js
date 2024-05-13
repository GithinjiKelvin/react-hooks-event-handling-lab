// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    function listenFocus(word){
        if(word === "focus"){
            console.log("Good!")
        }
        else if(word === "blur"){
            console.log("Hey! Eyes on me!")
        }
    }
  return (
    <div>
        <button onClick={listenFocus}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe