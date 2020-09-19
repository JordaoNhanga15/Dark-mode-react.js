import React from 'react';
import './App.css';



function App() {
  function Dark(e){

    const Html=document.querySelector('html')
    //const checkbox=document.querySelector("input[name=theme]")

    const getSTyle=(element,style)=>
    window.getComputedStyle(element).getPropertyValue(style)

    const initialColors={
      bg:getSTyle(Html,'--bg'),
      bgPanel:getSTyle(Html,"--bg-panel"),
      colorHeadings:getSTyle(Html,"--color-headings"),
      colorText:getSTyle(Html,"--color-text")
    }
    const darkColors={
      bg:'#333333',
      bgPanel:"#434343",
      colorHeadings:"#3664ff",
      colorText:"#b5b5b5"
    }
    const sdColors={
      bg:'#ffffff',
      bgPanel:"#ccc",
      colorHeadings:"#0077ff",
      colorText:":#1b1a1a"
    }
    
    const transformKey=key=>"--" + key.replace(/([A-Z])/,"-$1").toLowerCase()
    


    const changeColors=(colors)=>{
      Object.keys(colors).map(key=>{
        //console.log(transformKey(key),colors[key])
        //console.log(initialColors)
        //console.log(transformKey(key))
        return Html.style.setProperty(transformKey(key), colors[key])
         //console.log(colors[key])
      })}

    //   const inichangeColors=(sdColors)=>{
    //      Object.keys(sdColors).map(key=>{
    //       //console.log(transformKey(key),colors[key])
    //       console.log(sdColors)
    //       //console.log(transformKey(key))
    //       return Html.style.setProperty(transformKey(key), sdColors[key])
    //        //console.log(colors[key])
    //     })
    //   //console.log(initialColors)
    // }

    
    e.target.checked ? changeColors(darkColors):changeColors(sdColors)

    // checkbox.addEventListener("change",(e)=>{
    //   //console.log(e.target.checked)
    //   e.target.checked ? changeColors(darkColors):changeColors(initialColors)
    // })
  }
  return (
    <div className="App">
      <header>
          <div className='Lados'>
            <div className='lado_a'>
              <h1>BUKA</h1>
            </div>
            <div className='lado_b'>
      
              <input type="checkbox" id='switch' name='theme' onChange={(e)=>Dark(e)} />
              <label for='switch'>
                target
              </label>
              
            </div>
          </div>
          <div className='container'>
            <p>lorem ipsum barcelona eu amo a minha vida fui,para festa da minha irma cuyou bue mas nao demorei</p>
          </div>
      </header>
    </div>
  );
}

export default App;
