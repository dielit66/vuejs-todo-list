const App = {
  data() {
    return {
      placeholderString: "Введите название заметки ",
      title: "Список заметок",
      inputValue: "",
      notes: ["Заметка1"],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
  },
};

Vue.createApp(App).mount("#app");
