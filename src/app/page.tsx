import Image from "next/image";

export default async function Home() {
  return (
    <main className="z-10 flex flex-col items-center">
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 ">
        <div className="flex flex-col items-center justify-between w-full">
          <div className="card card-side backdrop-blur-3xl shadow-xl">
            <figure
              className={"w-32 h-32 rounded-full bg-primary m-5 self-center"}
            >
              <Image
                src={""}
                alt="Avatar"
                className={"w-32 h-32 rounded-full bg-primary m-5 self-center"}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">UPS AND DOWNS</h2>
              <p>UPS AND DOWNS</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full">
          <div className="card card-side w-full backdrop-blur-3xl shadow-xl min-h-full">
            <div className="card-body">
              <h2 className="card-title">UPS AND DOWNS</h2>
              <p>UPS AND DOWNS</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full m-auto flex flex-col items-center justify-between">
          <div className="card card-side w-full backdrop-blur-3xl shadow-xl">
            <div className="card-body">
              <h2 className="card-title">UPS AND DOWNS</h2>
              <p>UPS AND DOWNS</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
