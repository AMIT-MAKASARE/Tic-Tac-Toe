import React, { useRef, useState } from 'react'
import './tictactoe.css'
import circle from '../assets/circle.png'
import cross from '../assets/crossOne.jpg'

let data=["","","","","","","","",""]

const Tictactoe = () => {
    let[count,setCount]=useState(0)
    let[lock,setLock]=useState(false)
    let titleRef= useRef(null)

    let box1=useRef(null);
    let box2=useRef(null);
    let box3=useRef(null);
    let box4=useRef(null);
    let box5=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box9=useRef(null);
    
    let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle=(e,num)=>{
        if(lock){
            return 0
        }
        if(count%2 === 0){
            e.target.innerHTML =`<img src='${cross}'>`
            data[num]="x";
            setCount(++count)
        }
        else{
           e.target.innerHTML =`<img src='${circle}'>`
            data[num]="o";
            setCount(++count)
        }
        checkWin()
    }
    const checkWin=()=>{
      if(data[0]==data[1] && data[1]==data[2] && data[2]!==""){
            won(data[2]);
      }
      else if(data[3]==data[4] && data[4]==data[5] && data[5]!==""){
        won(data[5])
      }
      else if(data[6]==data[7] && data[7]==data[8] && data[8]!==""){
        won(data[8])
      }
      else if(data[0]==data[3] && data[3]==data[6] && data[6]!==""){
        won(data[6])
      }
      else if(data[1]==data[4] && data[4]==data[7] && data[7]!==""){
        won(data[7])
      }
      else if(data[2]==data[5] && data[5]==data[8] && data[8]!==""){
        won(data[8])
      }
      else if(data[0]==data[4] && data[4]==data[8] && data[8]!==""){
        won(data[8])
      }
      else if(data[0]==data[1] && data[1]==data[2] && data[2]!==""){
        won(data[2])
      }
      else if(data[2]==data[4] && data[4]==data[6] && data[6]!==""){
        won(data[6])
      }

    }
    const won=(winner)=>{
      setLock(true)
      if(winner==="x"){
        titleRef.current.innerHTML=`Congratulations:<img src=${cross}> win`
      }
       else{
        titleRef.current.innerHTML=`Congratulations:<img src=${circle}> win`
      }
    }
    const reset=()=>{
      setLock(false);
      data=["","","","","","","","",""]
      titleRef.current.innerHTML='tic tac toe in <span>React</span>'
      box_array.map((e)=>{
        e.current.innerHTML = "";
      })
    }
  return (
    <div className='container text-center'> 
        <h1 className='title text-white' ref={titleRef}>Tic Tac Toe Game</h1>
        <div className="board">
              <div className="row1">
                <div ref={box1} className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div ref={box2} className="boxes" onClick={(e)=>{toggle(e,1)}}></div> 
                <div ref={box3} className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
              </div>
              <div className="row2 ">
                <div ref={box4} className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                <div ref={box5} className="boxes" onClick={(e)=>{toggle(e,4)}}></div> 
                <div ref={box6} className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
              </div>
              <div className="row3 ">
                <div ref={box7} className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                <div ref={box8} className="boxes" onClick={(e)=>{toggle(e,7)}}></div> 
                <div ref={box9} className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
              </div>
        </div>
        <button className="reset btn btn-light" onClick={()=>{reset()}}>Reset Game</button>
    </div>
  )
}

export default Tictactoe
