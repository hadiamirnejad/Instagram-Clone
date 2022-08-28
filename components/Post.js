import React from "react";
import {
  HeartIcon,
  DotsHorizontalIcon,
  PaperAirplaneIcon,
  HomeIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFiled } from "@heroicons/react/solid";
import {useSession } from "next-auth/react";

function Post({ id, username, userImage, img, caption }) {
  const { data: session } = useSession();
  return (
    <div className="bg-white border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src="photos/avatar.jpg"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className="object-cover w-full" src={img} />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 truncate" dir="rtl">
        <span className="font-bold ml-2" dir="rtl">{username}</span>
        {caption}
      </p>
      {/* input box */}
      {session ? (
      <form className="flex items-center p-4" dir="rtl">
        <EmojiHappyIcon className="h-7"/>
        <input type='text' className="border-none flex-1 focus:ring-0 outline-none" placeholder="نظر بدهید"/>
        <button className="font-semibold text-blue-400">ارسال</button>
      </form>
      ):(
<></>
      )}
    </div>
  );
}

export default Post;
