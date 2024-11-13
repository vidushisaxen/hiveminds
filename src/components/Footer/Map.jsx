import React from 'react';
import { GoogleMapsEmbed } from '@next/third-parties/google';

const Map = () => {
    const apiKey = process.env.REACT_APP_API_KEY;  
  return (
   <>
   <div>
      <GoogleMapsEmbed
      apiKey={apiKey}
      height="200"
      width="100%"
      mode="place"
      q="Hiveminds+Bengaluru"
    />
    </div>
   </>
  )
}

export default Map