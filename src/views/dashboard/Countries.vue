<template>
  <section class="w-full">
    <div class="px-4 md:px-10 mx-auto">
      <div class=" mt-12">
        <h2 class="font-bold text-3xl text-blue mb-6">Countries affected by Covid-19</h2>
        <!--Countries table-->
        <CountriesTable />
        <!--Countries table-->
      </div>
    </div>
  </section>
</template>

<script>
import CountriesTable from "../../components/CountriesTable";

export default {
  name: "Countries",
  components: {
    CountriesTable
  }
};
</script>

<style scoped></style>
