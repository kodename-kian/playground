import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <> 
      Welcome,
      {session?.user?.name ? 
          ( <div> {session.user?.name} </div>) 
        : ( <div> Anonymous User </div> )
      }  
    </>
  );
}
