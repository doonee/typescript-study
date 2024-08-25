/**
 * Omit<Type, Keys>
 * - Type에서 Keys에 해당하는 속성을 제외한 타입을 만든다.
 * - Pick과 반대로, Keys에 해당하는 속성을 제외한 타입을 만든다.
 */
interface IPost {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Omit<IPost, "createdAt">) {
  return {
    ...post,
    createdAt: new Date(),
  };
}
