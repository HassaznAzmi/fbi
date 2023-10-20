"use client";

import React, { useState, useEffect } from "react";

const ImageWithFallback = ({
  fallback = "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
  alt,
  src,
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
