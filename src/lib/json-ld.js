import { postPathBySlug } from './blogs';
import config from '../../package.json';

export function ArticleJsonLd({ post = {} }) {
  const { homepage = '', faviconPath = 'favicon.ico' } = config;
  const { title, slug, date, author, categories, modified, featuredImage, metaDescription } = post;
  const path = postPathBySlug(slug);
  const datePublished = !!date && new Date(date);
  const dateModified = !!modified && new Date(modified);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${homepage}${path}`,
    },
    headline: title,
    image: [featuredImage?.sourceUrl],
    datePublished: datePublished ? datePublished.toISOString() : '',
    dateModified: dateModified ? dateModified.toISOString() : datePublished.toISOString(),
    description: metaDescription,
    keywords: [categories.map(({ name }) => `${name}`).join(', ')],
    copyrightYear: datePublished ? datePublished.getFullYear() : '',
    author: {
      '@type': 'Person',
      name: author?.name,
    },
    publisher: {
      '@type': 'Organization',
      name: "Hiveminds",
      logo: {
        '@type': 'ImageObject',
        url: `${homepage}${faviconPath}`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// export function OrganizationJsonLd() {
//   const { homepage = '' } = config;

//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'Organization',
//     '@id': `${homepage}/#organization`,
//     name: "Yellow",
//     description: "A Dubai branding agency and communications company, we help grow amazing businesses through compelling brands.",
//     url: homepage,
//     telephone: "+971 4 240 6696",
//     email: "hello@welcometoyellow.com",
//     address: {
//       "@type": 'PostalAddress',
//       streetAddress: 'Loft offices 2, Office 107',
//       addressLocality: 'Dubai Media City',
//       addressRegion: 'Dubai',
//       addressCountry: 'AE',
//     },
//     logo: `${homepage}/favicon.ico`,
//     sameAs: [
//       "https://www.instagram.com/welcometoyellow/",
//       "https://www.linkedin.com/company/yellow-branding",
//       "https://www.behance.net/welcometoyellow",
//       "https://in.pinterest.com/Yellowbranding/"
//     ]
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//     />
//   );
// }

// export function WebsiteJsonLd() {
//   const { homepage = '' } = config;

//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'WebSite',
//     '@id': `${homepage}/#website`,
//     name: 'Yellow',
//     url: homepage,
//     copyrightYear: new Date().getFullYear(),
//     'inLanguage': "en-US",
//     "publisher": [
//       {
//         "@id": `${homepage}/#organization`
//       }
//     ],
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//     />
//   );
// }

// export function ImageObjectJsonLd() {
//   const { homepage = '' } = config;

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "ImageObject",
//     '@id': `${homepage}/assets/images/seo/home.png`,
//     url: `${homepage}/assets/images/seo/home.png`,
//     width: "1920",
//     height: "1016",
//     inLanguage: "en-US"
//   };

//   return (
//     <Helmet encodeSpecialCharacters={false}>
//       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
//     </Helmet>
//   );
// }

// export function WebpageJsonLd({ metadata = {} }) {
//   const { homepage = '', faviconPath = '/favicon.ico' } = config;
//   const { title, slug, description, date_published, date_modified } = metadata;

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "@id": `${homepage}/${slug}#webpage`,
//     url: `${homepage}/${slug}`,
//     name: `${title}`,
//     description: `${description}`,
//     datePublished: `${date_published}`,
//     dateModified: `${date_modified}`,
//     publisher: {
//       "@type": "Organization",
//       name: "Yellow",
//       logo: {
//         "@type": "ImageObject",
//         url: `${homepage}${faviconPath}`,
//       }
//     },
//     "about": {
//       "@id": `${homepage}/${slug}#organization`
//     },
//     "isPartOf": {
//       "@id": `${homepage}/${slug}#website`
//     },
//     "inLanguage": "en_US",
//   };

//   return (
//     <Helmet encodeSpecialCharacters={false}>
//       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
//     </Helmet>
//   );
// }

// export function LocalBusiness() {

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "name": "Yellow Branding Agency",
//     "image": "https://welcometoyellow.com/assets/images/seo/home.png",
//     "@id": "",
//     "url": "https://welcometoyellow.com/",
//     "telephone": "+971 4 582 0205",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Loft Offices 2, Office 107",
//       "addressLocality": "Dubai",
//       "postalCode": "25314",
//       "addressCountry": "+971",
//       "addressRegion": "+971"
//     },
//     "sameAs": [
//       "https://www.linkedin.com/company/yellow-branding",
//       "https://www.instagram.com/welcometoyellow/",
//       "https://www.behance.net/welcometoyellow",
//       "https://in.pinterest.com/Yellowbranding/"
//     ],
//     "openingHoursSpecification": [
//       {
//         "@type": "OpeningHoursSpecification",
//         "dayOfWeek": [
//           "Monday",
//           "Tuesday",
//           "Wednesday",
//           "Thursday",
//           "Friday"
//         ],
//         "opens": "09:30",
//         "closes": "05:30"
//       }
//     ]
//   };

//   return (
//     <Helmet encodeSpecialCharacters={false}>
//       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
//     </Helmet>
//   );
// }

// export function AuthorJsonLd({ author = {} }) {
//   const { homepage = '' } = config;
//   const { name, avatar, description } = author;
//   const path = authorPathByName(name);

//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'Person',
//     name: name,
//     image: avatar?.url,
//     url: `${homepage}${path}`,
//     description: description,
//   };

//   return (
//     <Helmet encodeSpecialCharacters={false}>
//       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
//     </Helmet>
//   );
// }

// export function JobpostingJsonLd({ job }) {
//   const { homepage = '', faviconPath = '/favicon.ico' } = config;
//   const { title, seo, date, jobFields } = job

//   const jsonLd = {
//     "@context": "https://schema.org/",
//     "@type": "JobPosting",
//     "title": title,
//     "description": `${seo.metaDesc}`,
//     "identifier": {
//       "@type": "PropertyValue",
//       "name": "Yellow",
//       "value": { title },
//     },
//     "hiringOrganization": {
//       "@type": "Organization",
//       "name": "Yellow",
//       "sameAs": homepage,
//       logo: {
//         "@type": "ImageObject",
//         url: `${homepage}${faviconPath}`,
//       }
//     },
//     "industry": "Branding & Digital Agency",
//     "employmentType": jobFields.jobType,
//     "datePosted": date,
//     "validThrough": date,
//     "jobLocation": {
//       "@type": "Place",
//       address: {
//         "@type": 'PostalAddress',
//         streetAddress: 'Loft offices 2, Office 107',
//         addressLocality: 'Dubai Media City',
//         addressRegion: 'Dubai',
//         addressCountry: 'AE',
//       },
//     },
//     "baseSalary": {
//       "@type": "MonetaryAmount",
//       "currency": "INR",
//       "value": {
//         "@type": "QuantitativeValue",
//         "value": jobFields.ctcRange,
//         "unitText": "YEAR"
//       }
//     }
//   };

//   return (
//     <Helmet encodeSpecialCharacters={false}>
//       <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
//     </Helmet>
//   );
// }