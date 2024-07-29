const CountStateContext = createContext({
  count: 0,
  setCount: () => {},
});

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <CountStateContext.Provider value={{ count, setCount }}>
      <Parent />
    </CountStateContext.Provider>
  );
};

const Parent = () => {
  <>
    <Component1 />
    <Component2 />
  </>;
};
