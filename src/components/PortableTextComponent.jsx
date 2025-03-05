import React from 'react'
import {PortableText} from '@portabletext/react'

const PortableTextComponent = () => {
  const ImageComponent = ({value, isInline}) => {
    const {width, height} = getImageDimensions(value)
    return (
      <img
        src={urlBuilder()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',
  
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    )
  }
  const components={
    types:{
      image:ImageComponent,
    },
    block:{
      h1: ({children}) => <h1 className="heading-1">{children}</h1>,
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
      number: ({children}) => <ol className="mt-lg">{children}</ol>,
  
      // Ex. 2: rendering custom lists
      checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },
  }
  return (
    <>
    <PortableText
  value={[]}
  components={components}
/>
    </>
  )
}

export default PortableTextComponent