import classNames from "classnames/bind";
import styles from "./FilterCategory.module.scss";
import { useStore } from "../../store";
import CardProduct from "../CardProduct/CardProduct";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function FilterCategoty() {
  const [state] = useStore();
  const { listProduct } = state;
  const [filterList, setFilterList] = useState(listProduct);
  const [selectedBrand, setSelectedBrand] = useState("All");
  console.log(filterList);

  const handleChecked = (e) => {
    if (!e.target.checked) {
      setSelectedBrand("");
    } else {
      setSelectedBrand(e.target.value);
    }
    if (selectedBrand) {
      setFilterList(filterList.filter((item) => item.brand === selectedBrand));
    }
  };

  useEffect(() => {
    if (selectedBrand === "All") {
      setFilterList(listProduct);
    } else if (selectedBrand === "") {
      setFilterList("");
    } else {
      let newlist = listProduct.filter((item) => item.brand === selectedBrand);
      setFilterList(newlist);
    }
  }, [selectedBrand]);
  console.log(selectedBrand);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("filter_box")}>
        <h3>Filter by brand</h3>
        <div className={cx("selected")}>
          <div className={cx("checkbox_item")}>
            <label> All</label>
            <input type="checkbox" value="All" onChange={handleChecked} />
          </div>
          <div className={cx("checkbox_item")}>
            <label> BMW</label>
            <input type="checkbox" value="BMW" onChange={handleChecked} />
          </div>
          <div className={cx("checkbox_item")}>
            <label> Honda</label>
            <input type="checkbox" value="Honda" onChange={handleChecked} />
          </div>
          <div className={cx("checkbox_item")}>
            <label> Kawasaki</label>
            <input type="checkbox" value="Kawasaki" onChange={handleChecked} />
          </div>
          <div className={cx("checkbox_item")}>
            <label> YAMAHA</label>
            <input type="checkbox" value="YAMAHA" onChange={handleChecked} />
          </div>
        </div>
      </div>
      <div className={cx("list_product")}>
        {filterList && filterList.length > 0 ? (
          filterList.map((item, index) => (
            <CardProduct data={item} key={index} />
          ))
        ) : (
          <p>Không tồn tại sản phẩm</p>
        )}
      </div>
    </div>
  );
}

export default FilterCategoty;
