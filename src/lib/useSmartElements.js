import { useState, useEffect } from "react";

export const useSmartElements = ({ registerSelf, unregisterSelf, selfId }) => {
  useEffect(() => {
    registerSelf(selfId);
    return () => unregisterSelf(selfId);
  }, []);
  const [elements, setElements] = useState([]);
  const registerEl = (newElement) => setElements((els) => [...els, newElement]);
  const unregisterEl = (elToRemove) =>
    setElements((els) => els.filter((e) => e !== elToRemove));
  return { elements, registerEl, unregisterEl };
};
