import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `you clicked ${count} times`;
    // return () => {
    //     cleanup
    // }
    console.log('ddd')
  },[count]);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
}

export default Counter;
