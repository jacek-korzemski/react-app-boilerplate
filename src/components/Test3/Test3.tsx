import Button from "src/components/Button";
import useModal from "src/hooks/useModal";
import useContextMenu from "src/hooks/useContextMenu";
import useSnackbar from "src/hooks/useSnackbar";

const ContextMenu = () => {
  const { addAlert } = useSnackbar();

  return (
    <span
      onClick={() => {
        addAlert({ type: "success", content: "Everything works fine!" });
      }}
    >
      Click me!
    </span>
  );
};

const Modal = () => {
  const { setContent } = useModal();
  const { setContent: setContextMenuContent, setPosition } = useContextMenu();

  return (
    <>
      <Button
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          setPosition({ event, zIndex: 106 });
          setContextMenuContent(<ContextMenu />);
        }}
      >
        Context Menu
      </Button>
      <Button
        onClick={() => {
          setContent(null);
        }}
      >
        Close
      </Button>
    </>
  );
};

const Test3 = () => {
  const { setContent } = useModal();

  return (
    <>
      <Button
        onClick={() => {
          setContent(<Modal />);
        }}
      >
        Add modal with context menu!
      </Button>
    </>
  );
};

export default Test3;
