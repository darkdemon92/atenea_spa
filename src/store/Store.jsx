import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAlertStore = create((set) => ({
  MsgOpen: false,
  SeverityMsg: "error",
  Msg: "Message",
  Duration: 1000,
  PositionV: "top",
  PositionH: "center",
  ChangeMsgOpen: (value) => set((state) => ({ MsgOpen: value })),
  ChangeSeverity: (value) => set((state) => ({ SeverityMsg: value })),
  ChangeMsg: (value) => set((state) => ({ Msg: value })),
  ChangeDuration: (value) => set((state) => ({ Duration: value })),
  ChangePositionV: (value) => set((state) => ({ PositionV: value })),
  ChangePositionH: (value) => set((state) => ({ PositionH: value })),
}));

export const useUserDataStore = create(
  persist(
    (set) => ({
      logged: "false",
      //logged: "true",
      ChangeLogged: (value) => set((state) => ({ logged: value })),
      ClearStore: () => {
        set({ logged: "false" }, true);
      },
    }),
    { name: "UserData" }
  )
);
