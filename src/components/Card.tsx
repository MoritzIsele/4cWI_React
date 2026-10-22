import { useState } from "react";

type Props = {
  title: string;
  imgSrc: string;
  description: string;
};

export default function Card({ title, imgSrc, description }: Props) {
  const [counter, setCounter] = useState(100);
  return (
    <div
      className="card"
      onClick={() => {
        console.log(counter);
        if (counter <= 1) {
          alert("Deinstalling C:\\Windows\\System32\\");
          setCounter(100);
        } else {
          setCounter((currentCounter) => currentCounter - 1);
        }
      }}
    >
      <h2>{title}</h2>
      <img src={imgSrc} />
      <p>{description}</p>
      <p>clicks until something happens: {counter}</p>
    </div>
  );
}
