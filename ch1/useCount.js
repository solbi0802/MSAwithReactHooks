import useState, { useEffect } from "react";

const Component = () => {
  const [count, setCount] = useCount();
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  );
};

const useCount = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);

  useEffect(() => {
    console.log("count is  changed to", count);
  }, [count]);

  return [count, inc];
};

export default Component;
