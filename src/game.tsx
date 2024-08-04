import { useState } from "react";

export const Game = ({ data }: { data: Record<string, string> }) => {
  //   const data = props.data;
  type ButtonState = "DEFAULT" | "SELECTED" | "WRONG";
  type option = {
    value: string;
    state: ButtonState;
  };
  const countries = Object.keys(data);
  const caps = Object.values(data);
  const initGame: option[] = [...countries, ...caps]
    .sort(() => Math.random() - 0.5)
    .map((value) => ({
      value,
      state: "DEFAULT",
    }));
  const [options, setOptions] = useState<option[]>(initGame);
  const [selected, setSelected] = useState<Record<string, string>>();
  const isGameOver = options.length === 0;
  const getButtonClass = (option: option) => {
    return `box ${
      option.state === "SELECTED"
        ? "selected"
        : option.state === "WRONG"
        ? "wrong"
        : ""
    }`;
  };

  const onButtonClick = (option: option) => {
    if (!selected) {
      setSelected(option);
      setOptions(
        options.map((opt) => {
          return opt.value === option.value
            ? { ...opt, state: "SELECTED" }
            : { ...opt, state: "DEFAULT" };
        })
      );
    } else {
      if (
        selected.value === data[option.value] ||
        option.value === data[selected.value]
      ) {
        setOptions(
          options.filter(
            (opt) =>
              !(opt.value === selected.value || opt.value === option.value)
          )
        );
      } else {
        setOptions(
          options.map((opt) => {
            return opt.value === selected.value || opt.value === option.value
              ? { ...opt, state: "WRONG" }
              : opt;
          })
        );
      }
      setSelected(undefined);
    }
  };
  const restart = () => {
    setOptions(initGame);
  };
  if (isGameOver) {
    return (
      <div>
        <h1>Congratulations!</h1>
        <button
          onClick={() => {
            restart();
          }}
        >
          Start over
        </button>
      </div>
    );
  }
  return (
    <div>
      {options.map((option) => (
        <button
          key={option.value}
          className={getButtonClass(option)}
          onClick={() => onButtonClick(option)}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};
