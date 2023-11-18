import { defineStore } from "pinia";

const useNavBarStore = defineStore("navBar", {
    state: () => ({
      isActive: '/pageOne',
      num: '1'
    }),
    actions: {
      reloadIsActive(path) {
        this.isActive = path
      },
      numChange(v) {
        this.num = v
      }
    }
});
export default useNavBarStore;
