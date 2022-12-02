import React, { useContext, useEffect, useState } from "react";
import { SmartContext } from "./smartContext";
import { useSmartElements } from "./useSmartElements";

export default function Container({ children, id, alwaysReset }) {
  const {
    variant,
    focusedElement,
    registerEl,
    unregisterEl,
    onUp,
    onDown,
    onLeft,
    onRight
  } = useContext(SmartContext);

  const {
    elements: childElements,
    registerEl: registerChild,
    unregisterEl: unregisterChild
  } = useSmartElements({
    registerSelf: registerEl,
    unregisterSelf: unregisterEl,
    selfId: id
  });

  const isFocused = focusedElement === id;

  const [focusedChild, setFocusedChild] = useState(null);

  useEffect(() => {
    if (!focusedChild) {
      setFocusedChild(childElements[0]);
      const el = document.getElementById(childElements[0]);
      if (isFocused && el?.hasAttributes("custom-focusable")) {
        el.focus();
      }
    } else {
      const el = document.getElementById(focusedChild);
      if (isFocused && el?.hasAttributes("custom-focusable")) {
        el.focus();
      }
    }
  }, [childElements, focusedChild, isFocused]);

  const onNextItem = () => {
    const curIndex = childElements.findIndex((el) => el === focusedChild);
    const nextIndex = curIndex + 1;
    if (nextIndex < childElements.length) {
      const nextItemId = childElements[nextIndex];
      setFocusedChild(nextItemId);
      const nextItem = document.getElementById(nextItemId);
      if (nextItem?.hasAttributes("custom-focusable")) {
        nextItem.focus();
      }
    } else if (variant === "row") {
      onRight();
    } else {
      onDown();
    }
  };

  const onPrevItem = () => {
    const curIndex = childElements.findIndex((el) => el === focusedChild);
    const prevIndex = curIndex - 1;
    if (prevIndex >= 0) {
      const prevItemId = childElements[prevIndex];
      setFocusedChild(prevItemId);
      const prevItem = document.getElementById(prevItemId);
      if (prevItem?.hasAttributes("custom-focusable")) {
        prevItem.focus();
      }
    } else if (variant === "row") {
      onLeft();
    } else {
      onUp();
    }
  };

  const [onChildUp, onChildDown, onChildLeft, onChildRight] =
    variant === "row"
      ? [onUp, onDown, onPrevItem, onNextItem]
      : [onPrevItem, onNextItem, onLeft, onRight];

  return (
    <SmartContext.Provider
      value={{
        variant: variant === "row" ? "column" : "row",
        focusedElement: isFocused ? focusedChild : null,
        registerEl: registerChild,
        unregisterEl: unregisterChild,
        onUp: onChildUp,
        onDown: onChildDown,
        onLeft: onChildLeft,
        onRight: onChildRight
      }}
    >
      <div
        style={{
          padding: "8px",
          margin: "8px",
          display: "flex",
          border: "1px solid black",
          flexDirection: variant,
          backgroundColor: isFocused ? "#11111133" : "transparent"
        }}
        tabIndex={0}
      >
        {children}
      </div>
    </SmartContext.Provider>
  );
}
