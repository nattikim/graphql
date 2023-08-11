"use client";

import Loading from "@/components/Loading";
import { useInfo } from "@/hooks/info";
import { useEffect } from "react";
import { getUserId } from "@/lib/userId";
import UserCard from "@/components/UserCard";
import { useRouter } from "next/navigation";
import Skills from "@/components/Skills";
import Charts from "@/components/Charts";

export default function Home() {
  const router = useRouter();

  let jwtToken = null;
  if (typeof window !== "undefined") {
    jwtToken = localStorage.getItem("jwtToken");
  }
  const userId = getUserId(jwtToken);

  useEffect(() => {
    if (userId === undefined) {
      router.push("/login");
    }
  }, [userId, router]);

  const { user, loading, error } = useInfo(userId!);

  const roundedAuditRatio = Math.round(user.auditRatio * 10) / 10;

  if (loading) return <Loading />;

  if (error)
    return (
      console.log(error)
    );

  return (
    <main className="z-10 items-center m-auto text-center sm:text-left max-w-fit">
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 ">
        <div className="flex flex-col items-center justify-between w-full h-full gap-5">
          <UserCard userId={userId} />
          <div
            className={
              "flex flex-col lg:flex-row items-center justify-between text-center w-full h-full gap-5"
            }
          >
            <div className="card backdrop-blur-3xl shadow-xl w-full h-full">
              <div className="card-body">
                TOTAL XP
                <p
                  className={
                    "font-black text-xl font-mono text-neutral flex flex-col justify-center"
                  }
                >
                  {user.xpAmount.aggregate.sum.amount}
                </p>
              </div>
            </div>

            <div className="card backdrop-blur-3xl shadow-xl w-full h-full">
              <div className="card-body">
                LEVEL
                <p
                  className={
                    "font-black text-xl font-mono text-neutral flex flex-col justify-center"
                  }
                >
                  {user.transactions[0].amount}
                </p>
              </div>
            </div>
            <div className="card backdrop-blur-3xl shadow-xl w-full h-full">
              <div className="card-body">
                RATIO
                <p
                  className={
                    "font-black text-xl font-mono text-neutral flex flex-col justify-center"
                  }
                >
                  {roundedAuditRatio}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="card card-side w-full backdrop-blur-3xl shadow-xl min-h-full">
            <div className="card-body">
              <h2 className="card-title justify-center mb-3">SKILLS</h2>
              <Skills userId={userId} />
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full m-auto flex flex-col items-center justify-between">
          <div className="card card-side w-full backdrop-blur-3xl shadow-xl">
            <div className="card-body items-center">
              <Charts userId={userId} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
