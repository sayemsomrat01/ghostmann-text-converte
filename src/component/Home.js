import React,{useState} from 'react';
import '../App.css';

export default function Home() {
    const [text, setText] = useState();
    const [btnStyle,setBtnStyle] =useState({
        color:'black',
        backgroundColor:'greenyellow'
    });
    const [myButtonValue, setButtonValue] = useState("DarkMode");
    const [myStyle, setStyle]=useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const convertUppercase=()=>{
        setText(text.toUpperCase());
    }
    const convertLowerCase=()=>{
        setText(text.toLowerCase());
    }
    const convertReverse = ()=>{
        const slice = text.split("");
        const reversed = slice.reverse();
        const reJoin = reversed.join("");
        setText(reJoin);
    }
    const handleClear = ()=>{
        setText("");
    }
    const toggleDark =()=>{
        if(myStyle.color==='black'){
            setStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setBtnStyle({
                border: '1px solid green',
                color: 'white',
                backgroundColor: 'black'
            });
            setButtonValue("LightMode");
        }
        else{
            setStyle({
                color: 'black',
                backgroundColor: 'WHite'
            });
            setBtnStyle({
                color: 'black',
                backgroundColor: 'greenyellow'
            });
            setButtonValue("DarkMode");
        }
    }
  return (
    <>
    <div className='header' style={myStyle}>
        <h1>Welcome to Ghostmann Text Converter Online Tools</h1>      
    </div>
    <div className="container" style={myStyle}>
        <h2>Enter your text to convert :</h2>
        <textarea name="" id="" cols="190" rows="10" onChange={handleOnChange} value={text}></textarea>
    </div>
    <div className="btn-container" style={myStyle}>
        <button onClick={convertUppercase} style={btnStyle}>UpperCase</button>
        <button onClick={convertLowerCase} style={btnStyle}>LowerCase</button>
        <button onClick={convertReverse} style={btnStyle}>Reverse</button>
        <button onClick={handleClear} style={btnStyle}>Clear</button>
        <button onClick={toggleDark} style={btnStyle}>{myButtonValue}</button>
    </div>
    <div className="preview-box">
        <h3>Preview your Text</h3>
        <p>{text}</p>
    </div>

    </>
  )
}
