new Vue({
  el: '#app',
  data: {
    books: [
      {
        title: 'aa',
        author: '',
        year: 0,
        readOn: '',
        notes: '',
      },
      {
        title: 'bb',
        author: '',
        year: 0,
        readOn: '',
        notes: '',
      },
      {
        title: 'cc',
        author: '',
        year: 0,
        readOn: '',
        notes: '',
      },
    ],
    searchValue: '',
  },
  computed: {
    searchBooks() {
      if (this.searchValue) {
        return this.books.filter((b) => b.title.includes(this.searchValue));
      }
      return this.books;
    },
  },
  methods: {},
});
