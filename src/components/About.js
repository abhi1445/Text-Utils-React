import React from 'react'

export default function About(props) {

    //  const [myStyle, setMyStyle] = useState( {
    //     color:'black',
    //     backgroundColor:'White'

    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'rgb(36 74 104)',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }


    // const toggleStyle = () =>{
    //    if( myStyle.color === 'white') {
    //     setMyStyle({
          
    //     })
    //     setBtnText("Enable Dark Mode")
    //    }
    //    else{
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor:'black'
    //     })
    //     setBtnText("Enable Light Mode")
    //    }
    // }
   
  return (
    <div className="contaoner" style={{color: props.mode === 'dark'?'white':'rgb(36 74 104)'}} >
        <h1 className="my-3">About Us</h1>
                <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Text Utils</strong> is your go-to toolkit for quick, smart, and reliable text processing — from formatting and counting to transforming content effortlessly.                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>We believe</strong> in making text tasks simple, fast, and accessible for everyone, whether you’re a student, writer, or developer.                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Our mission is</strong> to empower you with intuitive tools that save time and boost productivity.                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
