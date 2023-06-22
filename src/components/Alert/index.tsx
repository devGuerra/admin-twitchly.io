import { Transition } from "@headlessui/react";
import {
  CheckCircle,
  CircleWavy,
  SealCheck,
  SealQuestion,
  SealWarning,
  WarningCircle,
} from "@phosphor-icons/react";
import { Button } from "../Button";

export function Alert({
  title,
  description,
  type = "success",
  open,
  onClose,
  onConfirm,
}: {
  title: string;
  description: string;
  type?: "success" | "error" | "confirm";
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <Transition
        show={open}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition
              show={open}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl ">
                <div className=" p-6 max-w-lg">
                  <div className="flex flex-col items-center lg:items-left">
                    <div className="flex flex-shrink-0 items-center justify-center h-10 w-10 lg:h-12 lg:w-12">
                      {type === "success" ? (
                        <SealCheck size={32} className="text-green-600" />
                      ) : type === "error" ? (
                        <SealWarning size={32} className="text-red-600" />
                      ) : type === "confirm" ? (
                        <SealQuestion size={32} className="text-zinc-600" />
                      ) : null}
                    </div>
                    <div className="text-center mt-0 lg:mt-3 lg:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        {title}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3 flex flex-row justify-end gap-2">
                  <Button
                    onClick={onClose}
                    type="button"
                    className={` hover:opacity-70 hover:`}
                  >
                    <p className="text-black font-semibold">Fechar</p>
                  </Button>
                  {type === "confirm" && (
                    <Button onClick={onConfirm} type="button">
                      Confirmar
                    </Button>
                  )}
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
    </div>
  );
}
