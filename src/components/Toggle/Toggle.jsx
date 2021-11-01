import Switch from "react-switch";

import "./Toggle.css";

export const Toggle = ({ switchHandler, checked }) => {
  return (
    <div className="d-flex align-items-center">
      <Switch
        checked={checked}
        onChange={switchHandler}
        onColor="#BADAD9"
        onHandleColor="#3B6564"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(255, 255, 255, 0.8)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
    </div>
  );
};
