<template>
  <div class="container-fluid mx-auto h-full bg-indigo-light">
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
            <h6 class="uppercase font-extrabold text-lg">
              188+ Countries Are Affected By
            </h6>
            <h1 class="font-extrabold text-6xl">CORONA</h1>
            <p class="mt-6 mr-16">
              The Virus was first reported in wuhan, Hubel china on 17 November
              2019, and on 11 March 2020,the world healtch organization (WHO)
              Declared the outbreak a pandmic.
            </p>

            <h3 class="text-orange-lighter font-extrabold my-8">
              ABOUT COVID-19
            </h3>
          </div>
        </div>

        <div class="w-1/2">
          <img src="../assets/images/banner-img.svg" alt="" />
        </div>
      </div>

      <!--		Stats session-->
      <div class="px-4 md:px-10 mx-auto w-full pt-20">
        <div>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white rounded text-white mb-6 xl:mb-0 shadow-lg bg-red-light"
              >
                <div class="flex-auto p-8 bg-red-dark rounded m-1">
                  <h2 class="font-semibold text-4xl font-extrabold">
                    3,17,309+
                  </h2>
                  <p class="mt-2 capitalize">
                    Total virus cases
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white rounded text-white mb-6 xl:mb-0 shadow-lg bg-blue-light"
              >
                <div class="flex-auto p-8 bg-blue-dark rounded m-1">
                  <h2 class="font-semibold text-4xl font-extrabold">13,643+</h2>
                  <p class="mt-2 capitalize">
                    Total death
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
              <div
                class="relative flex flex-col min-w-0 break-words rounded text-white mb-6 xl:mb-0 shadow-lg bg-green-light"
              >
                <div class="flex-auto p-8 bg-green-dark rounded m-1">
                  <h2 class="font-semibold text-4xl font-extrabold">96,010+</h2>
                  <p class="mt-2 capitalize">
                    Total recovered
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words text-white rounded mb-6 xl:mb-0"
              >
                <div class="flex-auto p-4">
                  <div class="flex items-center">
                    <div class="relative w-auto pl-4 flex-initial">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                          fill="#FF3E3E"
                        />
                      </svg>
                    </div>
                    <h5 class="ml-2 uppercase text-2xl font-extrabold">
                      LIVE UPDATE
                    </h5>
                  </div>
                  <p class="text-2xl mt-4 italic">Canada closes border</p>
                  <p class="text-white-lighter mt-3">
                    If you have a serious underlying health condition, stay home
                    and away from others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mr-56 bg-blue-darker text-white py-32 mt-48 border-r-8 border-white"
    >
      <div class="mx-16">
        <h2 class="px-8 text-left font-extrabold text-5xl">
          How To Safe Your Life?
        </h2>
        <div class="flex flex-wrap mt-24">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
            <img src="../assets/images/wash-hand.svg" alt="wash-hand" />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
            <img src="../assets/images/use-mask.svg" alt="use-mask" />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
            <img
              src="../assets/images/human-contact.svg"
              alt="avoid-human-contact"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
            <img src="../assets/images/gathering.svg" alt="avoid-gathering" />
          </div>
        </div>
        <div class="flex justify-around mt-24">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
            <img src="../assets/images/animal.svg" alt="avoid-animal" />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
            <img src="../assets/images/distance.svg" alt="keep distance" />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-8">
            <img src="../assets/images/cookwell.svg" alt="cook-well" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto text-white py-32 mt-48"
    >
      <h2 class="font-extrabold text-5xl text-right">
        Symptoms of COVID-19
      </h2>
      <div
        class="flex justify-between mt-16 items-center"
      >
        <div class="w-1/5">
          <div class="flex flex-col items-start">
            <button
              class="capitalize text-xl bg-transparent py-4 w-40 rounded border-2 border-blue-lighter bg-blue"
            >
              headache
            </button>
            <button
              class="my-12 capitalize text-xl bg-transparent py-4 w-40 rounded border-2 border-blue-lighter bg-blue"
            >
              cough
            </button>
            <button
              class="capitalize text-xl bg-transparent py-4 w-40 rounded border-2 border-blue-lighter bg-blue"
            >
              fever
            </button>
          </div>
        </div>
        <div class="w-3/5 flex justify-center bg-gray-200">
          <img src="../assets/images/symptoms.svg" alt="symptoms" />
        </div>
        <div class="w-1/5">
          <div class="flex flex-col items-end">
            <button
              class="capitalize text-xl bg-transparent py-4 w-40 rounded border-2 border-blue-lighter bg-blue"
            >
              Dyspnoea
            </button>
            <button
              class="my-12 capitalize text-xl bg-transparent py-4 w-40 rounded border-2 border-blue-lighter bg-blue"
            >
              Muscle pain
            </button>
            <button
              class="capitalize text-xl bg-transparent py-4 w-40 rounded border-2 border-blue-lighter bg-blue"
            >
              Chest pain
            </button>
          </div>
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
