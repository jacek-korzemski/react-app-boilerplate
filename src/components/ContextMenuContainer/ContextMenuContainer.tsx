import ContextMenu from "src/components/ContextMenu";
import useContextMenu from "src/hooks/useContextMenu";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 103;
`;

const ContextMenuContainer = () => {
  const { content, contentPosition } = useContextMenu();

  return content ? (
    <Wrapper
      style={{
        top: contentPosition.y + "px",
        left: contentPosition.x + "px",
        zIndex: contentPosition.z || 100,
      }}
    >
      <ContextMenu>{content}</ContextMenu>
    </Wrapper>
  ) : null;
};

export default ContextMenuContainer;
