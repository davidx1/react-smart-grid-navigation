import Container from "./lib/Container";
import Item from "./lib/Item";
import { SmartContext } from "./lib/smartContext";

export default function App() {
  return (
    <SmartContext.Provider
      value={{
        variant: "row",
        focusedElement: "root",
        registerEl: () => {},
        unregisterEl: () => {},
        onUp: () => {},
        onDown: () => {},
        onLeft: () => {},
        onRight: () => {}
      }}
    >
      <Container id="root">
        <Container id="LeftNav">
          <Item id="A1"></Item>
          <Item id="A2"></Item>
          <Item id="A3"></Item>
          <Item id="A4"></Item>
          <Item id="A5"></Item>
          <Item id="A6"></Item>
        </Container>
        <Container id="Content">
          <Container id="Content Row 1">
            <Item id="B1"></Item>
            <Item id="B2"></Item>
            <Item id="B3"></Item>
            <Item id="B4"></Item>
            <Item id="B5"></Item>
            <Item id="B6"></Item>
          </Container>
          <Container id="Content Row 2">
            <Item id="C1"></Item>
            <Item id="C2"></Item>
            <Item id="C3"></Item>
            <Item id="C4"></Item>
          </Container>
          <Container id="Content Row 3">
            <Container id="R3C1">
              <Item id="D1"></Item>
              <Item id="D2"></Item>
              <Item id="D3"></Item>
              <Item id="D4"></Item>
            </Container>
            <Container id="R3C2">
              <Item id="E1"></Item>
              <Item id="E2"></Item>
              <Item id="E3"></Item>
              <Item id="E4"></Item>
            </Container>
          </Container>
        </Container>
      </Container>
    </SmartContext.Provider>
  );
}
