import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";
import Button from "../../Button/Button";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button text leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
