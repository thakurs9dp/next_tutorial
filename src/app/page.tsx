"use client";

import { useState } from "react";

export default function Home() {
  // Optional: Remove this if you're not using it.

// Use camelCase for state setter functions
const [count, setCount] = useState(1);

  const  countValue = () =>         {               
    setCount((prevCount) => prevCount + 1)
  }
                                      

  return (
    <div>
      {/* Update state correctly */}
      <button onClick={countValue}>
        Increment Count
      </button>
      {/* Display the count */}
      <p>Current Count: {count}</p>
    </div>
  );

}

