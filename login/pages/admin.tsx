import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session } = useSession();
  return "Some super secret dashboard";
}

AdminDashboard.auth = {
  role: "admin",
  unauthorized: "/auth/login",
};
