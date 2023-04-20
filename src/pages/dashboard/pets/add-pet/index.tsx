import { Button } from "@/components/Button";
import Layout from "@/containers/Layout";
import { Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

interface ImageProps {
  name: string;
  size: number;
  type: string;
}

export default function Account() {
  const [files, setFiles] = useState<ImageProps[]>([]);
  const [message, setMessage] = useState("");

  const handleFile = (e: { target: { files: any } }) => {
    let file = e.target.files;

    if (files.length >= 4) {
      setMessage("Somente 4 imagens são permitidas");
      return;
    }

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const fileExtension = file[i]["name"].split(".").pop();

      const validImageTypes = ["image/jpeg", "image/png"];

      if (validImageTypes.includes(fileType)) {
        const newFile = new File([file[i]], `${v4()}.${fileExtension}`, {
          type: fileType,
        });
        setFiles([newFile, ...files]);
      } else {
        setMessage("Somente imagens são permitidas");
      }
    }
  };

  const removeImage = (name: string) => {
    setMessage("");
    setFiles(files.filter((x) => x.name !== name));
  };

  return (
    <Layout>
      <div className="bg-white rounded p-4">
        <form action="">
          <div className="flex flex-col gap-4 max-w-2xl pb-12">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fotos do Filhote
              </label>
              <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                {message}
              </span>
              <div className="h-16 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
                <input
                  type="file"
                  onChange={handleFile}
                  className="h-full w-full bg-green-200 opacity-0 z-10 absolute"
                  multiple={false}
                  name="files[]"
                />
                <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                  <div className="flex flex-col">
                    <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                    <span className="text-[12px]">{`
                      Clique aqui para selecionar as fotos do seu filhote
                    `}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {files.map((file, key) => {
                  return (
                    <div
                      key={file.name}
                      className="overflow-hidden relative"
                      id={file.name}
                    >
                      <div
                        className="bg-zinc-600/60 absolute right-1 top-1 flex rounded hover:cursor-pointer"
                        onClick={() => {
                          removeImage(file.name);
                        }}
                      >
                        <div className="flex-1 flex justify-center items-center text-white">
                          <Trash size={20} />
                        </div>
                      </div>

                      <img
                        className="h-20 w-20 rounded object-cover"
                        src={URL.createObjectURL(file)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Titulo
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="text"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Digite o titulo do seu anuncio"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Raça
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="text"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Digite a raça"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Data de Nascimento
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="date"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Seleciona a data de nascimento"
                />
              </div>
            </div>

            <div className="flex max-w-2xl gap-4">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sexo
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                  <select
                    name="0"
                    id="0"
                    className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  >
                    <option value="0">Selecione</option>
                    <option value="1">Macho</option>
                    <option value="2">Femea</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Preço
              </label>
              <div className="flex  flex-1 flex-col gap-2 lg:flex-row">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset w-full">
                  <input
                    type="text"
                    className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                    placeholder="Digite o preço"
                  />
                </div>
                <div className="flex items-center justify-center ring-gray-300 w-full gap-4">
                  <input
                    type="checkbox"
                    className="h-6 w-6"
                    placeholder="Digite o preço"
                  />
                  <label htmlFor="username">A combinar</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col  max-w-2xl gap-4">
              <h2 className="block text-sm font-medium leading-6 text-gray-900">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-6 w-6"
                    placeholder="Digite o preço"
                    id="pedigree"
                  />
                  <label htmlFor="pedigree">Pedigree</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-6 w-6"
                    placeholder="Digite o preço"
                  />
                  <label htmlFor="username">Microchip</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-6 w-6"
                    placeholder="Digite o preço"
                  />
                  <label htmlFor="username">Vacinado</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-6 w-6"
                    placeholder="Digite o preço"
                  />
                  <label htmlFor="username">Castrado</label>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descrição
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <textarea
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Digite a descrição"
                  maxLength={200}
                />
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
