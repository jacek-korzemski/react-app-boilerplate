import styled from "styled-components";
import useModal from "src/hooks/useModal";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;
  background: rgba(0, 204, 255, 0.34);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  padding: 8px;
  border-radius: 8px;
  background: white;
  box-shadow: 1px 2px 3px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalContainer = () => {
  const { content } = useModal();

  return content ? (
    <Wrapper>
      <Box>{content}</Box>
    </Wrapper>
  ) : null;
};

export default ModalContainer;
