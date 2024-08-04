import "./styles.css";
import { useState, useEffect } from "react";
import { Game } from "./game";
export default function App() {
  const data = {
    China: "Bei Jing",
    USA: "Washington DC",
    Henan: "Zhengzhou",
    // country4: "Lihu",
    // country5: "Sirinhaém",
    // country6: "Sarankhola",
    // country7: "Rakszawa",
    // country8: "Saraburi",
    // countr9: "Sandakan",
    // country10: "Arevshat",
  };

  const countries = Object.keys(data);
  const caps = Object.values(data);
  // const [countries, setCountries] = useState<string[]>();
  // const [caps, setCaps] = useState<string[]>();

  let activeType;
  let isActive;
  // const [isActive, setIsActive] = useState(false);

  const reset = () => {
    activeType = "";
    isActive = false;
  };

  const compair = () => {
    // if (isActive) {
    //   if (activeType === type) {
    //     //type the same, do reset
    //     reset();
    //   } else {
    //     const targe = type === "country" ? countries : caps;
    //     // type different, check if match do reduce. not match reset
    //     if (key === targe?.indexOf(e.target.value)) {
    //       alert("do remove one pair");
    //     } else reset();
    //   }
    // }
  };
  const clickEvent = (e, type: string, key: number) => {
    // setIsActive(!isActive);

    if (e.target.className.includes("active")) {
      isActive = true;
      activeType = type;
    } else {
      isActive = false;
      activeType = "";
    }
    isActive = !isActive;
    compair();
    e.target.className = `box ${isActive ? " active" : ""}`;
  };
  // useEffect(() => {
  //   setCountries(Object.keys(data));
  //   setCaps(Object.values(data));
  // }, []);

  useEffect(() => {}, [countries, caps]);

  return (
    <div className="App">
      <h1>Capital Penguin</h1>
      <Game data={data} />
      {/* <div className="countainer">
        {countries &&
          countries.map((country, key) => (
            <button
              key={country}
              className="box"
              value={country}
              onClick={(e) => clickEvent(e, "country", key)}
            >
              {country}
            </button>
          ))}
        {caps &&
          caps.map((city, key) => (
            <button
              key={city}
              className="box"
              value={city}
              onClick={(e) => clickEvent(e, "city", key)}
            >
              {city}
            </button>
          ))}
      </div> */}
    </div>
  );
}
