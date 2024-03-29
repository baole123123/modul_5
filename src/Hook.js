// import React, { useState } from 'react';

// function Example() {
//   // Khai báo 1 biến số đếm, gọi là "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Bạn đã bấm {count} lần</p>
//       <button onClick={() => setCount(count + 1)}>
//         Bấm vào tôi
//       </button>
//     </div>
//   );
// }
// export default Example;



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


// import React, { useState } from 'react';

// function Vd(props) {
//     const [num1 , setNum1] = useState(0);
//     const [num2 , setNum2] = useState(0);
//     const handleClick = (value) => {
//         setNum1(value);
//     }
//     const handleChange = (event) =>  {
//         setNum2(event.target.value)
//     }
//     return (
//         <div>
//             <h1>{num1}</h1>
//             <h1>{num2}</h1>
//             <input type="text" value={num2} onChange={handleChange}></input>
//             <button onClick={()=>handleClick(10)}>Click</button>

//         </div>
//     );
// }

// export default Vd;


// import React, { useState } from 'react';

// function Vd(props) {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//         setCount(count + 1);
//     };
//     const handleClick1 = () => {
//         setCount(count - 1);
//     };
//     return (
//         <div>
//             <p>Count:{count}</p>
//             <button onClick={handleClick}>Tăng</button>
//             <button onClick={handleClick1}>Giảm</button>
//         </div>
//     );
// }

// export default Vd;


// import React, { useState } from 'react';

// function Vd(props) {
//     const [count1, setCount1] = useState(1)
//     const handleClick = () => {
//         setCount1(count1 + 1);
//      }

//     return (
//         <div>
//             <h3>Count : {count1}</h3>
//             <button onClick={handleClick}>Add</button>
//         </div>
//     );
// }

// export default Vd;

// import React, { useState } from 'react';

// function Vd(props) {
//     const [car, setCar] = useState("");
//     const [color, setColor] = useState("");
//     const handleClick = (event) => {
//         setCar(event.target.value)
//     }
//     const handleClick1 = (event) => {
//         setColor(event.target.value)
//     }
//     return (
//         <div>
//             <h1>Select your car</h1>
//             Chọn xe 
//             <select value={car} onChange={handleClick}>
//                 <option value="Honda">Honda</option>
//                 <option value="Yamaha">Yamaha</option>
//                 <option value="Mec">Mec</option>
//             </select>
//             <br></br>
//             Chọn màu
//             <select value={color} onChange={handleClick1}>
//                 <option value="Black">Black</option>
//                 <option value="Red">Red</option>
//                 <option value="Green">Green</option>
//             </select>
//             <p>Xe bạn chọn là: {car} ---- Màu bạn chọn là: {color}</p>
//         </div>

//     );

// }

// export default Vd;



import React, { useEffect, useState } from 'react';

function Hook(props) {
    const [course, setCourse] = useState("") 
    //// course sẽ mang giá trị  0  1 2 3
    const [name, setName ] = useState("") 
    //// name cũng sẽ mang giá trị tương ứng với  0  1 2 3
    const handleClick = (event) => {
        setCourse(event.target.value)
    }
    useEffect(() => {
        switch (course) {
            case "0":
                setName("Java")
                break;
            case "1":
                setName("Javascript")
                break;
            case "2":
                setName("PHP")
                break;
            case "3":
                setName("Angular")
                break;
        }
    }, [course]);
    return (
        <div>
            <h2>Khóa học bạn chọn là: {name}</h2>
            <select value={course} onChange={handleClick} style={{ width: '300px' , height: '30px' }}>
                <option value="0">Java</option>
                <option value="1">Javascript</option>
                <option value="2">PHP</option>
                <option value="3">Angular</option>

            </select>
        </div>
    );
}

export default Hook;