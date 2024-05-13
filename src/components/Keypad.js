// Code Keypad Component Here
import React from 'react'

function Keypad (){
    function printPwd(event){
        console.log("Entering password...")
        console.log(`${event.target.value}`)
    }
    return (
        <div>
            <input type='password' onChange={printPwd} name='search'/>
        </div>
    )
}

export default Keypad;