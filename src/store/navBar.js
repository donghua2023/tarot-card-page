import { defineStore } from "pinia";

const useNavBarStore = defineStore("navBar", {
    state: () => ({
      isActive: '/pageOne'
    }),
    actions: {
      reloadIsActive(path) {
        this.isActive = path
      }
    }
});
export default useNavBarStore;
