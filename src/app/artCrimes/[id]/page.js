import React from "react";
import Link from "next/link";

import { getArtCrime } from "utils/apis";
import ImageWithFallback from "components/ImageWithFallback";

const ArtCrime = async ({ params }) => {
  const crime = await getArtCrime(params.id);
  const imgSrc = crime?.images?.[0]?.large.replace(
    "https://www.",
    "https://artcrimes."
  );

  return (
    <div className="flex flex-col max-w-7xl w-full">
      <Link href="/artCrimes" className="pl-4">
        ← Back to Gallery
      </Link>
      <div className={`flex flex-col md:flex-row p-4 self-center`}>
        <ImageWithFallback className="m-4" src={imgSrc} alt="img" />
        <div className="flex flex-col flex-1 m-4">
          <h1 className="text-3xl font-extrabold">{crime?.title}</h1>
          {crime?.maker && <h2 className="text-xl">- {crime?.maker}</h2>}
          <p className="text-base my-3">
            {crime?.description}{" "}
            {crime?.materials ? `(${crime?.materials})` : ""}
          </p>
          <p className="text-base">{crime?.measurements}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtCrime;
