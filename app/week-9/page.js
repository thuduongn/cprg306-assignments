"use client"

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
 
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
  const login = async () => {
    await gitHubSignIn();
  }

  const logout = async () => {
    await firebaseSignOut();
  }
  
  return ( 
    <main>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <div className="my-8">
            <Link href="/week-9/shopping-list" className="underline text-blue-900 hover:text-blue-600">View Shopping List</Link>
          </div>
          <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
        ) : (
          <button onClick={login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login with GitHub</button>
        )
      }
    </main>
  )
}


