import { NextPage } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = ({ session }) => {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/auth/login");
  // }, []);

  return <main>This is home</main>;
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
