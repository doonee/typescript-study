/**
 * Pick<Type, Keys>
 * - Type에서 Keys에 해당하는 속성만 선택하여 타입을 만든다.
 */
interface IPost {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Pick<IPost, "title" | "content">) {
  return {
    ...post,
    createdAt: new Date(),
  };
}
