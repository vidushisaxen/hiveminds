import React from 'react';

export default function Map ({ location, height }) {

  const mapUrls = {
    Bengaluru: "https://snazzymaps.com/embed/694971",
    Mumbai: "https://snazzymaps.com/embed/694975",
    Gurgaon: "https://snazzymaps.com/embed/694976",
  };

  return (
    <>
      <iframe
        loading='async'
        title='Location Map'
        src={mapUrls[location] || mapUrls.Bengaluru}
        width="100%"
        height={height}
        style={{ border: "none" }}
      ></iframe>
    </>
  )
}