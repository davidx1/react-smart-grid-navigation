import Container from "./lib/Container";
import Item from "./lib/Item";

export default function Page2(props) {
  return (
    <Container {...props}>
      <Container id="Content Row 1">
        <Item id="B1"></Item>
        <Item id="B2"></Item>
        <Item id="B3"></Item>
        <Item id="B4"></Item>
        <Item id="B5"></Item>
        <Item id="B6"></Item>
        <Item id="B7"></Item>
      </Container>
      <Container id="Content Row 2">
        <Item id="C1" wide></Item>
        <Item id="C2" wide></Item>
        <Item id="C3" wide></Item>
        <Item id="C4" wide></Item>
      </Container>
      <Container id="Content Row 3">
        <Container id="R3C1">
          <Item id="D1"></Item>
          <Item id="D2"></Item>
          <Item id="D3"></Item>
          <Item id="D4"></Item>
        </Container>
        <Container id="R3C2">
          <Item id="E1" tall></Item>
          <Item id="E2" tall></Item>
        </Container>
        <Container id="R3C3">
          <Item id="F1"></Item>
          <Item id="F2"></Item>
          <Item id="F3"></Item>
          <Item id="F4"></Item>
        </Container>
        <Container id="R3C4">
          <Item id="G1"></Item>
          <Item id="G2" tall></Item>
          <Item id="G3"></Item>
        </Container>
      </Container>
    </Container>
  );
}
