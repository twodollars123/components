import { useState } from "react";

import { useStore, actions } from "../../store";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem/MenuItem";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function Menu() {
  const [state, dispatch] = useStore();
  const menuItems = state.menuItems;

  const [history, setHistory] = useState([{ data: menuItems }]);
  const currentListItems = history[history.length - 1];
  console.log("currentListItems", currentListItems);

  const renderItem = () => {
    return currentListItems.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              //   onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <div className={cx("wrapper")}>
      {history.length > 1 && (
        <Button
          text
          leftIcon={<i className="fa fa-reply" />}
          onClick={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
        >
          {currentListItems.title}
        </Button>
      )}
      {renderItem()}
    </div>
  );
}

export default Menu;
