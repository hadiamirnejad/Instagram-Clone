import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from 'next-auth/react'

function Stories() {
  const [suggest, setSuggest] = useState([]);
  const {data: session} = useSession();
  useEffect(() => {
    const suggest = [...Array(20)].map((_, i) => ({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggest(suggest);
  }, []);
  return (
    <div className="flex space-x-2 p-6 mb-4 bg-white mt-4 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          img={session.user.image}
          username={session.user.username}
        />
      )}
      {suggest.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
