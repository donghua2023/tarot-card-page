import { defineStore } from "pinia";

const useNavBarStore = defineStore("navBar", {
    state: () => ({
      isActive: '/pageOne'
    }),
    actions: {
        
    }
});
export default useNavBarStore;
