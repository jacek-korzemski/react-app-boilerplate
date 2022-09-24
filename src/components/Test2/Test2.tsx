import Button from "src/components/Button";
import useContextMenu from "src/hooks/useContextMenu";

const Test2 = () => {
  const { setContent, setPosition } = useContextMenu();

  return (
    <>
      <Button
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          setPosition({ event });
          setContent(<>siema!</>);
        }}
      >
        Open Context Menu
      </Button>
      <Button
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          setPosition({ event });
          setContent(<>Inny content!</>);
        }}
      >
        Open Another Context Menu
      </Button>
    </>
  );
};

export default Test2;
