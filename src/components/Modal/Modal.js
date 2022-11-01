import classNames from "classnames/bind";
import Button from "../Button/Button";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function Modal({ setOpenModal }) {
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
          <p>abc</p>
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
