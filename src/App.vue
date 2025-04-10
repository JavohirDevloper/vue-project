<template>
  <div class="container px-5 m-4">
    <Header/>
    <router-view/>
    <Footer/>
  </div>

</template>
<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: {Header, Footer}
}
</script>
style