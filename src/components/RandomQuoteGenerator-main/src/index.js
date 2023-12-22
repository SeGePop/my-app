import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { App } from "./App";

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random number generator
export function getRandomColor() {
  const colors = [
    "#FFC0CB", // Pink
    "#FFD700", // Gold
    "#00FFFF", // Cyan
    "#FFA07A", // Light Salmon
    "#87CEFA", // Light Sky Blue
    "#FF69B4", // Hot Pink
    "#00FF7F", // Spring Green
    "#ADD8E6", // Light Blue
    "#F08080", // Light Coral
    "#90EE90" // Light Green
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// get random color code

export const quotes = [
  {
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
