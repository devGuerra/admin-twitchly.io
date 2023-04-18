import Layout from "@/containers/Layout";
import { useModal } from "@/hooks/modal";
import { useRouter } from "next/router";

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Painel</h1>
    </Layout>
  );
}
