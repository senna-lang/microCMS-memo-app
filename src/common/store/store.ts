import { create } from 'zustand';

type State = {
  textId: number;
  sidebarEdit: boolean;
  mainAreaEdit: boolean;
};

type Action = {
  updateTextId: (textId: State['textId']) => void;
  toggleSidebarEdit: (sidebarEdit: State['sidebarEdit']) => void;
  toggleMainAreaEdit: (mainAreaEdit: State['mainAreaEdit']) => void;
};

export const useStore = create<Action & State>(set => ({
  textId: 1,
  sidebarEdit: false,
  mainAreaEdit: false,
  updateTextId: newTextId => set(() => ({ textId: newTextId })),
  toggleSidebarEdit: toggleSidebarEdit =>
    set(() => ({ sidebarEdit: toggleSidebarEdit })),
  toggleMainAreaEdit: toggleMainAreaEditEdit =>
    set(() => ({ mainAreaEdit: toggleMainAreaEditEdit })),
}));
