"use client";

import { useState } from "react";

export default function Home() {
  // Optional: Remove this if you're not using it.

// Use camelCase for state setter functions
const [count, setCount] = useState(0);

  const  countValue = () =>         {               
    setCount((prevCount) => prevCount + 1)
  }

  const  decreseValue = () => {   
    if( count > 0) {
      setCount((prevCount) => prevCount - 1)
    }            
    
  }
                                      

  return (
    <div className="min-h-screen flex items-center justify-center gap-5">
      <button onClick={countValue} className="py-2 px-3 border border-black rounded">+</button>
      <p> {count} </p>
      <button onClick={decreseValue} className="py-2 px-3 border border-black rounded">-</button>
    </div>
  );

}

