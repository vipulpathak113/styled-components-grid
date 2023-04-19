import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
`;

const DivBorder = styled.div`
  border: 1px solid black;
  text-align: center;
`;

export default function Grid() {
  return (
    <div>
      <h2>Grid</h2>
      <GridWrapper>
        <DivBorder>1</DivBorder>
        <DivBorder>2</DivBorder>
        <DivBorder>3</DivBorder>
        <DivBorder>4</DivBorder>
        <DivBorder>5</DivBorder>
        <DivBorder>6</DivBorder>
        <DivBorder>7</DivBorder>
        <DivBorder>8</DivBorder>
        <DivBorder>9</DivBorder>
      </GridWrapper>
    </div>
  );
}
