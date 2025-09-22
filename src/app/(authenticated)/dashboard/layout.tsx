import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
        <aside className="w-52 p-5 bg-blue-500">
          <h3 className="text-xl">Dashboard Menu</h3>
          <ul className="underline">
            <li>
              <Link href={"/dashboard/events"}>Events</Link>
            </li>
            <li>
              <Link href={"/"}>return to Home</Link>
            </li>
          </ul>
        </aside>

        <main className="grow">{children}</main>
      </div>
  );
};

export default layout;
