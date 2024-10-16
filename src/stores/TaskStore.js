import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 1, title: "play Gloomhaven", isFav: false },
    ],
    name: 'Yashi'
  }),
});
