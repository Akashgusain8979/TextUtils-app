import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClcick=()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClcick=()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClcick=()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspaces Removed!", "success");
    }

    const handleOnChange=(event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text="New text" wrong way to change the state
    // setText("New text"); correct way to change the state
    return (
<>
<div className="container" style={{Color: props.mode === "dark"? "white": "#30529f"}}>
    <h1 > {props.heading}</h1>
<div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"? "grey": "white" ,color: props.mode === "dark"? "white": "#30529f" }} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClcick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClcick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClcick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>

<div className="container my-3" style={{Color: props.mode === "dark"? "white": "#30529f"}}>
    <h4>Your Text Summary</h4>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter text to preview here"}</p>
</div>
</>
)
}
