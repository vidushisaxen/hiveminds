import React from 'react';

const Map = ({location,height}) => {
  const mapUrls = {
    Bengaluru: "https://snazzymaps.com/embed/694971",
  Mumbai: "https://snazzymaps.com/embed/694975",
    Gurgaon: "https://snazzymaps.com/embed/694976",
  };
  return (
   <>   
   <div>
   <iframe 
        src={mapUrls[location] || mapUrls.Bengaluru} 
        width="100%" 
        height={height} 
        style={{ border: "none" }} 
      ></iframe>
    </div>
   </>
  )
}

export default Map