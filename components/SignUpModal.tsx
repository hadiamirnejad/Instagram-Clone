import React, { FormEventHandler, Fragment, useState } from "react";
import { NextPage } from "next";
import { useRecoilState } from "recoil";
import { modalSignUpState } from "../atoms/modalSignUpAtom";
import { Dialog, Transition } from "@headlessui/react";
import { getCsrfToken } from "next-auth/react";

const SignUpModal: NextPage = (): JSX.Element => {
  const [openSignUpModal, setOpenSignUpModal] =
    useRecoilState(modalSignUpState);
  const [userInfo, setUserInfo] = useState({username: '', password: '', confirmationPassword: ''});
  const [signUpError, setSignUpError] = useState('')

  const signUpHandler:FormEventHandler<HTMLFormElement> = async (e)=>{
    if(userInfo.username.length != 11 || userInfo.username.substring(0,2) != '09'){
      setOpenSignUpModal;
      return setSignUpError('شماره همراه معتبر نیست.');
      
    }
    if(userInfo.password != userInfo.confirmationPassword){
      setOpenSignUpModal;
      return setSignUpError('رمز عبور و تکرارش یکسان نیستند.');
    }
    console.log('fvgdfgdfgdfgdf');
    e.preventDefault()
    setOpenSignUpModal(true);
  }

  return (
    <Transition.Root show={openSignUpModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-auto"
        onClose={setOpenSignUpModal}
      >
        <div className="flex items-end justify-center min-h-{800px} sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the momal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <form onSubmit={signUpHandler}>
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gra-900"
                  >
                    ورود
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex justify-items-center items-center my-2" dir="rtl">
                      <label className="text-sm" htmlFor="password">شماره همراه: </label>
                      <input
                        className="rounded-lg focus:ring-0 w-full text-center border-2"
                        type="text"
                        name="username"
                        value={userInfo.username}
                        // ref={captionRef}
                        placeholder="شماره همراه"
                        onChange={({target})=> setUserInfo({...userInfo, username: target.value})}
                      />
                    </div>
                    <div className="flex justify-items-center items-center my-2" dir="rtl">
                      <label className="text-sm" htmlFor="password">رمز عبور: </label>
                      <input
                        className="rounded-lg focus:ring-0 w-full text-center border-2"
                        id="password"
                        type="password"
                        name="password"
                        value={userInfo.password}
                        // ref={captionRef}
                        placeholder="رمز عبور"
                        onChange={({target})=> setUserInfo({...userInfo, password: target.value})}
                      />
                    </div>
                    <div className="flex justify-items-center items-center my-2" dir="rtl">
                      <label className="text-sm" htmlFor="confirmationPassword">تکرار رمز عبور: </label>
                      <input
                        className="rounded-lg focus:ring-0 w-full text-center"
                        id="confirmationPassword"
                        type="password"
                        name="confirmationPassword"
                        value={userInfo.confirmationPassword}
                        // ref={captionRef}
                        placeholder="تکرار رمز عبور"
                        onChange={({target})=> setUserInfo({...userInfo, confirmationPassword: target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                >
                  ثبت‌نام
                </button>
              </div>
              {signUpError!='' ? (
                <p
                  dir="rtl"
                  className="text-red-600 font-semibold text-sm text-center mt-10"
                >
                {signUpError}
                </p>
              ) : null}
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export async function getServerSideProps() {
  return {
    props: {
      csrfToken: await getCsrfToken(),
    },
  };
}
export default SignUpModal;
