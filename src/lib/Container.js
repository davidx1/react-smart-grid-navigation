import React, {
  useEffect,
  useState,
  Children,
  cloneElement,
  useRef,
} from "react";
import { useSmartElements } from "./useSmartElements";

export default function Container({
  prevBound,
  children,
  id,
  variant,
  focusedElement,
  onUp,
  onDown,
  onLeft,
  onRight,
  stateMode = "geometric",
}) {
  const { elements: childElements } = useSmartElements({
    children,
  });

  const isFocused = focusedElement === id;
  const [focusedChild, setFocusedChild] = useState(null);
  const [localPrevBound, setLocalPrevBound] = useState(null);

  const prevIsFocused = useRef();
  useEffect(() => {
    if (prevIsFocused !== isFocused && isFocused) {
      setLocalPrevBound(prevBound);
      let childToFocus = focusedChild;
      if (!childToFocus) {
        childToFocus = childElements[0];
      }
      if (stateMode === "alwaysReset") {
        childToFocus = childElements[0];
      }
      if (stateMode === "geometric" && prevBound) {
        childToFocus = childElements.reduce(
          (acc, cur) => {
            const { x, y } = prevBound;
            const { x: thisX, y: thisY } = document
              .getElementById(cur)
              .getBoundingClientRect();
            const newDiff = Math.abs(x - thisX) + Math.abs(y - thisY);
            return newDiff < acc[1] ? [cur, newDiff] : acc;
          },
          [null, Infinity]
        )[0];
      }
      setFocusedChild(childToFocus);
      const el = document.getElementById(childToFocus);
      if (el?.hasAttributes("custom-focusable")) {
        el.focus();
      }
    }
    prevIsFocused.current = isFocused;
  }, [isFocused, stateMode]);

  const onNextItem = (bound) => {
    setLocalPrevBound((pre) => (stateMode === "preserve" ? null : bound));
    const curIndex = childElements.findIndex((el) => el === focusedChild);
    const nextIndex = curIndex + 1;
    if (nextIndex < childElements.length) {
      const nextItemId = childElements[nextIndex];
      setFocusedChild((pre) => nextItemId);
      const nextItem = document.getElementById(nextItemId);
      if (nextItem?.hasAttributes("custom-focusable")) {
        nextItem.focus();
      }
    } else if (variant === "row") {
      onRight(stateMode === "preserve" ? null : bound);
    } else {
      onDown(stateMode === "preserve" ? null : bound);
    }
  };

  const onPrevItem = (bound) => {
    setLocalPrevBound((pre) => (stateMode === "preserve" ? null : bound));
    const curIndex = childElements.findIndex((el) => el === focusedChild);
    const prevIndex = curIndex - 1;
    if (prevIndex >= 0) {
      const prevItemId = childElements[prevIndex];
      setFocusedChild((pre) => prevItemId);
      const prevItem = document.getElementById(prevItemId);
      if (prevItem?.hasAttributes("custom-focusable")) {
        prevItem.focus();
      }
    } else if (variant === "row") {
      onLeft(stateMode === "preserve" ? null : bound);
    } else {
      onUp(stateMode === "preserve" ? null : bound);
    }
  };

  const [onChildUp, onChildDown, onChildLeft, onChildRight] =
    variant === "row"
      ? [onUp, onDown, onPrevItem, onNextItem]
      : [onPrevItem, onNextItem, onLeft, onRight];

  return (
    <div
      id={id}
      style={{
        padding: "8px",
        margin: "8px",
        display: "flex",
        border: "1px solid black",
        flexDirection: variant,
        backgroundColor: isFocused ? "#11111133" : "transparent",
      }}
    >
      {Children.map(children, (child) =>
        cloneElement(child, {
          prevBound: localPrevBound,
          variant: variant === "row" ? "column" : "row",
          focusedElement:
            isFocused || stateMode === "preserve" ? focusedChild : null,
          onUp: onChildUp,
          onDown: onChildDown,
          onLeft: onChildLeft,
          onRight: onChildRight,
        })
      )}
    </div>
  );
}
