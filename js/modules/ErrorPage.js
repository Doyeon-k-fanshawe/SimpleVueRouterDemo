export default {
    name: 'ErrorPage',

    created(){
      console.log("Hit a route that does not exist.");

      // tell this function what the Vue instance is 
      let vm = this;

      setTimeout(function() {
        vm.redirectUser();
      }, 3000);

      // 이렇게 쓸 수 도 있지만, 문제가 생길 수도 있음.
      // setTimeout(() => {
      //   this.$router.push({ name: "home" });
      // }, 3000);
    },

    methods: {
      redirectUser() {
        this.$router.push({ name: 'home' });
      }
    },

    template: `<h1>That page doesn't exist!</h1>`
}