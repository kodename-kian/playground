import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
    const session = await getServerSession();
    if (!session || !session.user) {
        redirect("/api/auth/signin");
    }

    return(
        <div>
            This is a protected route. You can only see this if you are authenticated.
        </div>
    );
}