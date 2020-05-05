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
            </th>
            <th
              class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Recovered
            </th>
            <th
              class="px-6 bg-gray-lighter text-gray-600 align-middle border border-solid border-gray-lighter py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Death
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
              {{ Country.TotalConfirmed }}
            </td>
            <td
              class="border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ Country.TotalRecovered }}
            </td>
            <td
              class="flex items-center border-t-0 px-6 align-middle text-left border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ Country.TotalDeaths }}
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
      searchCountry: ""
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
      return value ? `${value.toLocaleString()}` : "";
    }
  }
};
</script>

<style scoped></style>
