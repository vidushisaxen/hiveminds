import { NextSeo } from 'next-seo'
import React from 'react'

const Metadata = ({metadata}) => {
    const homepage = "https://www.hiveminds.in"
  return (
   <NextSeo
                   title={metadata.title}
                   description={metadata.metaDescription}
                   openGraph={{
                       type: 'website',
                       url: `${homepage}${metadata.path}`,
                       title: metadata.title,
                       "description": metadata.metaDescription,
                       images: [
                        {
                            url: `${homepage}/assets/images/seo/${metadata.img}`,
                            width: 1290,
                            height: 594,
                            alt: "Page Og Image",
                            type: "image/png",
                        },
                    ],
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