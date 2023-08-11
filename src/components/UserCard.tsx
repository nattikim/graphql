import Avatar from "@/components/Avatar";
import Link from "next/link";
import { useInfo } from "@/hooks/info";

const UserCard = ({ userId }: { userId: number | undefined }) => {
  const { user, loading, error } = useInfo(userId!);
  return (
    <div className="card backdrop-blur-3xl shadow-xl w-full flex flex-col lg:flex-row text-center  lg:text-left">
      <Avatar userId={userId} />
      <div className="card-body">
        <h1 className="text-3xl text-primary">
          {user.firstName} {user.lastName}
        </h1>
        <div className={"badge badge-primary self-center lg:self-start"}>
          {user.login}
        </div>
        <p className={"mt-3"}>
          {user.attrs}
          <br />
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
