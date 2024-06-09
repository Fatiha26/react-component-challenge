import React from 'react'

function App(){

let curTime = new Date();
curTime = curTime.getHours();
let greeting = '';

const cssStyle = {};

if(curTime >= 1 && curTime <12)
{
    greeting = 'GOOD Morning!';
    cssStyle.color = 'green';
}
else if(curTime >= 12 && curTime <19)
{
  greeting = 'GOOD EVENING!';
  cssStyle.color = '#e67e22';
}
else
{
  greeting = 'GOOD NIGHT!'
  cssStyle.color = 'blue';

}


   return(
    <>
        <div>
           <h1>Hey There, <span style={cssStyle}>{greeting}</span> </h1>
        </div>
    </>
    
   )

}

export default App;