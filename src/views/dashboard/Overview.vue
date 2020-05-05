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
        <div v-if="!loading" class="flex flex-wrap w-full mt-4">
          <div class="w-full lg:w-6/12 xl:w-3/12 pr-8 flex flex-col">
            <div class="py-8 break-words bg-white rounded-lg">
              <h5 class="capitalize font-bold text-sm">
                New Confirmed
              </h5>
              <h2 class="font-semibold text-4xl text-blue">
                {{ data.NewConfirmed | addComma }}
              </h2>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 pr-8">
            <div class="py-8 break-words bg-white rounded-lg">
              <h5 class="capitalize font-bold text-sm">
				  Total Confirmed
              </h5>
              <h2 class="font-semibold text-4xl text-orange">
                {{ data.TotalConfirmed | addComma }}
              </h2>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 pr-8">
            <div class="py-8 break-words bg-white rounded-lg">
              <h5 class="capitalize font-bold text-sm">
				  Total Recovered
              </h5>
              <h2 class="font-semibold text-4xl text-green-light">
                {{ data.TotalRecovered | addComma }}
              </h2>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12">
            <div class="py-8 break-words bg-white rounded-lg">
              <h5 class="capitalize font-bold text-sm">
				  Total Deaths
              </h5>
              <h2 class="font-semibold text-4xl text-pink">
                {{ data.TotalDeaths | addComma }}
              </h2>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap mt-12">
          <div class="w-full xl:w-8/12 mb-12 xl:mb-0 xl:pr-4">
            <CountriesTable />
          </div>
          <!--Countries rating-->
          <div class="w-full xl:w-4/12 xl:pl-4">
            <CountriesRating />
          </div>
          <!--Countries rating-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import CountriesTable from "../../components/CountriesTable";
import CountriesRating from "../../components/CountriesRating";

export default {
  name: "Overview",
  components: { CountriesRating, CountriesTable },
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
      return value ? `${value.toLocaleString()}` : "";
    }
  }
};
</script>

<style scoped></style>
