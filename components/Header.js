import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalAddPostState } from "../atoms/modalAddPostAtom";
import { modalSignInState } from "../atoms/modalSignInAtom";
import { modalSignUpState } from "../atoms/modalSignUpAtom";
import SignInModal from "../components/SignInModal";
import SignUpModal from "../components/SignUpModal";

function Header() {
  const { data: session } = useSession();
  const [addPostModalOpen, setAddPostModalOpen] =
    useRecoilState(modalAddPostState);

  const [signInModalOpen, setSignInModalOpen] =
    useRecoilState(modalSignInState);

    const [signUpModalOpen, setSignUpModalOpen] =
    useRecoilState(modalSignUpState);
  const router = useRouter();

  return (
    <>
      <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-screen-xl mx-5 lg:mx-auto">
          {/* Left */}
          <div
            onClick={() => router.push("/")}
            className="relative hidden lg:inline-grid w-24 cursor-pointer"
          >
            <Image
              src="/photos/logo-instagram.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            onClick={() => router.push("/")}
            className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
          >
            <Image
              src="/photos/instagram_icon.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* Middle - Search input field */}
          <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500"></SearchIcon>
              </div>
              <input
                className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 hover:ring-gray-700 hover:border-gray-700 rounded-md"
                type="text"
                placeholder="جستجو"
              />
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center justify-end space-x-4">
            <MenuIcon className="h-6 md:hidden cursor-pointer" />
            {session ? (
              <>
                <LogoutIcon
                  className="navBtn"
                  onClick={() =>
                    signOut({ callbackUrl: "http://localhost:3000" })
                  }
                />
                <div className="relative navBtn">
                  <PaperAirplaneIcon className="navBtn rotate-45" />
                  <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                    3
                  </div>
                </div>
                <PlusCircleIcon
                  onClick={() => setAddPostModalOpen(true)}
                  className="navBtn"
                />
                <UserGroupIcon
                  className="navBtn"
                  onClick={() => router.push("/f")}
                />
                <HeartIcon className="navBtn" />
                <img
                  onClick={() => router.push("/profile")}
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={session.user.image}
                  alt="avatar"
                />
                <HomeIcon onClick={() => router.push("/")} className="navBtn" />
              </>
            ) : (
              <>
                <button
                  className="text-sm font-bold"
                  onClick={() => setSignInModalOpen(true)}
                >
                  ورود
                </button>
                <button
                  className="text-sm font-bold"
                  onClick={() => setSignUpModalOpen(true)}
                >
                  ثبت‌نام
                </button>
                <HomeIcon onClick={() => router.push("/")} className="navBtn" />
              </>
            )}
          </div>
        </div>
      </div>
      <SignInModal />
      <SignUpModal />
    </>
  );
}

export default Header;
