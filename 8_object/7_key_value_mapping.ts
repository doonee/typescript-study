/**
 * Key-Value Mapping in TypeScript
 * - 키-값 매핑은 객체의 속성을 정의하는 데 사용됩니다.
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
};

type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginateUsers: GlobalApiStatus["paginateUsers"];
  banUser: GlobalApiStatus["banUser"];
};

/** 필요한 속성들 가져오기 */
type UserApiStatus3 = {
  [key in "getUser" | "paginateUsers" | "banUser"]: GlobalApiStatus[key];
};

/** Pick: 필요한 속성들 가져오기 */
type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "paginateUsers" | "banUser"
>;

/** Omit: 제외할 속성만 지정하기 */
type OmittedUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/** typeof
 * - 객체의 속성을 가져올 수 있습니다.
 * - 객체의 속성을 가져오는 것이므로, 객체의 속성이 아닌 것은 사용할 수 없습니다.
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = "getUser";

/**
 * KeyOfUserApiStatus
 * - GlobalApiStatus의 속성을 가져오기
 */
type KeyOfUserApiStatus = {
  [key in keyof GlobalApiStatus]: GlobalApiStatus[key];
};

/**
 * KeyOfUserApiStatus2
 * - Ecxlude: 제외할 속성을 지정하기
 * - keyof GlobalApiStatus: GlobalApiStatus의 속성을 가져오기
 * - getPosts를 제외한 속성만 가져오기
 */
type KeyOfUserApiStatus2 = {
  [key in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[key];
};

/**
 * KeyOfUserApiStatus3
 * - ? : 속성이 없을 수도 있음
 */
type KeyOfUserApiStatus3 = {
  [key in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[key];
};

interface ILoadingStatus {
  type: 'loading';
  data: string[];
}

interface IErrorStatus {
  type: 'error';
  error: string;
}

type FetchStatus = ILoadingStatus | IErrorStatus;

type FetchStatusType = FetchStatus['type'];
