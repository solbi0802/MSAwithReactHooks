// 기본 사용법
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_TEXT":
      return { ...state, text: action.text };
    default:
      throw new Error("unknown action type");
  }
};

const Component = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: "hi" });
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment count
      </button>
      <input
        value={state.text}
        onChange={(e) => dispatch({ type: "SET_TEXT", text: e.target.value })}
      />
    </div>
  );
};

// 베일아웃
const reducer2 = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_TEXT":
      if (!action.text) {
        // 베일아웃
        return state;
      }
      return { ...state, text: action.text };
    default:
      throw new Error("unknown action type");
  }
};

// 원시값
const reducer3 = (count, delta) => {
  if (delta < 0) {
    throw new Error("delta cannot be negative");
  }
  if (delta > 10) {
    // too big, just ignore
    return count;
  }
  if (count < 100) {
    // add bonus
    return count + delta + 10;
  }
  return count + delta;
};

// 지연 초기화

const init = (count) => ({ count, text: "hi" });

const reducer4 = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_TEXT":
      return { ...state, text: action.text };
    default:
      throw new Error("unknown action type");
  }
};

const Component4 = () => {
  const [state, dispatch] = useReducer(reducer, 0, init);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment count
      </button>
      <input
        value={state.text}
        onChange={(e) => dispatch({ type: "SET_TEXT", text: e.target.value })}
      />
    </div>
  );
};
