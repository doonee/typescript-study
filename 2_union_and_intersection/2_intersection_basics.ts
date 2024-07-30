/**
 * Intersection
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

/**
 * union에서 or(|)를 사용했다면, intersection에서는 and(&)를 사용한다.
 * - 두 개 이상의 타입을 합쳐서 사용할 때 사용한다.
 * - 두 개 이상의 타입을 모두 만족해야 한다.
 */
let humanAndContacts: HumanAndContacts = {
  name: "Yu Jin",
  age: 22,
  phone: "010-1234-5678",
  address: "Seoul",
};
