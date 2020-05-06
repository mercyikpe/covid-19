<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-left">Countries Stats</h3>
        </div>

        <div class="flex-grow flex-1">
          <div class="mb:mt-0 md:px-3">
            <input
              v-model="searchCountry"
              class="w-full shadow-inner p-2 border border-blue-light rounded focus:outline-none"
              type="search"
              name="search"
              placeholder="Search Country"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Country name
            </th>
            <th
              class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Confirmed Cases
              <span @click="sortedTotalDefault()">
                <svg
                  class="text-pink w-6 h-6 inline-flex"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                  ></path>
                </svg>
              </span>
            </th>
            <th
              class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Recovered
              <span @click="sortedRecoveredDefault()">
                <svg
                  class="text-pink w-6 h-6 inline-flex"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                  ></path>
                </svg>
              </span>
            </th>
            <th
              class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Death
              <span @click="sortedDeathsDefault()">
                <svg
                  class="text-pink w-6 h-6 inline-flex"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                  ></path>
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody v-if="!loading">
          <tr
            v-for="(Country, key) in filteredCountries"
            :key="key"
            class="hover:bg-gray-lighter border-b border-gray-lighter"
          >
            <th
              class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
            >
              {{ Country.Country }}
            </th>
            <td
              class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ Country.TotalConfirmed | addComma }}
            </td>
            <td
              class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ Country.TotalRecovered | addComma }}
            </td>
            <td
              class="flex items-center border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ Country.TotalDeaths | addComma }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CountriesTable",
  data: function() {
    return {
      data: {},
      loading: true,
      searchCountry: "",
      sorted: false
    };
  },
  created() {
    axios
      .get("https://api.covid19api.com/summary")
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.error = true;
      })
      .finally(() => (this.loading = false));

    this.makeRequest();
  },

  methods: {
    makeRequest() {
      axios
        .get("https://api.covid19api.com/summary")
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
          this.error = true;
        });
    },
    sortedTotalCases() {
      this.data.Countries.sort(function(a, b) {
        return b.TotalConfirmed - a.TotalConfirmed;
      });
      this.sorted = true;
    },
    sortedTotalReverse() {
      this.data.Countries.sort(function(a, b) {
        return a.TotalConfirmed - b.TotalConfirmed;
      });
      this.sorted = false;
    },
    sortedTotalDefault() {
      this.sorted === false
        ? this.sortedTotalCases()
        : this.sortedTotalReverse();
    },
    // Recovered sorted
    sortedRecovered() {
      this.data.Countries.sort(function(a, b) {
        return b.TotalRecovered - a.TotalRecovered;
      });
      this.sorted = true;
    },
    sortedRecoveredReverse() {
      this.data.Countries.sort(function(a, b) {
        return a.TotalRecovered - b.TotalRecovered;
      });
      this.sorted = false;
    },
    sortedRecoveredDefault() {
      this.sorted === false
        ? this.sortedRecovered()
        : this.sortedRecoveredReverse();
    },

    // Sorted death
    sortedDeaths() {
      this.data.Countries.sort(function(a, b) {
        return b.TotalDeaths - a.TotalDeaths;
      });
      this.sorted = true;
    },
    sortedDeathsReverse() {
      this.data.Countries.sort(function(a, b) {
        return a.TotalDeaths - b.TotalDeaths;
      });
      this.sorted = false;
    },
    sortedDeathsDefault() {
      this.sorted === false
        ? this.sortedDeaths()
        : this.sortedDeathsReverse();
    }
  },
  computed: {
    filteredCountries: function() {
      return this.data.Countries.filter(Country => {
        return Country.Country.toLowerCase().match(this.searchCountry);
      });
    }
  },
  filters: {
    addComma(value) {
      return value ? `${value.toLocaleString()}` : "0";
    }
  }
};
</script>

<style scoped></style>
