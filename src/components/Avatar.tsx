import Image from "next/image";
import { useGetAvatar } from "@/hooks/avatar";
import Loading from "@/components/Loading";

export default function Avatar() {
  const { user, loading, error } = useGetAvatar();

  if (loading) return <Loading />;
  if (error) return <p>Error: {JSON.stringify(error.message)}</p>;

  console.log("Avatar", user);
  if (user[0].attrs !== null) {
    return (
      <figure className={"self-center"}>
        <Image
          src={user[0].attrs}
          alt="Avatar"
          className={"rounded-full m-5 self-center"}
          width={177}
          height={177}
        />
      </figure>
    );
  }

  return (
    <div className={"m-5 self-center"}>
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        viewBox={"0 0 24 24"}
        fill={"currentColor"}
        className={"opacity-50 text-primary"}
        width={"177"}
        height={"177"}
      >
        <path
          fillRule={"evenodd"}
          d={
            "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          }
          clipRule={"evenodd"}
        />
      </svg>
    </div>
  );
}
