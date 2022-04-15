import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from "react-icons/io";
import { BiCheck } from "react-icons/bi";

import styles from "./styles.module.scss";

export interface Item {
  id: number;
  category?: string;
  name: string | number | object;
}

type Props = {
  items: Item[];
  title: string;
  setSelectedId: React.Dispatch<React.SetStateAction<[] | number[]>>;
  selectedId: [] | number[];
  grouped: boolean;
  titleTextHelper: string;
};

export const Dropdown = ({
  grouped,
  items,
  title,
  titleTextHelper,
  setSelectedId,
  selectedId,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("");

  const handleDropdownToggle = () => setIsOpen(!isOpen);

  const handleSelect = (id: number) => {
    const selected = selectedId.find((item) => item === id);
    selected === 0 || selected
      ? setSelectedId(selectedId.filter((item) => item !== id))
      : setSelectedId([...selectedId, id]);

    selected === 0 || (selected && selectedId.length === 1)
      ? setHeaderStyle("")
      : setHeaderStyle(styles.h_selected);
  };

  const checkBoxChecked = (i: number) => {
    const selected = selectedId.find((item) => item === i);
    if (selected === 0 || selected) {
      return true;
    } else {
      return false;
    }
  };

  const selectedStyle = (id: number) => {
    const selected = selectedId.find((item) => item === id);
    if (selected) {
      return styles.selected;
    } else {
      return "";
    }
  };

  const dropDownTitle = () =>
    selectedId.length === 0
      ? title
      : selectedId.length === 1
      ? items.find((item) => item.id === selectedId[0])?.name
      : `${selectedId.length} ${titleTextHelper} selected`;

  const handleClearClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    setSelectedId([]);
    setHeaderStyle("");
    isOpen && setIsOpen(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) =>
    e.currentTarget === e.target && setIsOpen(false);

  //group data if grouped === true
  const reducedData = items.reduce((acc, curr) => {
    curr.category &&
      (acc[curr.category] = [...(acc[curr.category] || []), curr]);
    return acc;
  }, {} as Record<string, Item[]>);

  return (
    <>
      <div
        tabIndex={1}
        onBlur={(e) => handleBlur(e)}
        className={styles.container}
      >
        <div
          className={`${styles.header} ${headerStyle}`}
          onClick={handleDropdownToggle}
        >
          <div className={styles.title}>{dropDownTitle()}</div>
          <div>
            {!isOpen && selectedId.length === 0 ? (
              <IoMdArrowDropdown className={styles.icon} />
            ) : isOpen && selectedId.length === 0 ? (
              <IoMdArrowDropup className={styles.icon} />
            ) : (
              <IoMdClose
                className={`${styles.icon} ${styles.close}`}
                onClick={(e) => handleClearClick(e)}
              />
            )}
          </div>
        </div>

        {grouped && isOpen && (
          <ul className={styles.list}>
            {Object.entries(reducedData).map((category, i) => {
              return (
                <>
                  <li className={styles.items}>
                    <div key={i} className={styles.category}>
                      {category[0]}
                    </div>
                    <ul>
                      {category[1].map((item: Item) => {
                        return (
                          <li
                            key={item.id}
                            onClick={() => handleSelect(item.id)}
                            className={selectedStyle(item.id)}
                          >
                            <div className={styles.checkbox}>
                              {checkBoxChecked(item.id) && <BiCheck />}
                            </div>

                            <div className={styles.text}>{item.name}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </>
              );
            })}
          </ul>
        )}

        {!grouped && isOpen && (
          <div className={styles.list}>
            <ul className={styles.items}>
              {items.map((item: Item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={selectedStyle(item.id)}
                  >
                    <div className={styles.checkbox}>
                      {checkBoxChecked(item.id) && <BiCheck />}
                    </div>
                    <div className={styles.text}> {item.name}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
