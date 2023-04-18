import Layout from "@/containers/Layout";
import { useModal } from "@/hooks/modal";
import { useUser } from "@/hooks/user";
import api from "@/services/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Painel</h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Nome</span>
          <span className="text-sm">{user?.name}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Email</span>
          <span className="text-sm">{user?.email}</span>
        </div>
      </div>
    </Layout>
  );
}
