# 리액트 훅을 활용한 마이크로 상태관리

## ch1 리액트 훅을 이용한 마이크로 상태 관리

### 마이크로 상태 관리 이해하기

리액트의 가벼운 상태 관리

기본 기능: 상태 읽기, 상태 갱신,상태 기반 렌더링

추가 기능: 리렌더링 최적화, 다른 시스템과의 상호작용, 비동기 지원, 파생 상태, 간단한 문법 등..

### 리액트 훅 사용하기

- useState
- useReducer
- useEffect
  => useCount 파일 코드 참고

### 전역 상태 탐구하기

=> globalState 파일 코드 참고

### useState 사용하기

- 상태 갱신 (값, 함수)
- 지연 초기화 (lazy initialization)

=> useState 파일 코드 참고

### useReducer 사용하기

- 기본 사용법
- 베일아웃하는 방법
- 원시 값과 함께 사용하는 방법
- 지연 초기화

=> useReducer 파일 코드 참고

### useState와 useReducer의 유사점과 차이점

- useReducer에서만 reducer, init을 훅이나 컴포넌트 외부에서 정의할 수 있음.
- useReducer에서만 인라인 리듀서 함수가 외부 변수(전역변수, useRef로 생성한 값)에 의존할 수 있음.

## ch2 전역 상태에 대한 기초적인 접근법

- [react context 기본 내용](https://ko.legacy.reactjs.org/docs/context.html)

- context 전파의 한계 
: 새로운 컨텍스트 값을 받으면 모든 컨텍스트 소비자 컴포넌트가 리렌더링 된다.
이를 방지하기 위해 컴포넌트를 memo로 감싸서 방지해야 함

## ch3 라이브러리 구현 및 용도
