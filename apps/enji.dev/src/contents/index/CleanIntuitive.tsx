import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'iot',
    shows: ['iot'],
    title: 'IoT',
    description: 'Sensors, Controllers & Gateway building.',
  },
  {
    state: 'digitaltwin',
    shows: ['digitaltwin'],
    title: 'Digital Twin',
    description: 'With the aid of BIM monitoring and controlling.',
  },
  {
    state: 'augment',
    shows: ['augment'],
    title: 'Augment Reality',
    description: 'Virtual visualization of the completed construction.',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Technology like art is a soaring excerise of the human imagination."
          caption="Tech Savy"
          description="I’m excited to explore the latest tech trends and get hands-on experience with cutting-edge technology."
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['iot', 'digitaltwin', 'augment', 'effects']
                  }
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['iot', 'digitaltwin', 'augment', 'effects']
                  }
                  title="UI Implementation"
                  description="Start creating UI components using React and Tailwind CSS."
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
