import React, { useState, useRef, useEffect } from "react";
import "./ResizableSidebar.css";

const ResizableSidebar = () => {
  const [width, setWidth] = useState(250); // Default width
  const sidebarRef = useRef(null);
  const resizerRef = useRef(null);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isResizing.current) {
        let newWidth = event.clientX;
        if (newWidth > 100 && newWidth < 500) { // Batas ukuran sidebar
          setWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseDown = () => {
      isResizing.current = true;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    if (resizerRef.current) {
      resizerRef.current.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (resizerRef.current) {
        resizerRef.current.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, []);

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <div ref={sidebarRef} className="sidebar" style={{ width: `${width}px` }}>
        <h2>Sidebar</h2>
        <ul>
          <li><a href="#">Menu 1</a></li>
          <li><a href="#">Menu 2</a></li>
          <li><a href="#">Menu 3</a></li>
        </ul>
        <div ref={resizerRef} className="resizer"></div>
      </div>

      {/* Content */}
      <div className="content">
        <h2>Main Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default ResizableSidebar;
