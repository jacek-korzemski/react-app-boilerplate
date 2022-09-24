import { ReactNode, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Box = styled.div`
  width: 300px;
  padding: 8px 8px 11px 8px;
  border-radius: 8px;
  background: rgba(0, 99, 164, 1);
  color: white;
  box-shadow: 1px 2px 3px black;
  position: relative;
  overflow: hidden;
  &.success {
    background: green;
  }
  &.warning {
    background: orange;
  }
  &.error {
    background: maroon;
  }
`;

const loading = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0;
  }
`;

const Bar = styled.div<{ duration?: number }>`
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: 8px;
  animation: ${loading}
    ${({ duration }) => (duration ? duration * 0.001 + "s" : "5s")} linear;
`;

type SnackbarProperties = {
  id: string;
  type: string;
  content: string | ReactNode;
  closeHandler: (id: string) => void;
  closeTimeout?: number;
};

const Snackbar = ({
  id,
  type,
  content,
  closeHandler,
  closeTimeout = 5000,
}: SnackbarProperties) => {
  useEffect(() => {
    setTimeout(() => {
      closeHandler(id);
    }, closeTimeout);
  }, []);

  return (
    <Box className={type}>
      {content}
      <Bar duration={closeTimeout} />
    </Box>
  );
};

export default Snackbar;
