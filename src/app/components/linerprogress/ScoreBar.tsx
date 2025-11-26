"use client"
import React from "react";
type scoretype={
    score:number
}
export default function ScoreBar({score}:scoretype) {
  return (
    <div style={{ width: "300px", fontFamily: "sans-serif" }}>
    <p className="text-white"><b>{score}</b> out of 100.</p>
      <div
        style={{
          position: "relative",
          height: "18px",
          borderRadius: "10px",
          background:
            "linear-gradient(to right, red, orange, yellow, lightgreen, green)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: `${score}%`,
            top: "-6px",
            width: 0,
            height: 0,
            borderLeft: "7px solid transparent",
            borderRight: "7px solid transparent",
            borderBottom: "12px solid black",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </div>
  );
}
