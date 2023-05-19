import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="The world belongs to whose who read."
        caption="Bilbliophile"
        description="I always kept two books in my pocket, one to read, one to write."
      />
    </header>
  );
}

export default PrettyOptimized;
