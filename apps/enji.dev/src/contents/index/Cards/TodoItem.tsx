import clsx from 'clsx';

import { CalendarIcon, ReactIcon, SpringBootIcon } from '@/components/Icons';
import { m } from 'framer-motion';

export type TodoItemState = 'digitaltwin' | 'iot' | 'augment' | 'effects';

interface TodoItemProps {
  state: Array<TodoItemState>;
  title?: string;
  description?: string;
  date?: string;
  tag1?: string;
  tag2?: string;
}
const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};
function TodoItem({
  state,
  title = 'Create Documentations',
  description = 'It is good to create early documentation for our new library.',
  date = '10:00 AM · Tomorrow',
  tag1 = 'Docs',
  tag2 = 'Support',
}: TodoItemProps) {
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
      {state.includes('iot') && (
        <div>
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
        </div>
      )}
      {state.includes('digitaltwin') && (
        <div>
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
        </div>
      )}
      {state.includes('augment') && (
        <div>
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
        </div>
      )}
      {/* <div
        className={clsx(
          'flex items-center',
          state.includes('digitaltwin') && ['mb-4 justify-between']
        )}
      >
        <div className={clsx('flex')}>
          <div
            className={clsx(
              'relative flex h-8 w-8 items-center justify-center',
              state.includes('effects') && ['rounded-full'],
              state.includes('digitaltwin') && [''],
              state.includes('iot') && ['font-bold'],
              state.includes('augment')
                ? ['border-white bg-sky-400 text-white']
                : [
                    'border-white bg-[#050914] text-white',
                    'dark:bg-white dark:text-black',
                  ]
            )}
          >
            E
          </div>
        </div>
        <div
          className={clsx(
            state.includes('effects') && ['rounded-full'],
            state.includes('digitaltwin') && ['px-2 py-0.5'],
            state.includes('iot') && ['text-xs font-bold'],
            state.includes('augment')
              ? [
                  'bg-red-100 text-red-800',
                  'dark:bg-red-500/20 dark:text-red-300',
                ]
              : ['bg-[#ff0000] text-white']
          )}
        >
          High
        </div>
      </div>
      <div
        className={clsx(
          state.includes('digitaltwin') && ['mb-1'],
          state.includes('iot') && ['text-lg font-bold'],
          state.includes('augment')
            ? ['text-slate-700', 'dark:text-slate-300']
            : ['text-black', 'dark:text-white']
        )}
      >
        {title}
      </div>
      <div
        className={clsx(
          state.includes('digitaltwin') && ['mb-4'],
          state.includes('iot') && [''],
          state.includes('augment')
            ? ['text-slate-600', 'dark:text-slate-400']
            : ['text-black', 'dark:text-white']
        )}
      >
        {description}
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
            state.includes('effects') && ['rounded-full'],
            state.includes('digitaltwin') && ['px-2 py-0.5'],
            state.includes('iot') && [''],
            state.includes('augment')
              ? [
                  'bg-blue-100 text-blue-700',
                  'dark:bg-blue-500/20 dark:text-blue-300',
                ]
              : ['bg-[#0000ff] text-white']
          )}
        >
          {tag1}
        </div>
        <div
          className={clsx(
            state.includes('effects') && ['rounded-full'],
            state.includes('digitaltwin') && ['px-2 py-0.5'],
            state.includes('iot') && [''],
            state.includes('augment')
              ? [
                  'bg-yellow-100 text-yellow-700',
                  'dark:bg-yellow-500/20 dark:text-yellow-300',
                ]
              : ['bg-[#ffff00] text-black']
          )}
        >
          {tag2}
        </div>
      </div>
      <div
        className={clsx(
          'flex items-center',
          state.includes('digitaltwin') && ['gap-1 '],
          state.includes('iot') && ['text-xs font-medium'],
          state.includes('augment') && ['']
        )}
      >
        <CalendarIcon
          className={clsx(
            'h-4 w-4',
            state.includes('digitaltwin') && ['-mt-1'],
            state.includes('iot') && [''],
            state.includes('augment')
              ? ['text-slate-400', 'dark:text-slate-600']
              : ['h-4 w-4 text-black', 'dark:text-white']
          )}
        />
        <div
          className={clsx(
            state.includes('digitaltwin') && [''],
            state.includes('iot') && [''],
            state.includes('augment')
              ? ['text-slate-600', 'dark:text-slate-400']
              : ['text-black', 'dark:text-white']
          )}
        >
          {date}
        </div>
      </div> */}
    </div>
  );
}

export default TodoItem;
