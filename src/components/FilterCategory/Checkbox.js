import { useEffect, useState } from "react";

function CheckboxInput({ data, setData, value, brands }) {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    // if (isChecked) {
    //   setData([...data, value]);
    // } else {
    //   setData(data.filter((item) => item !== value));
    // }
    if (value === "All") {
      if (JSON.stringify(data) === JSON.stringify(brands)) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    } else {
      if (data.find((item) => item === value)) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    }
  }, [data]);

  const handleChecked = () => {
    if (!isChecked) {
      if (value === "All") {
        setData(brands);
      } else {
        setData([...data, value]);
      }
    } else {
      if (value === "All") {
        setData([]);
      } else {
        setData(data.filter((item) => item !== value));
      }
    }
  };

  return (
    <div className={"checkbox_item"}>
      <label>{value}</label>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={handleChecked}
      />
    </div>
  );
}

export default CheckboxInput;
