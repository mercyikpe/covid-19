<template>
  <div v-if="!loading" class="flex flex-wrap w-full mt-4">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-6/12 xl:w-3/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg py-4"
            >
              <div
                class="relative w-full pr-4 max-w-full flex-grow flex-1 py-4"
              >
                <h5 class="capitalize font-bold text-sm">
                  New Confirmed
                </h5>
                <h2 class="font-semibold text-4xl text-blue">
                  {{ data.NewConfirmed | addComma }}
                </h2>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-6/12 xl:w-3/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg py-4"
            >
              <div
                class="relative w-full pr-4 max-w-full flex-grow flex-1 py-4"
              >
                <h5 class="capitalize font-bold text-sm">
                  Total Confirmed
                </h5>
                <h2 class="font-semibold text-4xl text-orange">
                  {{ data.TotalConfirmed | addComma }}
                </h2>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-6/12 xl:w-3/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg py-4"
            >
              <div
                class="relative w-full pr-4 max-w-full flex-grow flex-1 py-4"
              >
                <h5 class="capitalize font-bold text-sm">
                  Total Recovered
                </h5>
                <h2 class="font-semibold text-4xl text-green-light">
                  {{ data.TotalRecovered | addComma }}
                </h2>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-6/12 xl:w-3/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg py-4"
            >
              <div
                class="relative w-full pr-4 max-w-full flex-grow flex-1 py-4"
              >
                <h5 class="capitalize font-bold text-sm">
                  Total Deaths
                </h5>
                <h2 class="font-semibold text-4xl text-pink">
                  {{ data.TotalDeaths | addComma }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GlobalStat",
  data: function() {
    return {
      data: {},
      loading: true
    };
  },
  created() {
    axios
      .get("https://api.covid19api.com/world/total")
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
      return value ? `${value.toLocaleString()}` : "0";
    }
  }
};
</script>

<style scoped></style>
