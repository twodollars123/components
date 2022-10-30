import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState } from "react";

import "./App.scss";
import Button from "./components/Button/Button";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Menu from "./components/Menu/Menu";

function App() {
  const [show, setShow] = useState(false);
  const hide = () => {
    setShow(false);
  };
  return (
    <div className="App">
      <Tippy
        interactive
        visible={show}
        onClickOutside={hide}
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            <Wrapper>
              <Menu />
            </Wrapper>
          </div>
        )}
      >
        <div className="action">
          <Button
            primary
            rightIcon={<i className="fa fa-address-book" />}
            onClick={() => setShow(!show)}
          >
            abc
          </Button>
        </div>
      </Tippy>
    </div>
  );
}

export default App;
