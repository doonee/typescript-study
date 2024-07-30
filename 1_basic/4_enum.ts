/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태.
 *
 * DONE - 완료
 * ERROR - 에러
 * LOADING - 로딩중
 * INITIAL - 초기 상태
 */
function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";
    // API 요청
    state = "DONE";
  } catch (err) {
    state = "ERROR";
  } finally {
    return state;
  }
}

console.log("runWork(): ", runWork()); // DONE

console.log(runWork() === "DONE"); // true

// Enum
enum State {
  DONE = "DONE",
  ERROR = "ERROR",
  LOADING = "LOADING",
  INITIAL = "INITIAL",
}

function runWork2() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // API 요청
    state = State.DONE;
  } catch (err) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log("runWork2(): ", runWork2()); // DONE

console.log(runWork2() === State.DONE); // true