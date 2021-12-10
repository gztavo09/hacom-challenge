import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModalAuthor: true,
    showSidebar: true,
    books: [
      { id: 1, title: 'Fred', description: 'Flintstone', year: '2021', published: true },
			{ id: 2, title: 'Wilma', description: 'Flintstone', year: '2021', published: false },
			{ id: 3, title: 'Barney', description: 'Rubble', year: '2013', published: true },
			{ id: 4, title: 'Carmelo', description: 'Rubble', year: '2015', published: true },
      { id: 5, title: 'Ciudad', description: 'Rubble', year: '2015', published: false },
      { id: 6, title: 'Perros', description: 'Rubble', year: '2015', published: false },
      { id: 7, title: 'Beneit', description: 'Rubble', year: '2021', published: true },
      { id: 8, title: 'Hacom', description: 'Rubble', year: '2019', published: true },
      { id: 9, title: 'RRHH', description: 'Rubble', year: '2020', published: true },
      { id: 10, title: 'Lobo Estepario', description: 'Rubble', year: '2021', published: true }
    ],
    authors: [
      { id: 1, author: 'Gustavo Arias', gener: 'Fantasia' },
      { id: 2, author: 'Justin Arias', gener: 'Aventura' },
      { id: 3, author: 'Sebastian Arias', gener: 'Ciencia ficción' },
      { id: 4, author: 'Jesus Arias', gener: 'Novela' },
    ]
  },
  getters: {
    publishedTotal(state) {
      let published = state.books.filter(item => item.published)
      let notPublished = state.books.filter(item => !item.published)
      return [
        {
          value: published.length,
          name: 'Publicados'
        },
        {
          value: notPublished.length,
          name: 'No publicados'
        }
      ]
    },
    booksByYear(state) {
      var counter = {};
      for (var i = 0; i < state.books.length; i += 1) {
          counter[state.books[i].year] = (counter[state.books[i].year] || 0) + 1;
      }

      let years = []
      let names = []
      for (var key in counter) {
        years.push(counter[key])
        names.push(key)
      }

      return { years, names }
    }
  },
  authors: {
    toggleShowSidebar(state, payload) {
      state.showSidebar = !state.showSidebar
    }
  },
  actions: {
  },
  modules: {
  }
})
