import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";



interface AccordionItem {
  title: string;
  description: string;
}

const accordianList: AccordionItem[] = [
  {
    title: "HTML",
    description: "HTML is the standard markup language for creating Web pages.",
  },
  {
    title: "CSS",
    description: "CSS describes how HTML elements are to be displayed on screen.",
  },
  {
    title: "JavaScript",
    description: "JavaScript is the programming language of the Web.",
  },
];

const Accordion: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleDescription = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
      {accordianList.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggleDescription(index)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              padding: "5px",
              background: "black",
            }}
          >
            {item.title}
            <span>{openIndexes.includes(index)?<IoIosArrowDropupCircle/>:<IoIosArrowDropdownCircle/>}</span>
          </div>
          {openIndexes.includes(index) && <div>{item.description}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
