import AppWrapper from "src/components/AppWrapper";
import ContextMenuContainer from "src/components/ContextMenuContainer";
import ModalContainer from "src/components/ModalContainer";
import SnackbarContainer from "src/components/SnackbarContainer";
import Test from "src/components/Test";
import Test2 from "src/components/Test2";
import Test3 from "src/components/Test3";
import { ContextMenuContextProvider } from "src/contexts/ContextMenuContext";
import { ModalContextProvider } from "src/contexts/ModalContext";
import { SnackbarContextProvider } from "src/contexts/SnackbarContext";
import Container from "src/layouts/Container";

function App() {
  return (
    <AppWrapper>
      <ModalContextProvider>
        <SnackbarContextProvider>
          <ContextMenuContextProvider>
            <ModalContainer />
            <SnackbarContainer />
            <Container>
              <Test />
              <hr />
              <Test2 />
              <hr />
              <Test3 />
            </Container>
            <ContextMenuContainer />
          </ContextMenuContextProvider>
        </SnackbarContextProvider>
      </ModalContextProvider>
    </AppWrapper>
  );
}

export default App;
