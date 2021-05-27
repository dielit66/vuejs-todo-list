const App = {
  data() {
    return {
      placeholderString: "Введите название заметки ",
      title: "Список заметок",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
