import Image from 'next/image';
import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { PortableText as PortableTextComponent } from '@portabletext/react';
import { getImage } from '@sanity/asset-utils';
import { config } from './config';


if (!config.projectId) {
  throw Error(
    'The Project ID is not set. Check your environment variables.'
  );
}

export const urlFor = source =>
  createImageUrlBuilder(config).image(source);

export const imageBuilder = source =>
  createImageUrlBuilder(config).image(source);

// export const usePreviewSubscription = definePreview(config);

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  return (
    <Image
      {...getImage(value)}
      blurDataURL={getImage(value).blurDataURL}
      sizes='(max-width: 800px) 100vw, 800px'
      alt={value.alt || ' '}
      placeholder='blur'
      loading='lazy'
    />
  );
};



const components = {
  types: {
    image: ImageComponent,
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  },
  marks: {
    center: props => (
      <div className='text-center'>{props.children}</div>
    ),
    highlight: props => (
      <span className='font-bold text-brand-primary'>
        {props.children}
      </span>
    ),
    link: props => (
      <a href={props?.value?.href}>
        {props.children}
      </a>
    )
  }
};
// Set up Portable Text serialization
export const PortableText = props => (
  <PortableTextComponent components={components} {...props} />
);

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false
});

export const getClient = usePreview =>
  usePreview ? previewClient : client;
export default client;