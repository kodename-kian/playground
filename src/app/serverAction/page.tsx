import React from "react";
import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";

export default async function ServerActionPage() {
    const whoAmI = async () => {
        "use server";
        const session = await getServerSession();
        return session?.user?.name || "NOT LOGGED IN :)";
    };

    return (
        <div>
            <WhoAmIButton whoAmIAction={whoAmI} />
        </div>
    )
}