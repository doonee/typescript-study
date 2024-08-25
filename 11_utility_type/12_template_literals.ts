/**
 * Template literals 이란?
 * - 문자열을 보다 쉽게 다룰 수 있도록 ES6에서 도입된 기능
 * - 백틱(`)을 사용하여 문자열을 표현
 * - ${}를 사용하여 변수나 표현식을 문자열에 포함
 * - 여러 줄로 이루어진 문자열을 쉽게 표현할 수 있음
 * - 문자열을 조합할 때 가독성이 좋아짐
 */
type doonee = "doonee Example";

// uppercase
type dooneeUppercase = Uppercase<doonee>; // 'DOONEE EXAMPLE'

// lowercase
type dooneeLowercase = Lowercase<doonee>; // 'doonee example'

// capitalize
type dooneeCapitalize = Capitalize<doonee>; // 'Doonee Example'

// uncapitalize
type dooneeUncapitalize = Uncapitalize<doonee>; // 'doonee example', 안됨? 
