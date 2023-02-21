import React from "react";
import { Button, View, Text } from "react-native";
import { useState } from "react";
// import { View } from "react-native-web";

Calculatorf = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");

  const appendValue = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const handleDelete = () => {
    setCurrent(current.slice(0, -1));
  };

  const handleAllClear = () => {
    setCurrent("");
    setPrevious("");
    setOperation("");
  };

  const chooseOperation = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperation(e.target.getAttribute("data"));
  };

  const equals = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setPrevious("");
    setOperation("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (operation) {
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "/":
        result = previousNumber / currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };
  return (
    <View>
      <View>
        <View>
          <Text>
            {previous} {operation}
          </Text>
        </View>
        <View>
          <Text> {current}</Text>
        </View>
      </View>
      <View style={{ flex: "row" }}>
        <Button title="AC" gridspan={2} control onClick={handleAllClear}>
          AC
        </Button>
        <Button title="DEL" control onClick={handleDelete}>
          DEL
        </Button>
        <Button title="/" data={"/"} onClick={chooseOperation} operation>
          /
        </Button>
        <Button title="7" data={"7"} onClick={appendValue}>
          7
        </Button>
      </View>
      <Button title="8" data={"8"} onClick={appendValue}>
        8
      </Button>
      <Button title="9" data={"9"} onClick={appendValue}>
        9
      </Button>
      <Button title="*" data={"*"} onClick={chooseOperation} operation>
        *
      </Button>
      <Button title="4" data={"4"} onClick={appendValue}>
        4
      </Button>
      <Button title="5" data={"5"} onClick={appendValue}>
        5
      </Button>
      <Button title="6" data={"6"} onClick={appendValue}>
        6
      </Button>
      <Button title="+" data={"+"} onClick={chooseOperation} operation>
        +
      </Button>
      <Button title="1" data={"1"} onClick={appendValue}>
        1
      </Button>
      <Button title="2" data={"2"} onClick={appendValue}>
        2
      </Button>
      <Button title="3" data={"3"} onClick={appendValue}>
        3
      </Button>
      <Button title="-" data={"-"} onClick={chooseOperation} operation>
        -
      </Button>
      <Button title="." data={"."} onClick={appendValue} control dot>
        .
      </Button>
      <Button title="0" data={"0"} onClick={appendValue}>
        0
      </Button>
      <Button title="=" data={"="} onClick={equals} gridspan={2} operation>
        =
      </Button>
    </View>
  );
};

export default Calculatorf;
