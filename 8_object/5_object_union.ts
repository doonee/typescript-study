/**
 * Object Union
 */

/**
 * 유추된 객체타입 유니언
 */
const dogOrCat =
  Math.random() > 0.5
    ? { name: "별이", age: 12 }
    : { name: "오리", breed: "길냥이" };

dogOrCat.name; // string
dogOrCat.age; // number | undefined
dogOrCat.breed; // string | undefined

interface IDog {
  name: string;
  age: number;
}

interface ICat {
  name: string;
  breed: string;
}

type TDogOrCat = IDog | ICat;

/**
 * 명시적으로 객체타입 유니언
 * - IDog와 ICat의 속성을 모두 포함해야 한다.
 * - 하나라도 빠지면 에러 발생
 * - 속성이 더 많아도 상관없다.
 * - 속성이 더 적으면 에러 발생
 */
const dogOrCat2: TDogOrCat =
  Math.random() > 0.5
    ? { name: "별이", age: 12 }
    : { name: "오리", breed: "길냥이" };

dogOrCat2.name; // string
// dogOrCat2.age; // error
// dogOrCat2.breed; // error

if ("age" in dogOrCat2) {
  dogOrCat2; // IDog
  dogOrCat2.name; // string
  dogOrCat2.age; // number
  // dogOrCat2.breed; // error
} else {
  dogOrCat2; // ICat
  dogOrCat2.name; // string
  dogOrCat2.breed; // string
  // dogOrCat2.age; // error
}
