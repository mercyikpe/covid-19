<template>
  <section class="w-full">
    <div class="px-4 md:px-10 mx-auto">
      <div class=" mt-12">
        <div class="flex">
          <h2 class="text-indigo text-left font-extrabold text-3xl">
            Covid-19
          </h2>
          <h3 class="ml-8 text-black text-left font-medium text-3xl">
            Global Trend
          </h3>
        </div>
        <div class="flex flex-wrap w-full mt-4">
          <div class="w-full lg:w-6/12 xl:w-3/12 pr-8 flex flex-col">
            <div class="py-8 break-words bg-white rounded-lg">
              <h5 class="capitalize font-bold text-sm">
                New Confirmed
              </h5>
              <h2 class="font-semibold text-4xl text-blue">
                {{ data.Global.NewConfirmed | addComma }}
              </h2>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 pr-8">
            <div class="py-8 break-words bg-white rounded-lg">
              <h5 class="capitalize font-bold text-sm">
                Active Confirmed
              </h5>
              <h2 class="font-semibold text-4xl text-orange">
                {{ data.Global.TotalConfirmed | addComma }}
              </h2>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 pr-8">
            <div class="py-8 break-words bg-white rounded-lg">
              <h5 class="capitalize font-bold text-sm">
                recovered
              </h5>
              <h2 class="font-semibold text-4xl text-green-light">
                {{ data.Global.TotalRecovered | addComma }}
              </h2>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12">
            <div class="py-8 break-words bg-white rounded-lg">
              <h5 class="capitalize font-bold text-sm">
                Death
              </h5>
              <h2 class="font-semibold text-4xl text-pink">
                {{ data.Global.TotalDeaths | addComma }}
              </h2>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap mt-12">
          <div class="w-full xl:w-8/12 mb-12 xl:mb-0">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
            >
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-gray-800">
                      Page visits
                    </h3>
                  </div>
                  <div
                    class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                  >
                    <button
                      class="bg-blue text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      See all
                    </button>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead>
                    <tr>
                      <th
                        class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                      >
                        Page name
                      </th>
                      <th
                        class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                      >
                        Visitors
                      </th>
                      <th
                        class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                      >
                        Unique users
                      </th>
                      <th
                        class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                      >
                        Bounce rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                      >
                        /argon/
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        4,569
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        340
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        <i class="fas fa-arrow-up text-green-500 mr-4"></i
                        >46,53%
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                      >
                        /argon/index.html
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        3,985
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        319
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        <i class="fas fa-arrow-down text-orange-500 mr-4"></i
                        >46,53%
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                      >
                        /argon/charts.html
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        3,513
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        294
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        <i class="fas fa-arrow-down text-orange-500 mr-4"></i
                        >36,49%
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                      >
                        /argon/tables.html
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        2,050
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        147
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        <i class="fas fa-arrow-up text-green-500 mr-4"></i
                        >50,87%
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                      >
                        /argon/profile.html
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        1,795
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        190
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                      >
                        <svg
                          class="h-6 w-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        46,53%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  name: "Overview",
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
