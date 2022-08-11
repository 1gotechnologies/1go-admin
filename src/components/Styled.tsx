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
    &a:active {
      color: rgb(29 78 216);
      font-weight: 600;
    }
  }
`;

const DCard = styled.div`
  border-radius: 0.5rem;
  border: #acaaaa;
  padding: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2);
`;

const OverlayShade = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
export { Btn, Input, SLink, DCard, OverlayShade };
