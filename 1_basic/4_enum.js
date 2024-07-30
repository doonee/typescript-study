"use strict";
/**
 * Enum
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
    catch (err) {
        state = "ERROR";
    }
    finally {
        return state;
    }
}
console.log('runWork(): ', runWork()); // DONE
