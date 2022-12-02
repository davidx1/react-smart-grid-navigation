import Container from "./lib/Container";
import Item from "./lib/Item";

export default function Page1() {
  return (
    <>
      <h1>Page 1</h1>
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
    </>
  );
}
