import styled from "styled-components";
import { getAutomaticTypeDirectiveNames } from "typescript";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: var(--color-footer);
  border-top: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
`;

export const Wrapper = styled.div`
max-width: 1220px;
margin: 0 auto;
padding: 0 16px;
`;
 

