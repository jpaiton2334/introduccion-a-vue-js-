var app =   new  Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'que pasa larva' + new Date().toLocaleString()
    }
  })
  

  var app3 = new Vue({
    el: '#app-3',
    data: {
      
      seen: true
    }
  })


  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })

//objeto creado para el div app5 con el metodo onlick ejecutamos los metodos

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  //app4.todos.push({ text: 'New item' }) agregar un nuevo item al array 
