import React, { ReactNode } from "react";
import useSnackbar from "src/hooks/useSnackbar";
import Snackbar from "src/components/Snackbar/Snackbar";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 102;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
`;

export type MessageProperties = {
  type: string;
  content: string | ReactNode;
  closeHandler: (id: string) => void;
  id: string;
};

const SnackbarContainer = () => {
  const { alerts } = useSnackbar();

  return alerts && alerts.length > 0 ? (
    <Wrapper>
      {alerts?.map((elem) => (
        <React.Fragment key={elem.id}>
          <Snackbar
            id={elem.id}
            type="success"
            closeHandler={elem.closeHandler}
            content={elem.content}
          />
        </React.Fragment>
      ))}
    </Wrapper>
  ) : null;
};

export default SnackbarContainer;
