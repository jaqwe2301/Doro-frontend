import React, { useState, useEffect } from "react";

interface ITimerProps {
  active: boolean;
}

const Timer: React.FC<ITimerProps> = ({ active }) => {
  //5분 고정이 아닐 경우 Props로 전달
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout;
    if (active) {
      timer = setInterval(() => {
        if (Number(sec) > 0) {
          setSec(Number(sec) - 1);
        }
        if (Number(sec) === 0) {
          if (Number(min) === 0) {
            clearInterval(timer);
          } else {
            setMin(Number(min) - 1);
            setSec(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [min, sec, active]);

  return (
    <span>
      {min === 0 && sec === 0
        ? "인증번호 유효시간 만료"
        : `${min}:${sec < 10 ? `0${sec}` : sec}`}
    </span>
  );
};

export default Timer;
