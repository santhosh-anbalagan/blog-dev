import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import type { TodoItemState } from '@/contents/index/Cards/TodoItemDT';

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
  const [currentState, setCurrentState] = useState<Content | null>(content[0]);

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
            <SectionButton
              key={content[0].state}
              title={content[0].title}
              description={content[0].description}
              icon={1}
              active={currentState?.state === content[0].state}
              onClick={() => setCurrentState(content[0])}
            />
            <SectionButton
              key={content[1].state}
              title={content[1].title}
              description={content[1].description}
              icon={2}
              active={currentState?.state === content[1].state}
              onClick={() => setCurrentState(content[1])}
            />
            <SectionButton
              key={content[2].state}
              title={content[2].title}
              description={content[2].description}
              icon={3}
              active={currentState?.state === content[2].state}
              onClick={() => setCurrentState(content[2])}
            />
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
