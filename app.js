new Vue({
  el: '#app',
  data: {
    books: [
      {
        title: 'aa',
        author: 'albert',
        year: 0,
        readOn: '',
        notes: '',
      },
      {
        title: 'bb',
        author: 'vio',
        year: 0,
        readOn: '',
        notes: '',
      },
      {
        title: 'cc',
        author: 'aly',
        year: 0,
        readOn: '',
        notes: '',
      },
    ],
    searchValue: '',
    searchFields: ['title', 'author', 'year'],
    selectedField: 'title',
    isActive: false,
  },
  computed: {
    searchBooks() {
      if (this.searchValue) {
        return this.books.filter((b) =>
          b[this.selectedField].includes(this.searchValue)
        );
      }
      return this.books;
    },
  },
  methods: {
    activateDropdown() {
      this.isActive = !this.isActive;
    },
    selectFilter(fieldName) {
      this.selectedField = fieldName;
    }
  },
});
