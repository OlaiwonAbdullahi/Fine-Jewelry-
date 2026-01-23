import { create } from "zustand";

type ModalName =
  | "search"
  | "login"
  | "register"
  | "miniCart"
  | "reservation"
  | "quickView"
  | null;

interface ModalData {
  productId?: number;
  productName?: string;
  productPrice?: number;
  productImage?: string;
  [key: string]: any;
}

interface UIStore {
  activeModal: ModalName;
  modalData: ModalData | null;

  openModal: (
    modalName: Exclude<ModalName, null>,
    data?: ModalData | null,
  ) => void;
  closeModal: () => void;

  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  activeModal: null,
  modalData: null,
  isMobileMenuOpen: false,

  openModal: (modalName, data = null) =>
    set({
      activeModal: modalName,
      modalData: data ?? null,
    }),

  closeModal: () =>
    set({
      activeModal: null,
      modalData: null,
    }),

  toggleMobileMenu: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
    })),

  closeMobileMenu: () =>
    set({
      isMobileMenuOpen: false,
    }),
}));

export type { ModalName, ModalData };
