import create from "zustand";

type StoreState = {
  count1: number;
  count2: number;
  inc1: () => void;
  inc2: () => void;
  dec1: () => void;
  dec2: () => void;
};

const useStore = create<StoreState>((set) => ({
  count1: 0,
  count2: 0,
  inc1: () => set((prev) => ({ count1: prev.count1 + 1 })),
  inc2: () => set((prev) => ({ count2: prev.count2 + 1 })),
  dec1: () => set((prev) => ({ count1: prev.count1 - 1 })),
  dec2: () => set((prev) => ({ count2: prev.count2 - 1 })),
}));

const selectCount1 = (state: StoreState) => state.count1;
const selectInc1 = (state: StoreState) => state.inc1;
const selectDec1 = (state: StoreState) => state.dec1;

const Counter1 = () => {
  const count1 = useStore(selectCount1);
  const inc1 = useStore(selectInc1);
  const dec1 = useStore(selectDec1);

  return (
    <div>
      count1: {count1}
      <button onClick={inc1}>+1</button>
      <button onClick={dec1}>-1</button>
    </div>
  );
};

const selectCount2 = (state: StoreState) => state.count2;
const selectInc2 = (state: StoreState) => state.inc2;
const selectDec2 = (state: StoreState) => state.dec2;

const Counter2 = () => {
  const count2 = useStore(selectCount2);
  const inc2 = useStore(selectInc2);
  const dec2 = useStore(selectDec2);

  return (
    <div>
      count2: {count2}
      <button onClick={inc2}>+1</button>
      <button onClick={dec2}>-1</button>
    </div>
  );
};

const selectTotal = (state: StoreState) => state.count1 + state.count2;

const Total = () => {
  const total = useStore(selectTotal);
  return <div>total: {total}</div>;
};

const App = () => (
  <>
    <Counter1 />
    <Counter2 />
    <Total />
  </>
);

export default App;
