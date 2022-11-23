import Head from 'next/head';

const MetaDecorator = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="robots" content="noindex">
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.imageUrl} />
      <meta property="og:image:alt" content={props.imageAlt} />
      <meta property="og:url" content={props.url} />
      <meta property="og:site_name" content={props.siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={props.url} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={props.imageUrl} />
      <meta name="twitter:image:alt" content={props.imageAlt} />
      <meta property="twitter:creator" content="@DaoLens" />
    </Head>
  );
};
export default MetaDecorator;
