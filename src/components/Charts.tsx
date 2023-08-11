"use client";

import React, { SetStateAction, useState } from "react";
import XpGraph from "@/components/XpGraph";
import PiscineGo from "@/components/PiscineGo";
import PiscineJS from "@/components/PiscineJS";

const Charts = ({ userId }: { userId: number | undefined }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <div className="tabs border border-neutral rounded-full p-1">
        <a
          className={`tab text-neutral ${
            activeTab === 1
              ? "tab-active bg-neutral rounded-full text-neutral-content"
              : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Projects
        </a>
        <a
          className={`tab text-neutral ${
            activeTab === 2
              ? "tab-active bg-neutral rounded-full text-neutral-content"
              : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Piscine Go
        </a>
        <a
          className={`tab text-neutral ${
            activeTab === 3
              ? "tab-active bg-neutral rounded-full text-neutral-content"
              : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          Piscine JS
        </a>
      </div>
      <div className="tab-content w-full ">
        {activeTab === 1 && <XpGraph userId={userId} />}
        {activeTab === 2 && <PiscineGo userId={userId} />}
        {activeTab === 3 && <PiscineJS userId={userId} />}
      </div>
    </>
  );
};

export default Charts;
