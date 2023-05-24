import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpperBtnClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("To Upper Case","success")
    }

    const handleLowerBtnClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("To Lower Case","success")
    }

    const handleClearBtnClick = () => {
        setText('')
    }

    const handleCopyTextBtnClick = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success")
    }

    return (
        <>
            <div className="container"  style={{color:props.mode==='light'?'grey':'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='light'?'grey':'white'}} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperBtnClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerBtnClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearBtnClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyTextBtnClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className="container my-2">
                <h2>Your Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <p>Preview</p>
                <p>{text}</p>

            </div>
        </>
    )
}
