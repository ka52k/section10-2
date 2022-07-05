import { VFC } from "react";
import { TodoType } from "./types/todo";


// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
// }

// export const Todo = (props: TodoType) => {
// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed" >) => {
// export const Todo = (props: Omit<TodoType, "id">) => {
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};