import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ItemListView from "./ItemListView";
import ImgUrl from "./logo.svg";
import Model from "./Model";

function App() {
  const data = [
    {
      id: 1,
      name: "Application Name-1",
      rating: [],
    },
    {
      id: 2,
      name: "Application Name-2",
      rating: [],
    },
    {
      id: 3,
      name: "Application Name-3",
      rating: [],
    },
    {
      id: 4,
      name: "Application Name-4",
      rating: [1, 3],
    },
  ];

  const [appData, setAppData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // useEffect(() => {}, [appData]);

  return (
    <div className="App">
      <header>Application Rating App</header>
      {console.log(appData, "Main", index)}
      {appData.map((x, index) => {
        const { name, rating, id } = x;
        return (
          <ItemListView
            name={name}
            rating={rating}
            key={id}
            imgSrc={ImgUrl}
            isOpenClick={setIsOpen}
            isOpen={isOpen}
            handleIndex={setIndex}
            index={index}
          />
        );
      })}
      {isOpen ? (
        <Model
          updateData={setAppData}
          isOpenClick={setIsOpen}
          isOpen={isOpen}
          index={index}
          appData={appData}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
