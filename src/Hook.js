import React, { useState } from 'react';

function Example() {
  // Khai báo 1 biến số đếm, gọi là "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm vào tôi
      </button>
    </div>
  );
}
export default Example;



////useEffect
// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div>
//       <p>Thời gian: {seconds}</p>
//     </div>
//   );
// }

// export default Timer;


