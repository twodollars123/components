import classNames from "classnames/bind";
import styles from "./CardProduct.module.scss";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function CardProduct({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top_card")}>
        <img src={`${data.urlImg}`} alt="" />
        <span className={cx("btn_more")}>
          <i className="fa fa-ellipsis-v" />
        </span>
      </div>
      <div className={cx("content_card")}>
        <div className={cx("primary_title")}>
          <h5>{data.name}</h5>
        </div>
        <div className={cx("support_text")}>
          <p>Color: {data.color}</p>
          <p>
            {data.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
        <div className="action_card">
          <Button>Chat</Button>
          <Button primary>Add Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
