import React from "react";
import Button from "./Button";

const Card = ({ currCards}) => {
  // console.log(userInput)
  // if (userInput.trim().length) {
  //   currCards = currCards.filter((card) =>
  //     card.brand.toLowerCase().includes(userInput.trim().toLowerCase())
  //   );
  // }
  return (
    <>
      {
        currCards.map((item) => (
          <div className="w-[440px] h-[470px] bg-blue-300 flex flex-col p-4 rounded-[20px]  shadow-2xl gap-4">
            <img
              src={item.image}
              alt="MY_Cars"
              className="w-full h-[240px] rounded-2xl"
            />
            <div className="flex justify-between items-center ">
              <h1 className="text-2xl font-bold">{item.brand}</h1>
              <p class="text-lg border border-dashed rounded-2xl py-1 px-2">
                {item.year}
              </p>
            </div>
            <div>
              <table className="flex gap-14 mb-4">
                <td className="flex gap-4 flex-col">
                  <div className="flex items-center gap-3">
                    <i className="fa-sharp fa-solid fa-person"></i>
                    <p>{item.people} People</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i class="fa-sharp fa-solid fa-gas-pump"></i>
                    <p>{item.disel}</p>
                  </div>
                </td>
                <td className="flex gap-4 flex-col">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-gauge"></i>
                    <p>
                      {item.meter}km <span>/1-litre</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-tag"></i>
                    <p>{item.engion}</p>
                  </div>
                </td>
              </table>
            </div>
            <div className="flex justify-between items-center">
              <p>
                <span className="text-xl font-bold">{item.price}</span> /month
              </p>
              <div className="flex items-center gap-5">
                <i
                  className={`fa-regular fa-heart bg-blue-200 p-3 rounded-xl `}
                ></i>
                <Button>Rent Now</Button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
