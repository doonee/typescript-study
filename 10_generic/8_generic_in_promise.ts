/**
 * Promise with generic
 * - 프라미스에 제네릭을 사용할 수 있다.
 * - 프라미스를 반환하는 함수에 제네릭을 사용할 수 있다.
 * - 프라미스를 반환하는 함수에 제네릭을 사용하면, 함수를 호출할 때 제네릭을 명시할 수 있다.
 * - 프라미스를 반환하는 함수에 제네릭을 사용하면, 함수를 호출할 때 반환되는 프라미스의 값의 타입을 명시할 수 있다.
 * - 프라미스를 반환하는 함수에 제네릭을 사용하면, 함수를 호출할 때 반환되는 프라미스의 값의 타입을 명시하지 않으면, any 타입이 된다.
 */
const after2Seconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done 2000");
    }, 2000);
  });
};

const runner = async function () {
  const res = await after2Seconds(); // res 타입이 unknown 으로 추론된다.
  console.log(res);
};

runner(); // done

/**
 * string type을 resolve하는 프라미스를 반환하는 함수
 */
const after1Seconds = function () {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("done 1000");
    }, 1000);
  });
};

const runner2 = async function () {
  const res = await after1Seconds(); // res 타입이 string으로 추론된다.
  console.log(res);
};

runner2(); // done

/**
 * 비동기코드가 없는 runner3 함수에 async를 붙이면, runner3 함수는 Promise를 반환한다.
 * - async를 붙이기만 하면, Promise를 반환한다.
 */
const runner3 = async function () {
  // Promise<string>을 반환한다.
  return "string return";
};

runner3().then((res) => {
  console.log(res); // string return
});
