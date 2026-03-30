import { create } from "zustand";

interface Alert {
  id: number;
  message: string;
}

interface AlertState {
  alerts: Alert[];
  push: (message: string) => void;
  dismiss: (id: number) => void;
}

let _id = 0;

export const useAlertStore = create<AlertState>((set) => ({
  alerts: [],
  push: (message) =>
    set((s) => ({ alerts: [...s.alerts, { id: ++_id, message }] })),
  dismiss: (id) =>
    set((s) => ({ alerts: s.alerts.filter((a) => a.id !== id) })),
}));
