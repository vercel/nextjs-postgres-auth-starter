import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react';
import NewWindow from 'react-new-window'

export default function Home() {

  const [popup, setPopUp] = useState(false)
  const { data: session } = useSession();

  console.log(session);

  const handleSignin = (e: React.SyntheticEvent) => {
    e.preventDefault()
    signIn()
  }
  const handleSignout = (e: React.SyntheticEvent) => {
    e.preventDefault()
    signOut()
  }

  
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">

        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div>
            {session &&
              <>
                <Image
                  src={session.user?.image as string}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />

                <h1>Hello {session.user?.name}</h1>
                <button
                  onClick={handleSignout}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                  Signout
                </button>
              </>
            }
            {!session &&
              <button
              onClick={() => setPopUp(true)}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Signin
              </button>
            }
          </div>
        </form>
      </div>
      {popup && !session ? (
        <NewWindow url="/sign-in" onUnload={() => setPopUp(false)} />
      ) : null}
    </div>
  );
}
