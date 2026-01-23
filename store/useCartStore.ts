import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  engraving?: string;
  material?: string;
}

interface CartStore {
  items: CartItem[];

  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;

  getItem: (id: number) => CartItem | undefined;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((item) => item.id !== id) };
          }

          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item,
            ),
          };
        }),

      clearCart: () => set({ items: [] }),

      getItem: (id) => get().items.find((item) => item.id === id),
    }),
    {
      name: "a3-jewelry-cart",
    },
  ),
);

export const selectCartCount = (state: CartStore) =>
  state.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartSubtotal = (state: CartStore) =>
  state.items.reduce((total, item) => total + item.price * item.quantity, 0);
