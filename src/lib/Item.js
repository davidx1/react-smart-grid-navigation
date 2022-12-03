import { useRef } from "react";

export default function Item({
  wide,
  tall,
  id,
  onFocus,
  focusedElement,
  onUp,
  onDown,
  onLeft,
  onRight,
}) {
  const ref = useRef();
  const isFocused = focusedElement === id;

  const handleArrowInput = (e) => {
    e.preventDefault();
    const bound = ref.current.getBoundingClientRect();
    switch (e.code) {
      case "ArrowUp":
        onUp(bound);
        break;
      case "ArrowDown":
        onDown(bound);
        break;
      case "ArrowLeft":
        onLeft(bound);
        break;
      case "ArrowRight":
        onRight(bound);
        break;
      case "Escape":
      default:
        break;
    }
  };

  return (
    <div
      ref={ref}
      id={id}
      custom-focusable="true"
      onKeyDown={handleArrowInput}
      tabIndex={0}
      onFocus={onFocus}
      style={{
        backgroundColor: isFocused ? "lightblue" : "blue",
        transition: "background-color 0.2s ease",
        border: "1px solid black",
        height: tall ? "170px" : "80px",
        width: wide ? "100px" : "50px",
        margin: "8px",
      }}
    ></div>
  );
}
