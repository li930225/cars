<template>
   <div class="main">
	  <router-link to='/logon'>{{msg}}</router-link>
	  <li v-for="item in filter">{{item}}</li>
   </div>
</template>

<script>
	export default{
		name:"main",
		data(){
			return{
				msg:"犯我中华者虽远必诛",
				list:[1,2,3,4,5,6],
			}
		},
		computed:{
			filter:function(){
				return this.list.slice(0,4)
			}
		},
		
	}
</script>

<style>

</style>