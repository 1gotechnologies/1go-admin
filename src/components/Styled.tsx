import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  outline: none;
  border: none;
  padding: 0.25rem;
`;

const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 3px solid #d9d9d9;
  background: inherit;
  width: 100%;
  padding: 0.5rem;
`;

const SLink = styled(NavLink)`
  padding: 0.75rem auto;
  color: rgb(107 114 128);
  font-weight: 400;
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;

  &:hover {
    color: rgb(17 24 39);
  }

  &.active {
    color: rgb(29 78 216);
    font-weight: 600;
  }
`;
export { Btn, Input, SLink };
