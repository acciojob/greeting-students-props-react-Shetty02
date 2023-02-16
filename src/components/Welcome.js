// write code for Welcome component here
import React, { useState } from 'react'

function Welcome({name}) {
  return (
    <div>
        <h1> Hey! {name}</h1>;
        <h2>Welcome to School</h2>
    </div>
  )
}

export default Welcome