import { type } from 'os';
import { create } from 'zustand';

type State = {
  textId: number;
};

type Action = {
  updateTextId: (textId: State['textId']) => void;
};

export const useStore = create<Action & State>(set => ({
  textId: 1,
  updateTextId: newTextId => set(() => ({ textId: newTextId })),
}));
