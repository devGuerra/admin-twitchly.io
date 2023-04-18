import { Alert } from "@/components/Alert";
import { createContext, useEffect, useState } from "react";

type ModalProps = {
  title: string;
  description: string;
  type: "success" | "error" | "confirm";
  onConfirm: () => Promise<void> | void;
};

type ModalContextType = {
  openModal: ({}: ModalProps) => void;
  closeModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalProps>({} as ModalProps);

  function openModal(data: ModalProps) {
    setModalInfo(data);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  async function handleConfirm() {
    const { onConfirm } = modalInfo;

    if (onConfirm) {
      await onConfirm();
    }

    closeModal();
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Alert
        open={open}
        title={modalInfo.title}
        description={modalInfo.description}
        type={modalInfo.type}
        onClose={closeModal}
        onConfirm={handleConfirm}
      />
    </ModalContext.Provider>
  );
};
