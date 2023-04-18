import { PetCard } from "@/components/PetCard";
import Layout from "@/containers/Layout";

export default function Pets() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Filhotes Cadastrados</h1>

        <div className="flex flex-col gap-2 lg:flex-row flex-wrap">
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
    </Layout>
  );
}
