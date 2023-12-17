import React, { useState } from "react";
import Navbar from "./Pages/Navbar";
import Card from "./Pages/Card";
import Data from "./data.json";
import Pagination from "./Pages/Pagination";

function App() {
  const [currPage, setCurrPage] = useState(1);
  const [userInput, setUserInput] = useState("");
  const cardsPerPage = 6;

  const totalPages = Math.ceil(Data.length / cardsPerPage);

  const indexOfLastCard = currPage * 6;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  let currCards
  if (userInput.trim().length) {
     currCards = Data.filter((item) =>
      item.brand.toLowerCase().includes(userInput.trim().toLowerCase())
    );
  } else {
     currCards = Data.slice(indexOfFirstCard, indexOfLastCard);
  }

  const handlePageChange = (pageNum) => {
    if (+pageNum < 1) return;
    if (+pageNum > totalPages) return;
    setCurrPage(pageNum);
  };

  const [isClicked, setIsClicked] = useState(false);
  const toggleBtn = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div
      className={`w-full h-fulbg-green-300 pb-8 ${
        isClicked ? "bg-black" : "bg-green-300 "
      }`}
    >
      <Navbar
        isClicked={isClicked}
        toggleBtn={toggleBtn}
        setUserInput={setUserInput}
      />
      <div className="w-[95%] flex flex-wrap m-auto gap-10">
        <Card currCards={currCards} userInput={userInput} />
      </div>
      <Pagination
        isClicked={isClicked}
        handlePageChange={handlePageChange}
        currPage={currPage}
      />
    </div>
  );
}

export default App;
