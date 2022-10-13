import { signIn, signOut, useSession } from "next-auth/react";

export default function SocialLogin() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <div>
        <button onClick={() => signIn("google")}>Google in</button>
      </div>
      <div>
        <button onClick={() => signIn("line")}>Line in</button>
      </div>
    </>
  );
}
