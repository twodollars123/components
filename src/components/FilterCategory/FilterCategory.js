import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import { useStore } from "../../store";
import styles from "./FilterCategory.module.scss";
import CardProduct from "../CardProduct/CardProduct";
import CheckboxInput from "./Checkbox";
import * as MenuApi from "../../ApiServices/MenuApi";

const cx = classNames.bind(styles);

function FilterCategoty() {
  const [state] = useStore();
  const { listProduct } = state;
  const [filterList, setFilterList] = useState(listProduct);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const brand = ["Honda", "Kawasaki", "BMW"];

  useEffect(() => {
    console.log("selectedBrand", selectedBrand);
  }, [selectedBrand]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await MenuApi.menu();
      console.log("a", result);
    };
    fetchApi();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("filter_box")}>
        <h3>Filter by brand</h3>
        <div className={cx("selected")}>
          <CheckboxInput
            data={selectedBrand}
            setData={setSelectedBrand}
            value={"All"}
            brands={brand}
          />
          {brand.map((item, index) => {
            return (
              <CheckboxInput
                data={selectedBrand}
                setData={setSelectedBrand}
                value={item}
                key={index}
              />
            );
          })}
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
