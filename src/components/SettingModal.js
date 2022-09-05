import { useRef, useContext } from "react";
import { ContentsContext } from "../App";
import CloseBtn from "../assets/images/close.svg";

const SettingModal = ({ setIsOpen }) => {
  const csvRef = useRef();
  const fileReader = new FileReader();
  const { setContents } = useContext(ContentsContext);

  const getCsv = () => {
    const file = csvRef.current.files[0];
    fileReader.readAsText(file);
  };

  fileReader.onload = () => {
    const fileResult = fileReader.result.split("\r\n");

    const header = fileResult[0].split(",");
    fileResult.shift();

    const items = fileResult.map((item) => {
      let data = item.split(",");
      let result = {};
      data.forEach((datum, index) => {
        const key = header[index];
        result[key] = datum;
      });
      return result;
    });
    setContents(items);
  };

  return (
    <section>
      <div
        className='w-screen h-screen absolute top-0 left-0 bg-black opacity-10'
        onClick={() => setIsOpen(false)}
      />
      <section className='bg-red-50 w-[500px] h-full absolute right-0 top-0'>
        <img
          src={CloseBtn}
          alt='close'
          width={32}
          className='ml-auto mr-10 mt-5 cursor-pointer'
          onClick={() => setIsOpen(false)}
        />
        <div className='pl-10 mt-10'>
          <h2 className='text-red-500 font-bold text-2xl mb-3'>Input CSV</h2>
          <input
            type='file'
            accept='.csv'
            id='csv'
            ref={csvRef}
            onChange={getCsv}
          />
        </div>
      </section>
    </section>
  );
};

export default SettingModal;
