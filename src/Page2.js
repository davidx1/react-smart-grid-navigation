import Container from "./lib/Container";
import Item from "./lib/Item";

export default function Page2() {
  return (
    <>
      <h1>Page 2</h1>
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
    </>
  );
}
