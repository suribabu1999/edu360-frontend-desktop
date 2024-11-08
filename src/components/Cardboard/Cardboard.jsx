import React, { useRef, useState } from "react";
import EduProChildrenCard from "../EduProChildrenCard/EduProChildrenCard";
import palatteIcon from "../../assets/icons/palatte_ico.svg";
import penIcon from "../../assets/icons/pen_ico.svg";
import textIcon from "../../assets/icons/text_ico.svg";
import imageIcon from "../../assets/icons/image_ico.svg";
import ribbonIcon from "../../assets/icons/ribbon_ico.svg";

const Cardboard = () => {
  const canvasRef = useRef(null);
  const inputRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("#ff6600");
  const [penWidth, setPenWidth] = useState(2);
  const [showPenOptions, setShowPenOptions] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

  // Start drawing
  const handleMouseDown = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    if (tool === "pen") {
      ctx.beginPath();
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);
    }
  };

  // Draw while mouse moves
  const handleMouseMove = (e) => {
    if (!isDrawing || tool !== "pen") return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = penWidth;
    ctx.lineCap = "round"; // Smooth out the lines
    ctx.stroke();
  };

  // End drawing
  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // Show input box when clicking in text mode
  const handleCanvasClick = (e) => {
    if (tool === "text") {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - canvasRect.left;
      const y = e.clientY - canvasRect.top;

      setTextPosition({ x, y });
      inputRef.current.style.left = `${x}px`;
      inputRef.current.style.top = `${y}px`;
      inputRef.current.value = ""; // Clear previous text
      inputRef.current.style.display = "block";
      inputRef.current.focus();
    }
  };

  // Handle text input submission
  const handleTextSubmit = (e) => {
    if (e.key === "Enter") {
      const ctx = canvasRef.current.getContext("2d");
      ctx.fillStyle = color;
      ctx.font = "16px Arial";
      ctx.fillText(e.target.value, textPosition.x, textPosition.y + 16);
      inputRef.current.style.display = "none"; // Hide input box
    }
  };

  // Handle pen selection
  const handlePenSelection = (width) => {
    setPenWidth(width);
    setShowPenOptions(false); // Hide pen options after selecting
  };

  return (
    <EduProChildrenCard title={"Cardboard"}>
      <div className="p-4 relative bg-[#e8f4fa] rounded-lg shadow-md">
        <canvas
          ref={canvasRef}
          className="bg-white rounded-lg border border-gray-300 mb-4 cursor-crosshair"
          style={{ minHeight: "200px", width: "100%", height: "200px" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleCanvasClick}
        ></canvas>

        {/* Hidden input for text */}
        <input
          ref={inputRef}
          type="text"
          className="absolute border border-gray-300 px-1 py-0.5 rounded outline-none"
          style={{ display: "none", position: "absolute", fontSize: "16px" }}
          onKeyDown={handleTextSubmit}
        />

        <div className="flex justify-between items-center pt-3">
          {/* Color Picker */}
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-6 w-6 rounded cursor-pointer"
            title="Choose color"
          />

          {/* Pen icon with options */}
          <div className="relative">
            <button
              className="text-gray-500"
              onClick={() => setShowPenOptions(!showPenOptions)}
            >
              <img src={penIcon} alt="Pen" className="h-6 w-6" />
            </button>
            {showPenOptions && (
              <div className="absolute top-8 left-0 bg-white border border-gray-300 rounded shadow-md p-2 flex flex-col">
                <button
                  className="p-1 hover:bg-gray-200 rounded"
                  onClick={() => handlePenSelection(1)}
                >
                  Thin
                </button>
                <button
                  className="p-1 hover:bg-gray-200 rounded"
                  onClick={() => handlePenSelection(3)}
                >
                  Medium
                </button>
                <button
                  className="p-1 hover:bg-gray-200 rounded"
                  onClick={() => handlePenSelection(5)}
                >
                  Thick
                </button>
              </div>
            )}
          </div>

          <button className="text-gray-500" onClick={() => setTool("text")}>
            <img src={textIcon} alt="Text" className="h-6 w-6" />
          </button>
          <button className="text-gray-500">
            <img src={imageIcon} alt="Image" className="h-6 w-6" />
          </button>
          <button className="text-gray-500">
            <img src={ribbonIcon} alt="Ribbon" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </EduProChildrenCard>
  );
};

export default Cardboard;
