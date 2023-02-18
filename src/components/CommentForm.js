import React, { useState } from 'react'
const CommentForm = ({ setComments }) => {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)
  const [SelectOption, setSelectOption] = useState("")
  const [TextareaInput, setTextareaInput] = useState("")
  const [commentError, setCommentError] = useState(false)
  const [termsandConditionsError, setTermsandConditionsError] = useState(false)
console.log("SelectOption ", SelectOption)
console.log("TextareaInput ", TextareaInput)

  // const addComments = ()=>{
  //   setComments((prev)=>[...prev,{id:Date.now(),name:text}])
  //   setText("")
  // }

  const postComment = async () => {
    const res = await fetch('http://localhost:5000/addcomment', {
      method: "post",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        text: text
      })
    })
    const result = await res.json()
    setComments((prev) => [...prev, result])
    setText("")
    // setChecked(checked)
    setSelectOption("")
    setTextareaInput("")
  }

  return (
    <div>
      <h2>comment form</h2>
      <div>
        <input
          placeholder="write your comment here"
          value={text}
          onChange={e => { setText(e.target.value); if (!e.target.value) { setCommentError(true) } else { setCommentError(false) } }}
        />
        <div id='comment_required_error' style={{ 'color': 'red', 'display': commentError ? 'block' : 'none' }}>
          Comment Required
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={checked}
          onChange={(e) => { setChecked(!checked); if (!e.target.checked) { setTermsandConditionsError(true) } else{ setTermsandConditionsError(false) } }}
        />
        <label htmlFor="checkbox">
          I agree to terms and conditions
        </label>
        <div id='TermsandConditions_required_error' style={{ 'color': 'red', 'display': termsandConditionsError ? 'block' : 'none' }}>
          Terms and Conditions Required
        </div>
      </div>
      {/* https://cathalmacdonnacha.com/how-to-test-a-select-element-with-react-testing-library
      https://stackoverflow.com/questions/57946870/how-to-select-an-option-from-a-select-list-with-react-testing-library */}
      <div>
        <label htmlFor="cars">Choose a car:</label>
        <select id="cars" name="cars" onChange={(e)=>setSelectOption(e.target.value)}>
          <option value="">Select Car</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div>
        <textarea name="message" rows="10" cols="30" onChange={(e)=>setTextareaInput(e.target.value)}>
          The cat was playing in the garden.
        </textarea>
      </div>
      <button
        // disabled={!checked || !text}
        disabled={!checked || !text || !SelectOption || !TextareaInput}
        // onClick={addComments}
        onClick={postComment} // async 
      >
        comment
      </button>

    </div>
  )
}
export default CommentForm