import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }

        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
     
  return (
    <div className="container" style = {myStyle}>
        <h1 className ="my-2"> About Us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style = {myStyle}>
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>About Simple Text Utility</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            It is a simple text Utility project by which user can convert the text into <strong>Upper 
            case</strong>, <strong>Lower case</strong>, user can also <strong>Clear Text</strong>, 
            <strong>Copy Text</strong>, and also can <strong>Remove Extra Spaces from Text</strong>.
        </div>
        </div>
    </div>
    <div className="accordion-item" style = {myStyle}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Technologies Used</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            This project is made using React JS, and Bootstrap.
        </div>
        </div>
    </div>
    <div className="accordion-item" style = {myStyle}>
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Open Source Contribution</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            The code for project this project can be found at <a href ="https://github.com/AG271872/simple-text-utility">this link</a>. Feel free to contribute to the project by raising a pull request. 
        </div>
        </div>
    </div>
    </div>
    <div className="container my-3">
        <button type="button" onClick = {toggleStyle} className="btn btn-primary">{btnText}</button>
    </div>
</div>
  )
}

