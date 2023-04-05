import React, { useState } from "react";

const Dropdown = ({
  option = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ],
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex w-[250px]">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className={`w-[250px] border border-[#d3deed] h-8 rounded-md hover:border-[#1D86BE] hover:transition-all hover:duration-300 hover:ease-in hover:cursor-pointer`}
      >
        <option value="">Any</option>
        {option.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

// const option = [
//   {
//     label: "option1",
//     value: "option1",
//   },
//   {
//     label: "option2",
//     value: "option2",
//   },
//   {
//     label: "option3",
//     value: "option3",
//   },
//   {
//     label: "option4",
//     value: "option4",
//   },
// ];
