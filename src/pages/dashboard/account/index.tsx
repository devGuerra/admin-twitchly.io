import { Button } from "@/components/Button";
import Layout from "@/containers/Layout";

export default function Account() {
  return (
    <Layout>
      <div className="bg-white rounded p-4">
        <form action="">
          <div className="flex flex-col gap-4 max-w-2xl pb-12">
            <div className="flex flex-col lg:flex-row max-w-2xl gap-4">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha atual
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                  <input
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                    autoComplete="password"
                    className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                    placeholder="Digite sua senha atual"
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nova senha
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className="block flex-1 border-0 bg-transparent p-2 t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                    placeholder="Digite sua nova senha"
                  />
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full  justify-center"
              color="primary"
            >
              Alterar senha
            </Button>
          </div>
        </form>

        <form action="">
          <div className="flex flex-col gap-4 max-w-2xl pb-12">
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Informe seu e-mail"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nome do Responsável
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Informe seu nome"
                />
              </div>
            </div>

            <div className="flex max-w-2xl gap-4">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CPF / CNPJ
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                    placeholder="Informe seu CPF ou CNPJ"
                  />
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col lg:flex-row max-w-2xl gap-4">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Instagram
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                    placeholder="Usuário do Instagram"
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent p-2 t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                    placeholder="Pagina do Facebook"
                  />
                </div>
              </div>
            </div> */}

            <Button
              type="submit"
              className="w-full  justify-center"
              color="primary"
            >
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
