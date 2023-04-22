import  { useState } from 'react'

const Survey = () => {
const [answer,setAnswer]=useState({q1:"",q2:"",q3:"",q4:"",q5:""})

  const handleChange = (e) => {
    setAnswer({...answer,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()


  }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <p>Question 1</p>
      <input type="radio" id="q1y" name="q1" value="yes" onChange={(e)=>handleChange(e)}/>
      <label for="q1y">Yes</label>
      <input type="radio" id="q1n" name="q1" value="no" onChange={(e)=>handleChange(e)}/>
      <label for="q1n">No</label>

      <p>Question 2</p>
      <input type="radio" id="q2y" name="q2" value="yes" onChange={(e)=>handleChange(e)}/>
      <label for="q2y">Yes</label>
      <input type="radio" id="q2n" name="q2" value="no" onChange={(e)=>handleChange(e)}/>
      <label for="q2n">No</label>

      <p>Question 3</p>
      <input type="radio" id="q3y" name="q3" value="yes" onChange={(e)=>handleChange(e)}/>
      <label for="q3y">Yes</label>
      <input type="radio" id="q3n" name="q3" value="no" onChange={(e)=>handleChange(e)}/>
      <label for="q3n">No</label>

      <p>Question 4</p>
      <input type="radio" id="q4y" name="q4" value="yes" onChange={(e)=>handleChange(e)}/>
      <label for="q4y">Yes</label>
      <input type="radio" id="q4n" name="q4" value="no" onChange={(e)=>handleChange(e)}/>
      <label for="q4n">No</label>

      <p>Question 5</p>
      <input type="radio" id="q5y" name="q5" value="yes" onChange={(e)=>handleChange(e)}/>
      <label for="q5y">Yes</label>
      <input type="radio" id="q5n" name="q5" value="no" onChange={(e)=>handleChange(e)}/>
      <label for="q5n">No</label>


      <div>
      <button type='submit'>Submit</button>
      </div>
      </form>

      
    </div>
  )
}

export default Survey
