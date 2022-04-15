import { useState } from "react";
import { Dropdown, Item } from "../Dropdown/Dropdown";

const items: Item[] = [
  {
    id: 1,
    category: "category 1",
    name: "item1",
  },
  {
    id: 2,
    category: "category 1",
    name: "item2 with more words to display ",
  },
  {
    id: 3,
    category: "category 1",
    name: "item3",
  },
  {
    id: 4,
    category: "category 2",
    name: "item4",
  },
  {
    id: 5,
    category: "category 2",
    name: "item5",
  },
  {
    id: 6,
    category: "category 1",
    name: "item6",
  },
  {
    id: 7,
    category: "category 1",
    name: "item7",
  },
];

const anotherItems: Item[] = [
  {
    id: 8,
    name: "another item1",
  },
  {
    id: 9,
    name: "another item2",
  },
  {
    id: 10,
    name: "another item3",
  },
];

const App = () => {
  const [selectedId, setSelectedId] = useState<number[] | []>([]);
  const [second, setSecond] = useState<number[] | []>([]);
  return (
    <div>
      <Dropdown
        items={items}
        grouped={true}
        title="Chose Items"
        titleTextHelper="Items"
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <Dropdown
        items={anotherItems}
        grouped={false}
        title="Chose Another Items"
        titleTextHelper="Items"
        selectedId={second}
        setSelectedId={setSecond}
      />
    </div>
  );
};

export default App;
