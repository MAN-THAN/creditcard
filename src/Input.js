import React, { useState } from 'react'
import "./index.css"


const Input = () => {
    const [input1, setinput1] = useState("");
    const [input2, setinput2] = useState("");
    const [input3, setinput3] = useState("");
    const [input4, setinput4] = useState("");
    const [data, setdata]  = useState([]);


    const ChangeInput1 = (e) => {
       
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
          setinput1(e.target.value)
        }

    }
    const ChangeInput2 = (e) => {
       
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setinput2(e.target.value)
        }

    }
    const ChangeInput3 = (e) => {
       
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setinput3(e.target.value)
        }

    }
    const ChangeInput4 = (e) => {
       
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setinput4(e.target.value)
        }

    }
    var elts = document.getElementsByClassName('test');
   
    Array.from(elts).forEach(function(elt){
  elt.addEventListener("keyup", function(event) {
   
    if ( elt.value.length == 4) {
     
      elt.nextElementSibling.focus()
    }
    if(elt.value.length == 0){
        elt.previousElementSibling.focus()
    }
  });
})

const Paste = (e) => {
    console.log(e.clipboardData.getData("Text"));
    let pastedinput = e.clipboardData.getData("Text");
    if(pastedinput.length > 4 && pastedinput.length <= 16){
    let inputfor1 = pastedinput.slice(0, 4);
    console.log(inputfor1);
    setinput1(inputfor1);
    let inputfor2 = pastedinput.slice(4, 8);
    setinput2(inputfor2)
    let inputfor3 = pastedinput.slice(8, 12);
    setinput3(inputfor3);
    let inputfor4 = pastedinput.slice(12);
    setinput4(inputfor4);}
    else{
        alert("Card Number Should be of 16 digits")
    }


}

const Submit = () => {


    if(input1.length + input2.length + input3.length + input4.length != 16 ){
        alert("Card Number Should be of 16 digits");

    }
    else{
    const tempobj =  {
        input1 :  input1,
        input2 :  input2,
        input3 :  input3,
        input4 :  input4,
        id : Date.now()
    }
    setdata([...data, tempobj])




setinput1("");
setinput2("");
setinput3("");
setinput4("");
}

}


const Delete = (e) => {
   let id = e;
 let a = data.filter((obj) => obj.id != id)
   
   setdata(a)
   



}

  return (
    <div className='main'>
        <div className='card'>
        <i className="fa-brands fa-amazon-pay icon"></i>
            <h2>Enter Your Card Number</h2>
            <div className='box'>
                <input type= "text" maxLength= '4'  className='test' value={input1} onPaste= {Paste} onChange={ChangeInput1} required></input>
                <input type= "text" maxLength= '4'  className='test' value={input2}  onChange={ChangeInput2} required></input> 
                <input type= "text" maxLength= '4'  className='test' value={input3}  onChange={ChangeInput3} required></input>
                <input type= "text" maxLength= '4' className='test' value={input4}  onChange={ChangeInput4} required></input>
            </div>

            <button onClick={Submit} className='button'>SUBMIT</button>
        </div>
        <table className='table'>
            <tr>
                <th><u>Customer Card Number</u></th>
                <th> <u>Delete</u></th>
            </tr>
        {data.length > 0 && data.map((e) => {
            return (<tr >
                <td id='green' >{e.input1} {e.input2} {e.input3} {e.input4} </td>
                <td key={e.id} onClick={() => Delete(e.id)}> <i className="fa-solid fa-trash-can delete"></i></td>
            </tr>)

        }) }
        </table>
    </div>
  )
}

export default Input