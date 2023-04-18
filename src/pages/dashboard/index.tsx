import Layout from "@/containers/Layout";
import { useUser } from "@/hooks/user";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Painel</h1>
    </Layout>
  );
}
