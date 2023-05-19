import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Keep an eye out for us on disrupting the constuction industry."
        caption="Entrepreneur"
        description="Co founder/CTO of Lattice Build Tech."
      />
    </header>
  );
}

export default DetailOriented;
