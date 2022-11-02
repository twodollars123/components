// const initState = { todos: [], todo: "" };

const initState = {
  menuItems: [
    {
      icon: <i className="fa fa-language" />,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            code: "en",
            title: "Tiếng anh",
          },
          {
            code: "vi",
            title: "Tiếng Việt",
          },
        ],
      },
    },
    {
      icon: <i className="fa fa-question-circle-o" />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <i className="fa fa-keyboard-o" />,
      title: "Keyboard shortcuts",
    },
  ],
  selectedColorOptions: [
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
    { value: "Green", label: "Green" },
    { value: "Purple", label: "Purple" },
    { value: "Oringe", label: "Oringe" },
    { value: "Pink", label: "Pink" },
  ],
  listProduct: [
    {
      name: "Gold Wing Automatic DCT",
      urlImg:
        "https://powersports.honda.com/motorcycle/touring/-/media/products/family/gold-wing/trims/trim-main/gold-wing-automatic-dct/2023/2023-gold-wing-automatic-dct-matte_gray-650x380.png",
      color: "Matte Gray",
      brand: "Honda",
      version: "base",
      price: 25600,
    },
    {
      name: "Rebel 1100",
      urlImg:
        "https://powersports.honda.com/motorcycle/cruiser/-/media/products/family/rebel-1100/trims/trim-main/rebel-1100/2022/2022-rebel-1100-pearl_stallion_brown-650x380.png",
      color: "Matte Gray",
      brand: "Honda",
      version: "base MSRP",
      price: 9399,
    },
    {
      name: "CBR1000RR-R Fireblade Sp",
      urlImg:
        "https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr-r-fireblade-sp/trims/trim-main/cbr1000rr-r-fireblade-sp/2022/2022-cbr1000rr-r-fireblade-sp-pearl_white-650x380.png",
      color: "Pearl White",
      brand: "Honda",
      version: "base MSRP",
      price: 28900,
    },
    {
      name: "CBR1000RR ",
      urlImg:
        "https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr/trims/trim-main/cbr1000rr/2022/2022-cbr1000rr-grand_prix_red-650x380.png",
      color: "Grand Prix Red",
      brand: "Honda",
      version: "base MSRP",
      price: 16499,
    },
    {
      name: "YZF-R1 edition",
      urlImg:
        "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2022/77a412bd-a2b5-438c-85ae-cc4b78bed8c2.png",
      color: "Grand Prix Red",
      brand: "YAMAHA",
      version: "base MSRP",
      price: 18099,
    },
    {
      name: "R1M 2023",
      urlImg:
        "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2023/3f8469b3-5cd7-4e22-9002-aa052bed074c.png",
      color: "Original",
      brand: "YAMAHA",
      version: "base MSRP",
      price: 26999,
    },
    {
      name: "Ninja H2 Carbon 2021",
      urlImg:
        "https://content2.kawasaki.com/ContentStorage/KMV/Products/4878/1b6b439e-ed64-4226-9248-aa557de00692.png",
      color: "Original",
      brand: "Kawasaki",
      version: "base MSRP",
      price: 55999,
    },
    {
      name: "Ninja ZX10R 2021",
      urlImg:
        "https://content2.kawasaki.com/ContentStorage/KMV/Products/4901/9cf76b4e-f2af-4cf8-80f2-3a022fe30cfb.jpg",
      color: "Original",
      brand: "Kawasaki",
      version: "ABS",
      price: 30999,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    // case SET_TODO_INPUT:
    //   return {
    //     ...state,
    //     todo: action.payload,
    //   };

    default:
      throw new Error("Invalid actions");
  }
}

export { initState };
export default reducer;
