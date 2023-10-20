import React from "react";

import ImageWithFallback from "components/ImageWithFallback";
import Tooltip from "components/Tooltip";
import { STATUS } from "utils/constants";

import styles from "./PersonCard.module.css";

const PersonCard = ({ person }) => {
  return (
    <div className="group items-center  m-2 rounded-md hover:scale-105  hover:z-10 transition-all cursor-pointer relative">
      <div className="relative">
        <ImageWithFallback
          className="rounded-t object-cover w-full h-96"
          src={person?.images?.[0]?.original}
          alt="img"
        />
        {person?.reward_max ? (
          <span
            className="w-full p-2 pb-4 justify-center flex text-4xl font-serif  text-white absolute bottom-0"
            style={{
              background: `linear-gradient(to top,  #000 0%, rgba(0,0,0,0) 100%)`,
            }}
          >
            ${person?.reward_max.toLocaleString()}
          </span>
        ) : null}
      </div>
      <div className="absolute top-1 right-1">
        <Tooltip text={STATUS?.[person?.status]?.name}>
          <span
            style={{ color: STATUS?.[person?.status]?.color }}
            className="mr-1 text-4xl"
          >
            ●
          </span>
        </Tooltip>
      </div>
      <div className="h-16 w-full p-1 bg-red-950 rounded-b group-hover:h-auto group-hover:absolute">
        <h3 className={`${styles.title}`}>{person?.title}</h3>
        <p
          className={`text-sm mt-2 justify-self-end opacity-0 group-hover:opacity-100 transition-all`}
        >
          {person?.description}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;
