// rfce
import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-3 md:max-w-4xl lg:grid-cols-3 lg:max-w-7xl xl:grid-cols-3 2xl:grid-cols-3 mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className="hidden md:inline-grid md:col-span-1">
          <div className="fixed top-5 xl:max-w-md">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
