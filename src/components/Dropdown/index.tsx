import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
import { IList, Item } from "../../utils/data";
import styles from "./styles.module.scss";

type Props = {
  data: IList;
  setSelectedId: React.Dispatch<React.SetStateAction<[] | number[]>>;
  selectedId: [] | number[];
};

export const Dropdown = ({
  data: { title, items },
  setSelectedId,
  selectedId,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [checkBox, setCheckBox] = useState(false);
  const handleDropdownToggle = () => setIsOpen(!isOpen);
  const handleSelect = (i: number) => {
    const selected = selectedId.find((item) => item === i);
    selected === 0 || selected
      ? setSelectedId(selectedId.filter((item) => item !== i))
      : setSelectedId([...selectedId, i]);
  };

  const checkBox = (i: number) => {
    const selected = selectedId.find((item) => item === i);
    if (selected === 0 || selected) {
      return true;
    } else {
      return false;
    }
  };

  const DropDownTitle = () => {
    if (selectedId.length === 0) {
      return title;
    } else if (selectedId.length === 1) {
      return items[selectedId[0]].name;
    } else {
      return `${selectedId.length} selected`;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header} onClick={handleDropdownToggle}>
          <div>{DropDownTitle()}</div>
          {!isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </div>

        {isOpen && (
          <div className={styles.list}>
            <ul className={styles.items}>
              {items.map((item, i) => (
                <li key={i} onClick={() => handleSelect(i)}>
                  {item.name}
                  <div className={styles.checkbox}>
                    {checkBox(i) && <BiCheck />}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
