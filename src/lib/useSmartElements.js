import { useState, useEffect, Children } from "react";

export const useSmartElements = ({ children }) => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    setElements(Children.map(children, (child) => child.props.id));
  }, [children]);
  return { elements };
};
