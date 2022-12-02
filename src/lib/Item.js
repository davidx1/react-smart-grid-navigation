import { useContext } from "react";
import { SmartContext } from "./smartContext";
import { useSmartElements } from "./useSmartElements";

export default function Item({ id, onFocus }) {
  const {
    focusedElement,
    registerEl,
    unregisterEl,
    onUp,
    onDown,
    onLeft,
    onRight
  } = useContext(SmartContext);

  useSmartElements({
    registerSelf: registerEl,
    unregisterSelf: unregisterEl,
    selfId: id
  });

  const isFocused = focusedElement === id;

  const handleArrowInput = (e) => {
    switch (e.code) {
      case "ArrowUp":
        onUp();
        break;
      case "ArrowDown":
        onDown();
        break;
      case "ArrowLeft":
        onLeft();
        break;
      case "ArrowRight":
        onRight();
        break;
      case "Escape":
      default:
        break;
    }
  };

  return (
    <div
      id={id}
      custom-focusable="true"
      onKeyDown={handleArrowInput}
      tabIndex={0}
      onFocus={onFocus}
      style={{
        backgroundColor: isFocused ? "red" : "blue",
        border: "1px solid black",
        height: "150px",
        width: "150px",
        margin: "8px"
      }}
    ></div>
  );
}
