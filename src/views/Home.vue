<template>
  <div class="container-fluid mx-auto h-screen bg-indigo-light">
    <nav class="container mx-auto flex justify-between pt-4">
      <div class="text-gray-700 text-center py-4 m-2">
        <img
          alt="women logo"
          src="../assets/images/COVID-19.svg"

        />
      </div>
      <div class="text-gray-700 text-center py-4 m-2">
        <router-link to="/"
          ><img src="../assets/logo.svg" alt="logo"
        /></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style scoped>
#banner {
  background-image: url("../assets/images/banner.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<!--https://winstonmhango.com/how-to-create-a-photo-gallery-with-tailwind-css/-->
<!--https://www.w3schools.com/html/html5_semantic_elements.asp-->
