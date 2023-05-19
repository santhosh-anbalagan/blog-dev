export type TodoItemState = 'digitaltwin' | 'iot' | 'augment' | 'effects';

interface TodoItemProps {
  state: string;
}

function TodoItemDT({ state }: TodoItemProps) {
  return (
    <div>
      <div></div>
    </div>
  );
}

export default TodoItemDT;
