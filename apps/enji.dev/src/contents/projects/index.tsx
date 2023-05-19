import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <SectionContent>
      <div className={clsx('flex', 'lg:gap-12')}>
        <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
          <div className={clsx('flex flex-col gap-3')}>
            <SectionButton
              title="Available on GitHub"
              icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
              description="Access my hobby projects on mutiple languages."
              active={currentState === 'github'}
              onClick={() => setCurrentState('github')}
            />
          </div>
        </div>
        <div className={clsx('w-full', 'lg:w-auto')}>
          <div className={clsx('-mt-[41px]')}>
            <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
              <AppWindow
                type="browser"
                browserTabs={[
                  {
                    icon: <GitHubIcon className="h-4 w-4" />,
                    title: 'santhosh-anbalagan/blog-21 - GitHub',
                    isActive: currentState === 'github',
                  },
                ]}
              >
                <GitHubWireframe
                  author="santhosh-anbalagan"
                  license=""
                  repository="blog-21"
                  description="A personal blog using Fjord Next.js."
                />
              </AppWindow>
            </div>
          </div>
        </div>
      </div>
    </SectionContent>
  );
}

export default ProjectsContents;
