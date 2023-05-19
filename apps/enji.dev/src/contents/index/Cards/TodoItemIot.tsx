import clsx from 'clsx';

export type TodoItemState = 'digitaltwin' | 'iot' | 'augment' | 'effects';

interface TodoItemProps {
  state: string;
}

function TodoItemIot({ state }: TodoItemProps) {
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
      <div className={clsx('flex items-center')}>
        <ul>
          <li>{'- BMS Buidling Management System'}</li>
          <li>{'- Tracking assests'}</li>
        </ul>
      </div>
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
          Kafka | MQTT
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
          RS485 | BLE
        </div>
      </div>
      <div
        className={clsx(
          ['rounded-full'],
          ['px-2 py-0.5'],
          [
            'bg-blue-100 text-blue-700',
            'dark:bg-blue-500/20 dark:text-blue-300',
          ]
        )}
      >
        Bacnet | Modbus | DALI | TCP | FTP
      </div>
    </div>
  );
}

export default TodoItemIot;
