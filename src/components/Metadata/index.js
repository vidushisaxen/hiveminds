import { NextSeo } from 'next-seo'
import React from 'react'

const Metadata = ({metadata}) => {
    const homepage = "https://hiveminds-staging.vercel.app/"
  return (
   <NextSeo
                   title={metadata.title}
                   description={metadata.metaDescription}
                   openGraph={{
                       type: 'website',
                       url: `${homepage}${metadata.path}`,
                       title: metadata.title,
                       "description": metadata.metaDescription,
                    //    images: [
                    //        {
                    //            url: metaImage.sourceUrl,
                    //            width: metaImage.mediaDetails.width,
                    //            height: metaImage.mediaDetails.height,
                    //            alt: metaImage.mediaDetails.alt,
                    //            type: "image/jpg",
                    //        },
                    //    ],
                       siteName: "Hiveminds",
                   }}
                   canonical={`${homepage}${metadata.path}`}
                   languageAlternates={[{
                       hrefLang: 'x-default',
                       href: `${homepage}${metadata.path}`,
                   }]}
               />
  )
}

export default Metadata