<template>
  <main class="container-fluid mx-auto h-full bg-indigo-light">
    <section class="container mx-auto">
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
            <h1 class="font-extrabold text-tenxl">CORONA</h1>
            <p>
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
    </section>

    <section
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
    </section>

    <!--	  symptoms section-->
    <section class="container mx-auto text-white py-32 mt-48">
      <h2 class="font-extrabold text-5xl text-right">
        Symptoms of COVID-19
      </h2>
      <div class="flex justify-between mt-16 items-center">
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
    </section>

    <!--	  newsletter section-->
    <section class="container mx-auto px-6 text-center py-20 text-white">
      <h2 class="mb-2 text-5xl font-bold text-center text-white">
        Are You Affected By Corona?
      </h2>
      <p>
        Don’t worry our doctor will meet with You. Try to distance from other
        peoples
      </p>
      <div class="flex justify-center mt-12">
        <div class="rounded-lg w-2/4 bg-blue py-8 px-4">
          <div
            class="flex flex-wrap justify-between md:flex-row border-b-2 border-white pb-4 px-4"
          >
            <input
              type="email"
              class="bg-transparent flex-1 appearance-none placeholder-white text-xl focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              class="m-1 p-2 rounded-lg font-semibold uppercase lg:w-auto bg-orange rounded-full"
            >
              <svg
                class="h-10 w-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.356 16.102l5.697 4.347 11.664-5.978c.452-.271.905.453.452.725l-9.132 7.426v12.68c0 .815 1.085 1.268 1.627.543l6.24-7.426 12.387 9.419a.95.95 0 001.447-.544l7.234-36.227c.18-.724-.543-1.268-1.266-.996L.537 14.562c-.633.272-.723 1.177-.18 1.54z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--	  News section-->
    <section class="container mx-auto pt-20 pb-10">
      <div class="px-4">
        <div class="block md:flex justify-between items-center md:-mx-2">
          <div>
            <button class="">
              <svg
                width="51"
                height="52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25 1C11.193 1 0 12.193 0 26s11.193 25 25 25 25-11.193 25-25S38.807 1 25 1z"
                  fill="#3E54D2"
                  stroke="#6D84FC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25 1C11.193 1 0 12.193 0 26s11.193 25 25 25 25-11.193 25-25S38.807 1 25 1z"
                  fill="#3E54D2"
                  stroke="#FECE00"
                  stroke-dasharray="110 180"
                />
                <path
                  d="M27 33.414l-6.707-6.707a1 1 0 010-1.414L27 18.586 28.414 20l-6 6 6 6L27 33.414z"
                  fill="#FF7033"
                />
              </svg>
            </button>
          </div>
          <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 hover:shadow-xl">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
              <img
                class="h-56 w-full object-cover object-center"
                src="../assets/images/news.svg"
                alt="news"
              />
              <div class="p-4 h-auto md:h-40 lg:h-48">
                <a
                  href="#"
                  class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                >
                  Woman standing under blue sky
                </a>
                <div
                  class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quidem blanditiis unde asperiores? Officia amet perspiciatis
                  ad quibusdam incidunt eaque, nobis, eveniet neque porro id
                  commodi quisquam debitis!
                </div>
                <div
                  class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block"
                >
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                    >#something</a
                  >
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                    >#sky</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 hover:shadow-xl">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
              <img
                class="h-56 w-full object-cover object-center"
                src="../assets/images/news1.svg"
                alt="news"
              />
              <div class="p-4 h-auto md:h-40 lg:h-48">
                <a
                  href="#"
                  class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                >
                  Woman walking on pathway
                </a>
                <div
                  class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                  aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum
                  sit quasi. Alias quasi officiis blanditiis!
                </div>
                <div
                  class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block"
                >
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                    >#pathway</a
                  >
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                    >#woman</a
                  >
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                    >#walkalone</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div>
            <button class="p-5 bg-orange rounded-full">
              <svg
                width="9"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 15.414L.586 14l6-6-6-6L2 .586l6.707 6.707a.999.999 0 010 1.414L2 15.414z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--	Footer  -->
    <footer class="block py-4 mt-12">
      <div class="container mx-auto px-4">
        <hr class="mb-4 border-b-2 border-blue-dark" />
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4">
            <div class="text-sm text-gray-600 py-1">
              Developed <span class="text-yellow">Mercy Ikpe</span> | Design
              <span class="text-yellow">Pixency</span>
            </div>
          </div>
          <div class="w-full md:w-8/12 px-4 flex justify-end">
            <a href="https://www.twitter.com/creativetim" target="_blank"
              ><img
                class="w-8 h-8 bg-white shadow-lg font-lg p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"
                src="../assets/images/twitter.svg"
                alt="facebook-icon"
            /></a>
            <a href="https://www.facebook.com/creativetim" target="_blank"
              ><img
                class="w-8 h-8 bg-white shadow-lg font-lg p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"
                src="../assets/images/facebook.svg"
                alt="facebook-icon"
            /></a>
            <a href="https://www.github.com/creativetimofficial" target="_blank"
              ><img
                class="w-8 h-8 bg-white shadow-lg font-lg p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"
                src="../assets/images/github.svg"
                alt="facebook-icon"
            /></a>
          </div>
        </div>
      </div>
    </footer>
  </main>
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
