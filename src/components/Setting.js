import { useState } from "react";
import SettingModal from "./SettingModal";
import SettingIcon from "../assets/images/setting.svg";

const Setting = () => {
  const [settingIsOpen, setSettingIsOpen] = useState(false);

  return (
    <div className='my-auto'>
      <img
        src={SettingIcon}
        alt='setting'
        width={40}
        height={40}
        className='cursor-pointer'
        onClick={() => setSettingIsOpen(true)}
      />
      <div className={settingIsOpen ? "block" : "hidden"}>
        <SettingModal setIsOpen={setSettingIsOpen} />
      </div>
    </div>
  );
};

export default Setting;
