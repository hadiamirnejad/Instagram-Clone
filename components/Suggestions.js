import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";

function Suggestions() {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(15)].map((_, i) => ({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      desc: faker.hacker.phrase(),
      registeredAt: faker.date.past(),
    }));
    setSuggestion(suggestion);
  }, []);
  return (
    <div className="mt-4 ml-10 mr-4">
      <div className="flex justify-between text-sm mb-5">
        <button className="text-gray-600 font-semibold">مشاهده همه</button>
        <h3 className="text-sm font-bold text-gray-400">موارد برگزیده</h3>
      </div>
      <div className="h-screen overflow-y-scroll scrollbar-hide">
        {suggestion.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <button className="text-blue-400 text-bold">دنبال‌کن</button>
            <div className="flex-1 ml-4 mr-4" dir="rtl">
              <h2 className="font-semibold text-sm">{profile.username}</h2>
              <h3 className="text-xs text-gray-400 text-justify">مشغول در {profile.desc}</h3>
            </div>
            <img
              className="w-10 h-10 rounded-full border p-[2px]"
              src={profile.avatar}
              alt={profile.username}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
