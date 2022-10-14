import React, { useEffect, useState } from "react";

import "./countere.css"
import Button from 'react-bootstrap/Button';

export default function Counter() {
 
  const [count, setCount] = useState(0);
  const [notification,setnotification] = useState(0);
  
  


useEffect(() => {
  
  
  if (count >=10) {
  
     var id=setTimeout(() => {
      setnotification(notification+1)
    }, 1000);
  }
    if(notification===6){
      clearTimeout(id)
     
      setCount( 0)
      setnotification(false)
  
    }
  
    return () => {
    
    }
  }, [count,notification])
  
  return (
   <>
   <label className="counterPoint">Counter Point</label>
    <div className="countrer">
       
      <div className="counterposition">
{/* <label >count is 10 or more it will be re-render</label> */}
      <Button  variant="danger" 
        onClick={() => {
          setCount(count + 1);
        }}
        >Click me and add</Button>
        
    </div>
      <label className="counters">{count}</label>
        </div>
      <label ></label>
      <div className="notification">{ notification ? `Re-rendering....${notification}` : " "}</div>
      {/* <div>{notification}</div> */}
      <div>
        {/* {notification===5 ? "RE rendering...." :null} */}
      </div>
     
   
      <h6 className="note">
      Note: Count =10 or more than 10, it will start auto Re-rendering
      </h6>
    
   </>
  );
}
