import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked!")
        settext(text.toUpperCase());
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleOnChange = (e) => {
        // console.log('On Change')
        settext(e.target.value);
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked!")
        settext(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "success")
    }

    const handleClearClick = () => {
        // console.log("Clear was clicked!")
        settext('')
        props.showAlert("Removed Successfully", "success")
    
    }
    const handleUndoClick = () => {
        // console.log("Undo was clicked!")
        settext(text.slice(0, -5));
        props.showAlert("Undo was clicked", "success")
    }

    const handleRedoClick = () => {
        // console.log("Redo was clicked!")
        settext(text.slice(-5));
    }

    const [text, settext] = useState('Enter Text Here!!'); 
    return (
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-outline-danger mx-1" onClick={handleClearClick}>Remove</button>
            <button className="btn btn-outline-info mx-1" onClick={handleUndoClick}>Undo</button>
            <button className="btn btn-outline-info mx-1" onClick={handleRedoClick}>Redo</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in the above text editor to preview it here"}</p>

        </div>
        </>
    )
}
