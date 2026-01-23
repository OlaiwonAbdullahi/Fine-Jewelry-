import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  material?: string;
  category?: string;
}

interface WishlistStore {
  items: WishlistItem[];

  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean;
  toggleWishlist: (item: WishlistItem) => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (item) =>
        set((state) => {
          if (state.items.some((i) => i.id === item.id)) {
            return state;
          }
          return { items: [...state.items, item] };
        }),

      removeFromWishlist: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      clearWishlist: () => set({ items: [] }),

      isInWishlist: (id) => get().items.some((item) => item.id === id),

      toggleWishlist: (item) => {
        const { isInWishlist, addToWishlist, removeFromWishlist } = get();

        if (isInWishlist(item.id)) {
          removeFromWishlist(item.id);
        } else {
          addToWishlist(item);
        }
      },
    }),
    {
      name: "a3-jewelry-wishlist",
    },
  ),
);

export const selectWishlistCount = (state: WishlistStore) => state.items.length;
