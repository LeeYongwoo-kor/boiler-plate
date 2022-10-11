import { NextPage } from "next";
import {useRouter} from "next/router";

import SocialLogin from "./components/socialLogin";

const Home: NextPage = () => {
  const router = useRouter();
  router.push("/");
  return (
    <main></main>
  );
};

export default Home;
