Vue.createApp({
  data() {
    return {
      isBoxOpen: false,
      isBoxVisible: true,
      magicPower: 49
    }
  },
  methods: {
    toggleBox() {
      this.isBoxOpen = !this.isBoxOpen
      this.isBoxVisible = !this.isBoxVisible
    }
  }
}).mount('#conditional')

const { createApp } = Vue

  createApp({
    data() {
      return {
        currentIndex: 0,
           pets: [
          { name: '小橘', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: '阿花', image: 'https://images.unsplash.com/photo-1503777119540-ce54b422baff?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: '黑皮', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ]
      }
    },
    computed: {
      currentPet() {
        return this.pets[this.currentIndex]
      }
    },
    methods: {
      prevPet() {
        this.currentIndex =
        (this.currentIndex - 1 + this.pets.length) % this.pets.length
      },
      nextPet() {
        this.currentIndex =
        (this.currentIndex + 1) % this.pets.length
      }
    }
  }).mount('#app')
