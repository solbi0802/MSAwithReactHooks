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

### Zustand

- 라이브러리의 단순성, 번들 크기가 작다는 이점이 있음
- selector를 이용한 수동 렌더링 최적화 사용
- selector 코드를 위한 보일러플레이트 코드를 많이 작성해야 하는 단점 존재
- 작은 번들 크기를 가진 라이브러리가 필요하거나 참조 동등성 및 메모이제이션에 익숙하거나 수동 렌더링 최적화를 선호하는 경우에 추천

### Jotai

- 아톰 모델과 컨텍스트 기반 라이브러리
- 구문 단순성, 동적 아톰 생성의 이점이 있음
- 불필요한 리렌더링 없이 컨텍스트가 필요한 경우 사용

### Valtio

- proxy 기반의 렌더링 최적화
- 예측 가능성이 떨어진다는 단점이 있음.

### React Tracked

- 속성 감지 기반으로 자동으로 렌더링 최적화를 수행하는 상태 사용 추적 라이브러리
- 불필요한 리렌더링 제거 기능 제공
- proxy-compare, use-context-selector 라이브러리에 의존

### 세 가지(Zustand, Jotai, Valtio) 전역 상태 라이브러리의 유사점과 차이점
- ZuStand는 Redux와 사용법, 스토어 모델 측면에서 유사하지만 Redux와 달리 리듀서를 기반으로 하지  않음
- Jotai는 API측면에서 Recoil과 유사하지만 선택자 기반이 아니고 렌더링 최적화를 위한 최소한의 API 제공이 목표
- Valtio는 변경 가능한 갱신 모델 측면에서 MobX와 조금 유사하지만 렌더링 최적화 구현 방식이 매우 다름
- ZuStand,Redux 비교 
  - 디렉토리 구조: Redux는 features 디렉토리 구조 제안, Zustand는 개발자가 알아서 하도록
  - 스토어 생성: Reudx는 Immer를 기본적으로 사용, Zustand는 Immer는 선택사항
  - 상태 전파 측면: Reudx는 컨텍스트 사용, Zustand는 모듈 임포트 사용
  - Redux는 단방향 데이터 흐름을 기반으로 상태 갱신 시 액션을 디스패치해야 함(Redux Toolkit), Zustand는 데이터 흐름에 대한 의견을 제시하지 않으며 개발자가 모든 것을 처리해야 함.

- Jotai와 Recoil 비교
  - key 문자열의 존재: Jotai는 key 문자열 생략 가능, Recoil은 객체 참조에 의존하지 않는 key 문자열 기반으로 직렬화가 가능하다
  - atom 함수: Jotail의 atom 함수는 Recoil의 atom과 selector를 모두 대체한다. 하지만 모든 것을 표현 하는 것이 불가능하고 Jotai의 다른 함수가 필요할 수도 있다는 단점 존재
  - Jotai의 공급자 제거 모드(provider-less mode)는 Provider 컴포넌트를 생략할 수 있게 해주는 기능으로 개발자 친화적인 기능이다.

- Valtio와 Mobx 사용하기
  - 갱신 방식: Mobx는 클래스 기반, Valtio는 특정 스타일을 강요하지 않음
  - 렌더링 최적화 방식: Valtio는 훅을 사용, Mobx는 옵저버 방식 사용
- Zustand, Jotai, Valtio 비교
  - 상태가 어디에 위치하는 지? 리액트에는 상태에 대한 방식으로 모듈상태, 컴포넌트 상태가 있다. Zustand, Valtio는 모듈 상태 기반, Jotai는 컴포넌트 상태 기반
  - 상태 갱신 스타일?  Zustand는 불변 상태 모델(객체 생성 후 변경x) 기반, Valtio는 변경 가능한 상태 모델 기반, 
