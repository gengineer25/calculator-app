"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { evaluate } from "mathjs";

export const Calculator = () => {
  const [display, setDisplay] = useState<string>("0");
  const [expression, setExpression] = useState<string>("");
  const buttonValues = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDisplay();
    } else {
      appendToDisplay(value);
    }
  };

  const appendToDisplay = (value: string) => {
    // 0 で始まる複数桁の数字を入力させない等の処理
    if (display === "0" && value !== "." && !isNaN(Number(value))) {
      setDisplay(value);
      setExpression(value);
    }
    // 連続する演算子や..などを防ぐ
    else if (
      !isNaN(Number(display.slice(-1))) ||
      display.slice(-1) === "." || //直前の文字が数字か小数点
      !isNaN(Number(value)) ||
      value === "." //入力された文字が数字か小数点
    ) {
      setDisplay((prevDisplay) => prevDisplay + value);
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const calculateResult = () => {
    try {
      // mathjs を使用して安全に計算
      const result = evaluate(expression).toString();
      setDisplay(result);
      setExpression(result);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setDisplay("Error");
      setExpression("");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setExpression("");
  };

  return (
    <div className="p-4 rounded-lg shadow-md w-[300px] mx-auto bg-gray-100 dark:bg-gray-800">
      <Input
        type="text"
        value={display}
        readOnly
        className="text-right text-2xl mb-4 h-16"
      />
      <div className="grid grid-cols-4 gap-2">
        {/* 数字ボタン */}
        {buttonValues.map((value) => (
          <Button
            key={value}
            variant={
              isNaN(Number(value)) && value !== "." ? "secondary" : "default"
            } // 数字と.以外はsecondary
            onClick={() => handleButtonClick(value)}
            className="h-12"
          >
            {value}
          </Button>
        ))}
        {/* クリアボタン */}
        <Button
          variant="destructive"
          onClick={() => handleButtonClick("C")}
          className="col-span-2 h-12" // 2列分の幅
        >
          C
        </Button>
      </div>
    </div>
  );
};
