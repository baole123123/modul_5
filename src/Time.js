import React, { useEffect ,useState} from 'react';

function Time(props) {
    const [time, setTime] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime)=>prevTime - 1);
        },1000)
        return () =>{
            clearInterval(interval)
        };
    },[]);
    return (
        <div>
            <h1>Thời gian {time}</h1>
        </div>
    );
}

export default Time;