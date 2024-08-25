/**
 * Required Type
 * - Partial과 반대로, 필수로 포함해야 하는 타입을 지정할 수 있다.
 */
interface IDog {
  name: string;
  age?: number;
  country?: string;
}

/**
 * Required를 사용하면, 모든 타입을 필수로 포함해야 한다.
 */
const requiredDog: Required<IDog> = {
  name: "Mong",
  age: 3,
  country: "Korea",
};
