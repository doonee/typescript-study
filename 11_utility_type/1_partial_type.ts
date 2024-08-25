/**
 * Partial Type
 */
interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yujin: Idol = {
  name: "Yujin",
  age: 23,
  groupName: "IZ*ONE",
}; 

/**
 * updates 항목으로 덮어씌운다.
 * - updates 항목은 Idol의 일부만 포함하고 싶을 때 Partial을 사용한다.
 */
function updateIdol(original: Idol, updates: Partial<Idol>) {
  return {
    ...original,
    ...updates,
  };
}

/**
 * name만 업데이트
 */
console.log(updateIdol(yujin, { name: "Yujin Choi" })); 