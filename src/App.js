import { useState } from "react";
import Container from "./lib/Container";
import Item from "./lib/Item";
import Page1 from "./Page1";
import Page2 from "./Page2";

const pages = [
  <Page1 id="Content1" stateMode="alwaysReset" />,
  <Page2 id="Content2" stateMode="alwaysReset" />,
];

export default function App() {
  const [pageToShow, setPageToShow] = useState(0);

  return (
    <Container
      id="root"
      variant="row"
      focusedElement="root"
      onUp={() => {}}
      onDown={() => {}}
      onLeft={() => {}}
      onRight={() => {}}
    >
      <Container id="LeftNav" stateMode="preserve">
        <Item id="A1" onFocus={() => setPageToShow(0)}></Item>
        <Item id="A2" onFocus={() => setPageToShow(1)}></Item>
        <Item id="A3" onFocus={() => setPageToShow(0)}></Item>
        <Item id="A4" onFocus={() => setPageToShow(1)}></Item>
        <Item id="A5" onFocus={() => setPageToShow(0)}></Item>
        <Item id="A6" onFocus={() => setPageToShow(1)}></Item>
      </Container>
      {pages[pageToShow]}
    </Container>
  );
}
