import clsx from 'clsx';

export type TodoItemState = 'digitaltwin' | 'iot' | 'augment' | 'effects';

interface TodoItemProps {
  state: string;
}
function TodoItem({ state }: TodoItemProps) {
  return (
    <div
      className={clsx(
        'pointer-events-none w-full select-none border p-6',
        'lg:w-96',
        ['rounded-xl '],
        state.includes('iot') ? ['text-sm'] : ['font-serif'],
        [
          'border-divider-light bg-white',
          'dark:border-divider-dark dark:bg-slate-900',
        ]
      )}
      role="presentation"
    >
      {state === 'iot' && (
        <>
          <div
            className={clsx(
              'flex items-center',
              state.includes('digitaltwin') && ['mb-4 justify-between']
            )}
          >
            <ul>
              <li>{'- BMS Buidling Management System'}</li>
              <li>{'- Tracking assests'}</li>
            </ul>
          </div>
          <div
            className={clsx(
              'flex',
              state.includes('digitaltwin') && ['mb-6 gap-2'],
              state.includes('iot') && ['text-xs font-bold'],
              state.includes('augment') && ['']
            )}
          >
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
              {'Kafka | MQTT'}
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
              {'RS485 | BLE'}
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
            {'Bacnet | Modbus | DALI | TCP | FTP'}
          </div>
        </>
      )}
      {state === 'digitaltwin' && (
        <>
          <div
            className={clsx(
              'flex items-center',
              state.includes('digitaltwin') && ['mb-4 justify-between']
            )}
          ></div>
          <div
            className={clsx(
              'flex',
              state.includes('digitaltwin') && ['mb-6 gap-2'],
              state.includes('iot') && ['text-xs font-bold'],
              state.includes('augment') && ['']
            )}
          >
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
        </>
      )}
      {state === 'augment' && (
        <>
          <div
            className={clsx(
              'flex items-center',
              state.includes('digitaltwin') && ['mb-4 justify-between']
            )}
          ></div>
          <div
            className={clsx(
              'flex',
              state.includes('digitaltwin') && ['mb-6 gap-2'],
              state.includes('iot') && ['text-xs font-bold'],
              state.includes('augment') && ['']
            )}
          >
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
              {'Unity'}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
