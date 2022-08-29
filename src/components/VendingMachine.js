import VendingMachineImg from "../assets/images/vending_machine.png";

const VendingMachine = () => {
  return (
    <img
      src={VendingMachineImg}
      alt='vending machine'
      width={360}
      className='cursor-pointer'
    />
  );
};

export default VendingMachine;
