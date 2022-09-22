import { useRouter } from 'next/router';
import MetaDecorator from './MetaDecorator';
import seoConfig from '../../config/SeoConfig';

const HeadSeo = (props) => {
  const { asPath } = useRouter();

  const seo = {
    title: props.title
      ? seoConfig.title + ' - ' + props.title
      : seoConfig.title,
    description: props.description || seoConfig.description,
    url: `${seoConfig.url}${asPath}`,
    siteName: props.siteName || seoConfig.siteName,
    imageUrl: props.imageUrl || seoConfig.imageUrl,
    imageAlt: props.imageAlt || seoConfig.imageAlt,
  };

  return (
    <>
      <MetaDecorator {...seo} />
    </>
  );
};

export default HeadSeo;
