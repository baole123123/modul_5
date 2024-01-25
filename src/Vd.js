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