import { NextPage } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = ({ session }) => {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/auth/login");
  // }, []);

  return (
    <main>
      <h1>This is Home</h1>
      <div>
        <Link href="/admin">Admin</Link>
      </div>
    </main>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Home;
