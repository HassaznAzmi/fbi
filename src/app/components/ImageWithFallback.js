"use client";

import React, { useState, useEffect } from "react";

const ImageWithFallback = ({
  fallback = "https://www.charlesrussellspeechlys.com/globalassets/configuration/fallback-images/fallback-image-person.jpg",
  alt,
  src,
  children,
  ...props
}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <img src={error ? fallback : src} alt={alt} onError={setError} {...props} />
  );
};

export default ImageWithFallback;
