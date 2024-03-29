import { TodoItemProp } from '../types/types';

function TodoItem({ id, content, completed }: TodoItemProp) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={completed} name="" id="" />
        {content}
      </label>
    </li>
  );
}

export default TodoItem;
