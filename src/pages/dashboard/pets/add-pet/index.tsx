import { Button } from "@/components/Button";
import Layout from "@/containers/Layout";
import { Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerPetSchema = z.object({
  photos: z.any().refine(
    (value) => {
      return true;
    },
    {
      message: "Você deve selecionar pelo menos uma foto",
    }
  ),
  title: z.string().min(3, "O título deve ter no mínimo 3 caracteres"),
  description: z
    .string()
    .min(3, "A descrição deve ter no mínimo 3 caracteres")
    .max(200, "A descrição deve ter no máximo 200 caracteres"),
  breed: z.string().min(3, "A raça deve ter no mínimo 3 caracteres"),
  dateOfBirth: z.string().refine((value) => {
    return new Date(value) < new Date();
  }),
  gender: z.custom((value) => {
    if (value === "Macho" || value === "Fêmea") {
      return true;
    } else {
      return false;
    }
  }, "O gênero deve ser Macho ou Fêmea"),
  price: z.string().optional(),
  priceToNegotiate: z.boolean().optional(),
  tagPedigree: z.boolean().optional(),
  tagVaccinated: z.boolean().optional(),
  tagMicrochipped: z.boolean().optional(),
  tagCastrated: z.boolean().optional(),
});

type RegisterPetForm = z.infer<typeof registerPetSchema>;

export default function Account() {
  const [files, setFiles] = useState<File[]>([]);

  const today = new Date().setDate(new Date().getDate() - 1);
  const dateToInput = new Date(today).toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    setFocus,
    watch,
  } = useForm<RegisterPetForm>({
    resolver: zodResolver(registerPetSchema),
    mode: "onChange",
    defaultValues: {
      photos: files,
    },
  });

  useEffect(() => {
    setValue("photos", errors);
  }, [errors]);

  const handleFile = (e: { target: { files: any } }) => {
    const file = e.target.files;

    if (files.length >= 4) {
      setError("photos", {
        message: "Você pode selecionar no máximo 4 fotos",
      });
      return;
    }

    const fileType = file[0]["type"];
    const fileExtension = file[0]["name"].split(".").pop();

    const validImageTypes = ["image/jpeg", "image/png"];

    if (validImageTypes.includes(fileType)) {
      const newFile = Object.defineProperty(file[0], "name", {
        value: `${v4()}.${fileExtension}`,
      });

      setFiles([newFile, ...files]);
    }
    if (!files) {
      e.target.files = null;
    }
  };

  const removeImage = (name: string) => {
    setError("photos", {});
    const filesFilter = files.filter((x) => x.name !== name);
    setFiles(filesFilter);

    if (!filesFilter.length) {
      setValue("photos", []);
    }
  };

  function handleRegisterPet(data: RegisterPetForm) {
    if (!files.length) {
      setError("photos", {
        message: "Você deve selecionar pelo menos uma foto",
        type: "required",
      });
      setFocus("photos");
      return;
    }

    if (!data.price && !data.priceToNegotiate) {
      setError("price", {
        message: "Você deve informar o preço ou negociar",
        type: "required",
      });
      setFocus("price");
      return;
    }

    data.photos = files;
    console.log(data);
    // TODO: Register pet
  }

  return (
    <Layout>
      <div className=" rounded p-4">
        <form onSubmit={handleSubmit(handleRegisterPet)}>
          <div className="flex flex-col gap-4 max-w-2xl pb-12">
            <div className="">
              <label
                htmlFor="files"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {`Fotos do seu filhote - ${files.length}/4`}
              </label>
              <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                {errors?.photos?.message as string}
              </span>
              <div className="h-16 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
                <input
                  type="file"
                  className="h-full w-full bg-green-200 opacity-0 z-10 absolute"
                  multiple={false}
                  {...register("photos", {
                    onChange: (e) => {
                      handleFile(e);
                    },
                  })}
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
                        src={URL.createObjectURL(file as any)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Titulo
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="text"
                  id="title"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Digite o titulo do seu anuncio"
                  {...register("title")}
                />
              </div>
              <span className="flex  items-center text-[12px] text-red-500">
                {errors.title?.message}
              </span>
            </div>

            <div className="">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descrição
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <textarea
                  id="description"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Digite a descrição"
                  maxLength={200}
                  {...register("description")}
                />
              </div>
              <span className="flex  items-center text-[12px] text-red-500">
                {errors.description?.message}
              </span>
            </div>

            <div className="">
              <label
                htmlFor="breed"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Raça
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="text"
                  className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Digite a raça"
                  id="breed"
                  {...register("breed")}
                />
              </div>
              <span className="flex  items-center text-[12px] text-red-500">
                {errors.breed?.message}
              </span>
            </div>
            <div className="">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Data de Nascimento
              </label>
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                <input
                  type="date"
                  className="block flex-1 border-0 bg-transparent p-2 t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                  placeholder="Seleciona a data de nascimento"
                  id="dateOfBirth"
                  defaultValue={dateToInput}
                  max={dateToInput}
                  {...register("dateOfBirth")}
                />
              </div>
              <span className="flex  items-center text-[12px] text-red-500">
                {errors.dateOfBirth?.message}
              </span>
            </div>

            <div className="flex max-w-2xl gap-4">
              <div className="w-full">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sexo
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-2xl">
                  <select
                    id="gender"
                    className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6"
                    {...register("gender")}
                  >
                    <option value="0">Selecione</option>
                    <option value="Macho">Macho</option>
                    <option value="Fêmea">Fêmea</option>
                  </select>
                </div>
                <span className="flex  items-center text-[12px] text-red-500">
                  {errors?.gender?.message as string}
                </span>
              </div>
            </div>

            <div className="">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Preço
              </label>
              <div className="flex flex-1  gap-2 flex-col md:flex-row">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset min-w-1/2 w-full md:w-min">
                  <input
                    type="text"
                    className="block flex-1 border-0 bg-transparent p-2  t placeholder:text-gray-400 focus:outline-0 ring-0 sm:text-sm sm:leading-6  disabled:opacity-40 disabled:cursor-not-allowed"
                    placeholder="Digite o preço"
                    id="price"
                    disabled={watch("priceToNegotiate")}
                    {...register("price")}
                  />
                </div>
                <div className="flex items-center  ring-gray-300  gap-4 min-w-1/2 w-min">
                  <input
                    type="checkbox"
                    className="h-6 w-6 lg:h-4 lg:w-4 cursor-pointer"
                    placeholder="Digite o preço"
                    id="priceToNegotiate"
                    {...register("priceToNegotiate")}
                  />
                  <label htmlFor="priceToNegotiate">A combinar</label>
                </div>
              </div>
              <span className="flex  items-center text-[12px] text-red-500">
                {errors.price?.message}
              </span>
              <span className="flex  items-center text-[12px] text-red-500">
                {errors.priceToNegotiate?.message}
              </span>
            </div>

            <div className="flex flex-col  max-w-2xl gap-4">
              <h2 className="block text-sm font-medium leading-6 text-gray-900">
                Tags
              </h2>
              <div className="flex flex-row flex-wrap  justify-between">
                <div className="flex items-center gap-2 min-w-1/2 mb-4">
                  <input
                    type="checkbox"
                    className="h-6 w-6 lg:h-4 lg:w-4 cursor-pointer"
                    placeholder="Digite o preço"
                    id="pedigree"
                    {...register("tagPedigree")}
                  />
                  <label htmlFor="pedigree">Pedigree</label>
                </div>
                <div className="flex items-center gap-2 min-w-1/2 mb-4">
                  <input
                    type="checkbox"
                    className="h-6 w-6 lg:h-4 lg:w-4 cursor-pointer"
                    id="microchip"
                    placeholder="Digite o preço"
                    {...register("tagMicrochipped")}
                  />
                  <label htmlFor="microchip">Microchip</label>
                </div>
                <div className="flex items-center gap-2 min-w-1/2 mb-4">
                  <input
                    type="checkbox"
                    className="h-6 w-6 lg:h-4 lg:w-4 cursor-pointer"
                    placeholder="Digite o preço"
                    id="vacinado"
                    {...register("tagVaccinated")}
                  />
                  <label htmlFor="vacinado">Vacinado</label>
                </div>
                <div className="flex items-center gap-2 min-w-1/2 mb-4">
                  <input
                    type="checkbox"
                    className="h-6 w-6 lg:h-4 lg:w-4 cursor-pointer"
                    placeholder="Digite o preço"
                    id="castrado"
                    {...register("tagCastrated")}
                  />
                  <label htmlFor="castrado">Castrado</label>
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
