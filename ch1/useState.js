/*
[값으로 상태 갱신]
 버튼 두번이상 클릭시 '베일아웃'되서 컴포넌트 리렌더링 x
*/
const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(1)}>Set Count to 1 </button>
    </div>
  );
};

/*
[함수로 상태 갱신]
 갱신함수가 이전 상태와 동일한 상태 반환시 '베일아웃' 발생하고 컴포넌트 리렌더링 x
*/
const Component2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}> Increment Count </button>
    </div>
  );
};

/*
[지연 초기화]
init 함수는 컴포넌트 마운트될 때 한번만 호출됨
*/
const init = () => 0;

const Component3 = () => {
  const [count, setCount] = useState(init);

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}> Increment Count </button>
    </div>
  );
};
