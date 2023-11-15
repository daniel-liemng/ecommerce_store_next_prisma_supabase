import { Product } from '@/types';
import { create } from 'zustand';

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (product: Product) => set({ isOpen: true, data: product }),
  onClose: () => set({ isOpen: false, data: undefined }),
}));
