import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  modalContent: React.ReactNode;
}

interface ModalStoreState extends ModalState {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}
const initialState: ModalState = {
  isModalOpen: false,
  modalContent: null,
};

const useModalStore = create<ModalStoreState>((set) => ({
  ...initialState,
  openModal: (content: React.ReactNode) =>
    set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: null }),
}));

export default useModalStore;
