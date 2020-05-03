<template>
  <section class="h-full">
    <div class="flex flex-col md:flex-row bg-indigo-dark">
      <div
        class="bg-indigo-dark shadow-lg fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-32"
      >
        <aside
          class="md:mt-12 md:w-32 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between"
        >
          <img
            class="w-12 h-12 mx-auto"
            src="../../assets/images/coroIcon.png"
            alt="CoronaVirus Icon"
          />
          <ul
            class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left mt-16"
          >
            <li class="flex-1">
              <a
                href="/dashboard/overview"
                class="block py-1 md:py-3 pl-1 flex flex-col items-center align-middle text-white no-underline -mr-2  hover:bg-white hover:text-indigo-dark rounded"
              >
                <img
                  class="w-12 h-12"
                  src="../../assets/images/overview.png"
                  alt="overview Icon"
                />
                Overview
              </a>
            </li>
            <li class="flex-1 my-8">
              <a
                href="/dashboard/countries"
                class="block py-1 md:py-3 pl-1 flex flex-col items-center align-middle text-white no-underline -mr-2 hover:bg-white hover:text-indigo-dark rounded"
              >
                <img
                  class="w-12 h-12"
                  src="../../assets/images/overview.png"
                  alt="overview Icon"
                />
                Countries
              </a>
            </li>
            <li class="flex-1 my-8">
              <a
                href="/dashboard/symptoms"
                class="block py-1 md:py-3 pl-1 flex flex-col items-center align-middle text-white no-underline -mr-2  hover:bg-white hover:text-indigo-dark rounded"
              >
                <img
                  class="w-12 h-12"
                  src="../../assets/images/symptoms.png"
                  alt="symptoms Icon"
                />
                Symptoms
              </a>
            </li>
            <li class="flex-1 my-8">
              <a
                href="/dashboard/ranks"
                class="block py-1 md:py-3 pl-1 flex flex-col items-center align-middle text-white no-underline -mr-2  hover:bg-white hover:text-indigo-dark rounded"
              >
                <img
                  class="w-12 h-12"
                  src="../../assets/images/test.png"
                  alt="Test Icon"
                />
                Ranks
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <main class="bg-gray-lighter rounded-lg flex flex-1">
        <router-view></router-view>
      </main>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data: function() {
    return {
      data: []
    };
  },
  mounted() {
    axios
      .get("https://api.covid19api.com/summary")
      // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.data = response.data));
  }
};
</script>

<style scoped></style>
