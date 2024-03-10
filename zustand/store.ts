import create from "zustand";

// Define your store
const useNumberStore = create((set) => ({
	number: 0, // Initial value of the number
	setNumber: (newNumber) => set({ number: newNumber }),
	open: false,
	setOpen: (newOpen) => set({ open: newOpen }),
}));

export default useNumberStore;
