import Image from 'next/image';
import Cta from '@/components/Cta';
import {
  TypeScriptIcon,
  ReactIcon,
  TailwindCssIcon,
  NextJsIcon,
  FigmaIcon,
  VSCodeIcon,
} from '@/components/Icons';

const Header = () => {
  return (
    <header className="relative z-0 border-b border-b-slate-100 bg-slate-100 pt-20 pb-20 dark:border-slate-800 dark:bg-[#05011E] lg:pt-36 lg:pb-28">
      <div
        className="absolute inset-0 z-[-1] bg-slate-50 bg-grid-slate-200/60 dark:bg-slate-900 dark:bg-grid-slate-50/[0.04] lg:bg-grid-big-slate-200/50 lg:dark:bg-grid-big-slate-50/[.02]"
        style={{
          maskImage:
            'radial-gradient(ellipse at 160% center, black 40%, transparent)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 160% center, black 40%, transparent)',
        }}
      ></div>
      <div className="content-wrapper">
        <div className="relative">
          {/* title */}
          <div className="relative z-10">
            <div className="flex animate-fade-left items-center gap-2 text-2xl text-slate-500 dark:text-slate-500 md:text-4xl">
              hi!
              <Image
                className="w-7 md:w-10"
                alt="Love-you Gesture"
                src="/assets/emojis/love-you-gesture.png"
                width={48}
                height={48}
                priority
              />
            </div>
            <h1 className="text-slate-600 dark:text-slate-400">
              <span className="mb-2 block animate-fade-left text-4xl font-bold animation-delay-[60ms] md:mb-4 md:text-7xl">
                i&apos;m{' '}
                <strong className="font-extrabold text-slate-900 dark:text-slate-50">
                  énji
                </strong>{' '}
                kusnadi,
              </span>
              <span className="block animate-fade-left text-lg animation-delay-100 md:text-2xl">
                a <strong className="font-bold">creative developer</strong>.
              </span>
            </h1>
          </div>
          {/* cta */}
          <Cta />
          {/* tech stack */}
          <div className="mt-20 lg:mt-36">
            <p className="mb-2.5 animate-fade-left text-sm text-gray-600 animation-delay-400 dark:text-slate-400">
              current favorite tech stack/tools:
            </p>
            <ul className="flex items-center gap-4 text-gray-500 dark:text-slate-500">
              <li>
                <div className="animate-fade-left transition duration-200 animation-delay-[400ms] hover:text-[#3178C6]">
                  <TypeScriptIcon className="h-6 w-6" />
                </div>
              </li>
              <li>
                <div className="animate-fade-left transition duration-200 animation-delay-[430ms] hover:text-[#61DAFB]">
                  <ReactIcon className="h-6 w-6" />
                </div>
              </li>
              <li>
                <div className="animate-fade-left transition duration-200 animation-delay-[460ms] hover:text-[#06B6D4]">
                  <TailwindCssIcon className="h-6 w-6" />
                </div>
              </li>
              <li>
                <div className="animate-fade-left transition duration-200 animation-delay-[490ms] hover:text-[#000000] dark:hover:text-[#FFFFFF]">
                  <NextJsIcon className="h-6 w-6" />
                </div>
              </li>
              <li>
                <div className="h-3 w-[1px] animate-fade-left bg-slate-300 animation-delay-[505ms] dark:bg-slate-700"></div>
              </li>
              <li>
                <div className="animate-fade-left transition duration-200 animation-delay-[520ms] hover:text-[#007ACC]">
                  <VSCodeIcon className="h-6 w-6" />
                </div>
              </li>
              <li>
                <div className="animate-fade-left transition duration-200 animation-delay-[520ms] hover:text-[#F24E1E]">
                  <FigmaIcon className="h-6 w-6" />
                </div>
              </li>
            </ul>
          </div>
          {/* image */}
          <div className="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block">
            <div
              className="relative h-[590px] w-[603px]"
              style={{
                maskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
              }}
            >
              <div className="absolute top-0 right-0 h-[590px] w-[375px] rounded-b-full bg-primary-400 dark:bg-primary-700">
                <div className="absolute right-0 bottom-0 overflow-hidden">
                  <Image
                    alt="Enji Kusnadi Illustration"
                    src="/me.png"
                    width={457}
                    height={526}
                    className="max-w-none animate-fade-right animation-delay-600"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;