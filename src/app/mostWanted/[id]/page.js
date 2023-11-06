import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

import { getMostWantedPerson } from "utils/apis";
import ImageWithFallback from "components/ImageWithFallback";

const descAttribute = (label, attr, suffix = "") => {
  return attr ? (
    <div>
      <span className="font-bold">{label}: </span>
      <span className="italic">
        {attr} {suffix}
      </span>
    </div>
  ) : null;
};

const WantedPerson = async ({ params }) => {
  const person = await getMostWantedPerson(params.id);

  return (
    <div className="flex flex-col max-w-7xl w-full p-4">
      <Link href="/mostWanted" className="pl-4">
        ← Back to Gallery
      </Link>
      <div className={`flex flex-col md:flex-row self-center`}>
        <ImageWithFallback
          className="m-4 lg:max-w-md"
          src={person?.images?.[0]?.large}
          alt="img"
        />
        <div className="flex flex-col flex-1 m-4">
          <h1 className="text-3xl font-extrabold">{person?.title}</h1>
          {person?.aliases ? (
            <p className="font-bold">
              (
              {person?.aliases.map(
                (alias, i) => `${i == 0 ? "" : ", "}${alias}`
              )}
              )
            </p>
          ) : null}
          <p className="mb-4">{person?.description}</p>
          <p className=" text-yellow-500">{person?.warning_message}</p>
          {person?.caution ? parse(person?.caution) : null}
          {person?.remarks ? parse(person?.remarks) : null}
          <p className=" text-red-500">{person?.reward_text}</p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold">DESCRIPTION</h3>
        <div className="flex-1 grid  lg:grid-cols-3">
          {descAttribute("Sex", person?.sex)}
          {descAttribute("Race", person?.race_raw)}
          {descAttribute("Weight", person?.weight)}
          {descAttribute("Height", person?.height_max, "inches")}
          {descAttribute("Age Range", person?.age_range)}
          {descAttribute("Hair Color", person?.hair_raw)}
          {descAttribute("Eye Color", person?.eyes_raw)}
        </div>
        <span className="text-lg text-orange-500">
          {person?.scars_and_marks}
        </span>

        <h3 className="text-lg font-bold mt-4">FILES</h3>
        {person?.files
          ? person?.files.map((file) => {
              return (
                <div key={file?.url} className="text-blue-500">
                  <a href={file?.url} target="_blank">
                    {file?.name}
                  </a>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default WantedPerson;
