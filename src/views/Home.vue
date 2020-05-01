<template>
  <div class="container-fluid mx-auto h-screen bg-indigo-light">
    <div class="container mx-auto">
      <nav class="flex justify-between pt-4">
        <div class="text-gray-700 text-center py-4 m-2">
          <img alt="women logo" src="../assets/images/COVID-19.svg" />
        </div>
        <div class="text-gray-700 text-center py-4 m-2">
          <router-link to="/"
            ><img src="../assets/logo.svg" alt="logo"
          /></router-link>
        </div>
      </nav>

      <!--	banner section  -->
      <div class="flex justify-between items-center mt-12 -mx-2">
        <div class="w-1/3">
          <div class="text-left text-white">
            <h6 class="uppercase font-extrabold text-lg">188+ Countries Are Affected By</h6>
            <h1 class="font-extrabold text-6xl">CORONA</h1>
            <p class="mt-6 mr-16">
              The Virus was first reported in wuhan, Hubel china on 17 November
              2019, and on 11 March 2020,the world healtch organization (WHO)
              Declared the outbreak a pandmic.
            </p>

            <h3 class="text-orange-lighter font-extrabold my-8">ABOUT COVID-19</h3>
          </div>
        </div>

        <div class="w-1/2">
          <img src="../assets/images/banner-img.svg" alt="" />
        </div>
      </div>
    </div>
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
