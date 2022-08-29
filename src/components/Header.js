import Setting from "./Setting";

const Header = () => {
  return (
    <header className='bg-red-200 w-full h-20 px-10 flex'>
      <h1 className='text-3xl font-bold text-red-500 leading-[80px] mr-auto'>
        Vending Machine
      </h1>
      <Setting />
    </header>
  );
};

export default Header;
