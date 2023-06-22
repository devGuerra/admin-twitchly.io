import { Button } from "@/components/Button";
import Layout from "@/containers/Layout";

export default function Account() {
  return (
    <Layout>
      <div className=" rounded p-4">
        <form action="">
          <div className="flex flex-col gap-4 max-w-2xl pb-12">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Foto de Perfil
              </label>
              <input
                className="block w-full text-sm max-w-2xl p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                id="file_input"
                type="file"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nome do Canil
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nome do Canil"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sobre o Canil
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Apresente seu Canil"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Seu site
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  twitchly.io
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-2 pl-1 t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6 w-full"
                  placeholder="canilfeliz"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row max-w-2xl gap-4">
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
                  Facebook
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
            </div>

            <div className="flex max-w-2xl gap-4">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Whatsapp
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                    placeholder="Informe seu Whatsapp"
                  />
                </div>
              </div>
            </div>

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
