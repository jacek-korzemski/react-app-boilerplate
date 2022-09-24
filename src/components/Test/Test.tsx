import { createRef } from "react";
import Button from "src/components/Button";
import useModal from "src/hooks/useModal";
import useSnackbar from "src/hooks/useSnackbar";

const Test = () => {
  const { setContent } = useModal();
  const { addAlert } = useSnackbar();

  return (
    <>
      <Button
        onClick={() => {
          setContent(
            <div>
              <h1>siemano!</h1>
              <Button
                onClick={() => {
                  setContent(null);
                }}
              >
                Zamknij
              </Button>
            </div>
          );
        }}
      >
        Dodaj modal
      </Button>
      <Button
        onClick={() => {
          addAlert({
            type: "success",
            content: "Siemano!",
          });
        }}
      >
        Dodaj Snackbar
      </Button>
      <hr />
    </>
  );
};

export default Test;
