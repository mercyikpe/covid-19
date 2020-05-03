<template>
  <section class="px-4 md:px-10 mx-auto w-full pt-20">
    <div>
      <h2 class="text-white text-left font-extrabold text-3xl">
        Global Statistics
      </h2>
      <div class="flex flex-wrap lg:justify-between items-center">
        <div class="w-full lg:w-6/12 xl:w-3/12 lg:pr-8">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white rounded text-white mb-6 xl:mb-0 shadow-lg bg-red-light"
          >
            <div class="flex-auto p-6 bg-red-dark rounded m-1">
              <h2 class="font-semibold text-4xl font-extrabold">
                {{ data.Global.TotalConfirmed | addComma }}+
              </h2>
              <p class="mt-2 capitalize">
                Total virus cases
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 lg:pr-8">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white rounded text-white mb-6 xl:mb-0 shadow-lg bg-blue-light"
          >
            <div class="flex-auto p-6 bg-blue-dark rounded m-1">
              <h2 class="font-semibold text-4xl font-extrabold">
                {{ data.Global.TotalDeaths | addComma }}+
              </h2>
              <p class="mt-2 capitalize">
                Total death
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 lg:pr-8">
          <div
            class="relative flex flex-col min-w-0 break-words rounded text-white mb-6 xl:mb-0 shadow-lg bg-green-light"
          >
            <div class="flex-auto p-6 bg-green-dark rounded m-1">
              <h2 class="font-semibold text-4xl font-extrabold">
                {{ data.Global.TotalRecovered | addComma }}+
              </h2>
              <p class="mt-2 capitalize">
                Total recovered
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12">
          <div
            class="relative flex flex-col min-w-0 break-words text-white rounded mb-6 xl:mb-0"
          >
            <div class="flex-auto p-4">
              <div class="flex items-center justify-center">
                <span class="relative w-auto pl-4 flex-initial">
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
                </span>
                <h5 class="ml-2 uppercase text-2xl font-extrabold">
                  LIVE UPDATE
                </h5>
              </div>
              <p class="text-2xl mt-4 italic">Canada closes border</p>
              <p class="text-white-lighter mt-3">
                If you have a serious underlying health condition, stay home and
                away from others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeStat",
  data: function() {
    return {
      data: []
    };
  },
  mounted() {
    axios
      .get("https://api.covid19api.com/summary")
      // .then(response => (this.data = response.data));
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  filters: {
    addComma(value) {
      return `${value.toLocaleString()}`;
    }
  }
};
</script>

<style scoped></style>
