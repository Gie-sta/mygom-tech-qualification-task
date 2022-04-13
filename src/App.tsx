import React, { useState } from "react";
import { data, Item } from "./utils/data";
import { Dropdown } from "./components/Dropdown";

const App = () => {
  const [selectedId, setSelectedId] = useState<number[] | []>([]);
  console.log(selectedId);
  return (
    <div>
      <Dropdown
        data={data}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, quos
        nam id repellat aut quam cumque molestiae architecto vero consequuntur
        quia quas eligendi temporibus. Consectetur accusantium tempore deserunt
        ab placeat!
      </div>
    </div>
  );
};

export default App;
