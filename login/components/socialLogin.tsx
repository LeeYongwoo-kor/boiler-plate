import { signIn, signOut, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

interface IEmail {
  email: string;
}

export default function SocialLogin() {
  const { register, handleSubmit } = useForm<IEmail>();
  const { data: session } = useSession();
  const onValid = ({ email }: IEmail) =>
    signIn("email", { email, callbackUrl: "/" });
  if (session) {
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
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <input
            {...register("email", { required: "Write your email please" })}
            type="email"
            placeholder="Please input email address"
          />
          <button>Email Login</button>
        </div>
      </form>
      <div>
        <button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Google in
        </button>
      </div>
      <div>
        <button onClick={() => signIn("line", { callbackUrl: "/" })}>
          Line in
        </button>
      </div>
    </>
  );
}
