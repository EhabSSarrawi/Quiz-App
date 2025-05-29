import { useEffect, useState } from 'react'

function QuestionTimer({timeOut, onTimeOut, mode}) {

    const [remaningTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {
        const interval = setTimeout(onTimeOut, timeOut)
        return () => {
        clearInterval(interval);
    };

    }, [onTimeOut, timeOut]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);    

        return () => {
            clearInterval(interval);
        };
    },[]);

  return (
    <>
        <progress id="question-time" max={timeOut} value={remaningTime} className={mode}></progress>
    </>
  );
}

export default QuestionTimer;