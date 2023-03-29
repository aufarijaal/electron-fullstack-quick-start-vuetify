import { defineStore } from "pinia";

const useMainStore = defineStore("main", function () {
  const theme = ref(useLocalStorage("theme", "dark"));

  function toggleTheme() {
    if (theme.value === "dark") {
      theme.value = "light";
    } else {
      theme.value = "dark";
    }
  }
  return {
    theme,
    toggleTheme,
  };
});

export default useMainStore;
