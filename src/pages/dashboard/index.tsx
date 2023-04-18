import { Button } from "@/components/Button";
import Layout from "@/containers/Layout";
import { useModal } from "@/hooks/modal";
import { useUser } from "@/hooks/user";

export default function Dashboard() {
  const { openModal } = useModal();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Painel</h1>
      <Button
        type="button"
        onClick={() =>
          openModal({
            title: "teste",
            description:
              "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatibus.",
            type: "success",
            onConfirm: () => {},
          })
        }
      >
        modal
      </Button>
    </Layout>
  );
}
