// TooltipQuestion.jsx - Ayrı komponent faylı

"use client";
import React, { useState } from "react";
import Ques from "@/public/icons/ques.svg";

const TooltipQuestion = ({ description }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div style={{ cursor: "pointer", color: "#0066cc" }}>
        <Ques />
      </div>

      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "100%",
            transform: "translateY(-50%)",
            marginLeft: "8px",
            width: "15rem",
            height: "auto",
            minHeight: "3rem",
            backgroundColor: "#4a2682",
            color: "white",
            padding: "8px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            whiteSpace: "normal",
            zIndex: "1000",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            wordWrap: "break-word",
            textAlign: "left",
            lineHeight: "1.4",
          }}
        >
          {description || "Məlumat yoxdur"}
          {/* Arrow */}
          <div
            style={{
              position: "absolute",
              right: "100%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "0",
              height: "0",
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderRight: "5px solid #4a2682",
              
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TooltipQuestion;