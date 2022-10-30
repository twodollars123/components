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
