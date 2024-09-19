import React, { useEffect } from "react";
const Editor = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const draggableBox = document.getElementById("draggableBox");

    draggableBox.addEventListener("dragstart", (event: DragEvent) => {
      if (event.dataTransfer) {
        event.dataTransfer.setData("text/plain", draggableBox.id);
      }
    });

    container.addEventListener("dragover", (event: DragEvent) => {
      event.preventDefault();
    });

    container.addEventListener("drop", (event: DragEvent) => {
      event.preventDefault();
      const containerRect = container.getBoundingClientRect();
      const boxWidth = draggableBox.offsetWidth;
      const boxHeight = draggableBox.offsetHeight;

      const x = event.clientX - containerRect.left - boxWidth / 2;
      const y = event.clientY - containerRect.top - boxHeight / 2;

      draggableBox.style.left = `${x}px`;
      draggableBox.style.top = `${y}px`;
    });
  }, []);

  return (
    <div className="w-80 h-80 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-full h-full overflow-hidden relative bg-green-400 container">
        <div
          id="draggableBox"
          style={{
            width: 100,
            height: 50,
            backgroundColor: "skyblue",
            position: "absolute",
            cursor: "grab",
          }}
          draggable
        >
          Drag me!
        </div>
      </div>
    </div>
  );
};

export default Editor;
