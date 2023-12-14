const { createApp } = Vue;

createApp({
  data() {
    return {
        apiUrl: 'server.php',
        diskArray: '',
    };
  },
  created() {
    axios
    .get(this.apiUrl)
    .then((resp) => {
        this.diskArray = resp.data;
    });
  },
  methods: {
  },

}).mount("#app");