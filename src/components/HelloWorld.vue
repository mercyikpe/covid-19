<template>
	<div class="home container mx-auto border border-red-400">
		<div class="flex justify-between">
			<div class="text-gray-700 text-center py-4 m-2">
				<img alt="women logo" src="../assets/images/logo.png" class="h-12 w-12">
			</div>
			<div class="text-gray-700 text-center py-4 m-2">
				<button class="flex items-center bg-transparent hover:bg-blue-200 text-blue-dark font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border-2 border-blue-400 hover:border-transparent rounded-full">
					<span class="mr-2"><img src="../assets/images/plus.svg" alt="plus" class="h-4 w-4"></span> Add profile
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
