"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
    const {data: session} = useSession();

    if (session) {
        return (
            <div className="mb-8">
                {session?.user?.name} <br />
                <button onClick={() => signOut()}> Sign out </button>
            </div>
        );
    } else {
        return (
            <div className="mb-8">
                Not signed in <br />
                <button onClick={() => signIn()}> Sign in </button> 
            </div>
        )
    }
}

export default function NavMenu() {
    const pathname = usePathname();

    return (
        <div className="m-4 p-8 border-r-4 border-black">
            <AuthButton />
        
            <ul>
                <Link href="/">
                    <li className={ pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                        Home
                    </li>
                </Link>
                <Link href="/protected">
                    <li className={ pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                        Protected
                    </li>
                </Link>
            </ul>
            
        </div>
    );
}