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
    </>
  );
}

export default CleanIntuitive;
