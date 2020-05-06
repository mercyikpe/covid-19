<template>
  <main class="h-full w-full bg-gray-lighter ">
    <div class="flex px-4 md:px-10 mx-auto py-6">
      <router-link to="/" class="text-indigo text-left font-extrabold text-3xl">
        Covid-19
      </router-link>
      <h3 class="ml-8 text-black text-left font-medium text-3xl">
        Global Trend
      </h3>
    </div>
    <section class="bg-pink p-8">
      <GlobalStat />
    </section>

    <section class="p-8 md:p-16 lg:p-20">
      <CountriesTable />
    </section>
  </main>
</template>

<script>
import GlobalStat from "../components/GlobalStat";
import CountriesTable from "../components/CountriesTable";

export default {
  name: "Dashboard",
  components: { CountriesTable, GlobalStat }
};
</script>

<style scoped></style>
