/**
 * Generic in Type
 * - 제너릭을 타입으로 사용할 수 있다.
 * - 제너릭을 사용할 때는, 타입을 명시 및 추론할 수 없다.
 */
type GenericSimpleType<T> = T;

const simpleValue: GenericSimpleType<number> = 123; // simpleValue: number
// const simpleValue2: GenericSimpleType = 123; // Error: Type 'GenericSimpleType' requires 1 type argument(s).

interface DoneState<T> {
  data: T[];
}

interface LoadingState {
  requestedAt: Date;
}

interface ErrorState {
  error: string;
}

/**
 * State
 * - DoneState: 데이터를 가져온 상태
 * - LoadingState: 데이터를 가져오는 중
 * - ErrorState: 데이터를 가져오는 중 에러가 발생한 상태
 * - State: DoneState | LoadingState | ErrorState
 * - 제너릭을 사용하여, DoneState의 데이터 타입을 지정할 수 있다.
 */
type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
  data: ["123", "456"],
};

state = {
  requestedAt: new Date(),
};

state = {
  error: "에러 발생",
};