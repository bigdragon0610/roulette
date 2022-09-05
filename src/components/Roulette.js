import { useState, useContext } from "react";
import { ContentsContext } from "../App";
import Arrow from "../assets/images/arrow.svg";
import RouletteImg from "../assets/images/roulette.svg";
import DrumRoll from "../assets/audio/drum_roll.mp3";
import Cymbal from "../assets/audio/cymbal.mp3";

const Roulette = () => {
  const [isRolling, setIsRolling] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const drumRoll = new Audio(DrumRoll);
  const cymbal = new Audio(Cymbal);

  const playAudio = () => {
    setTimeout(() => setModalIsOpen(true), 4000);
    setTimeout(() => {
      cymbal.play();
      setIsRolling(false);
    }, 3000);
    drumRoll.play();
  };

  const { contents } = useContext(ContentsContext);

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const Content = () => {
    const content = contents[rand(0, contents.length - 1)];

    return (
      <ul className='text-3xl my-auto flex flex-col gap-5'>
        {Object.keys(content).map((key) => {
          return (
            <li className='whitespace-pre-line'>
              <span className='mr-3 font-bold'>{key}:</span>
              <span className='font-bold'>{content[key]}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <div className='w-screen'>
        <img src={Arrow} alt='arrow' className='mx-auto' width={44} />
        <img
          src={RouletteImg}
          alt='roulette'
          width={400}
          className={
            "mt-5 mx-auto cursor-pointer " +
            (isRolling ? "animate-rolling pointer-events-none " : "")
          }
          onClick={() => {
            setIsRolling(true);
            playAudio();
          }}
        />
      </div>
      <section className={modalIsOpen ? "block" : "hidden"}>
        <div
          className='w-screen h-screen bg-black opacity-10 absolute top-0 left-0'
          onClick={() => {
            setModalIsOpen(false);
          }}
        />
        <div
          className={
            (modalIsOpen ? "animate-rising " : "") +
            "flex justify-center bg-red-50 rounded-md shadow-md w-[800px] h-[600px] absolute overflow-scroll p-6"
          }
        >
          <Content />
        </div>
      </section>
    </div>
  );
};

export default Roulette;
