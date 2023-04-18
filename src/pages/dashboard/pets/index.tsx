import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Layout from "@/containers/Layout";
import { useUser } from "@/hooks/user";
import { NextSeo } from "next-seo";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Pets</h1>
    </Layout>
  );
}
