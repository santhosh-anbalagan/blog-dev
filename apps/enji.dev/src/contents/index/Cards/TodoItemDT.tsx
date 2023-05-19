import clsx from 'clsx';

export type TodoItemState = 'digitaltwin' | 'iot' | 'augment' | 'effects';

interface TodoItemProps {
  state: string;
}

function TodoItemDT({ state }: TodoItemProps) {
  return (
    <div
      className={clsx(
        'pointer-events-none w-full select-none border p-6',
        'lg:w-96',
        ['rounded-xl '],
        ['font-serif'],
        [
          'border-divider-light bg-white',
          'dark:border-divider-dark dark:bg-slate-900',
        ]
      )}
      role="presentation"
    >
      <div className={clsx('flex items-center')}></div>
      <div className={clsx('flex')}>
        <div
          className={clsx(
            ['rounded-full'],
            ['px-2 py-0.5'],
            [
              'bg-green-100 text-green-700',
              'dark:bg-yellow-500/20 dark:text-green-300',
            ]
          )}
        >
          {'Autodesk Forge'}
        </div>
        <div
          className={clsx(
            ['rounded-full'],
            ['px-2 py-0.5'],
            [
              'bg-yellow-100 text-yellow-700',
              'dark:bg-yellow-500/20 dark:text-yellow-300',
            ]
          )}
        >
          {'BIM 360'}
        </div>
      </div>
    </div>
  );
}

export default TodoItemDT;
