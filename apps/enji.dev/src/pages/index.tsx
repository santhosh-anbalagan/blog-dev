import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Santhosh Zooz · Software Developer"
        description="a tech-savvy,an entrepreneur in making. Innovating, disrupting, and leaving my mark on the world, one code at a time."
        ogImage={`${getBaseUrl()}/assets/images/sz-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
