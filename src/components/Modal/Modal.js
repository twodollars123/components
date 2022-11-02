import Select from "react-select";
import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import { useStore } from "../../store";

const cx = classNames.bind(styles);

function Modal({ setOpenModal }) {
  const [state] = useStore();
  const [selectedOptions, setSelectedOptions] = useState();
  const { selectedColorOptions } = state;

  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className={cx("modal__wrapper")}>
      <div className={cx("modal")}>
        <div className={cx("header_modal")}>
          <h3 className={cx("title_header__modal")}>Modal</h3>
          <span className={cx("close_btn")} onClick={() => setOpenModal(false)}>
            <i className="fa fa-close" />
          </span>
        </div>
        <div className={cx("content_modal")}>
          <Select
            options={selectedColorOptions}
            placeholder="Select color"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
        </div>
        <div className={cx("action_modal")}>
          <Button primary>Confirm</Button>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
