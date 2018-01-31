<template>
	<div id="project">
		<span class="btn" @click="addHandel">+</span><i class="number">{{num}}</i><span class="btn" @click="deHandel({step:4})">-</span>
		<p>{{num2}}</p>
	</div>
</template>

<script>
	import {mapState, mapGetters,mapMutations } from 'vuex'
	
	export default{
		name:"Project",
		data(){
			return{
				localNum:8
			}
		},
		computed:{
			//=====sate======
			//方法一:
//			num(){
//				//读取vuex中定义的状态(数据)
//				return this.$store.state.count
//			}
			//方法二:
			...mapState({
				//num:"count" 此方法不能附加组件内自有数据
				//外面包裹一层...mapState方法，简化this.$store.state.count 为 state.count
				num(state){
					return state.count + this.localNum
				}
			}),
			//方法三: "数组形式 "用于 this.count与this.$store.state.count 取同样的名字，都为count
//			...mapState([
//				'count'
//			])
			//=====getters======
			//方法一：
//			num2(){
//				return this.$store.getters.filterStudents.length
//			}
			//方法二：
			...mapGetters({
//				num2(getters){
//					return getters.filterStudents.length 
//				}
				num2:"filterStudents" //此方法不能添加其他参数
			})
			//方法三: "数组形式 "用于 this.filterStudents与this.$store.getters.filterStudents 取同样的名字，都为filterStudents
//			...mapState([
//				'filterStudents'
//			])
		},
		methods:{
			addHandel(){
				//组件内用$store中的commit方法 显示提交vuex中定义的方法 从而改变state状态
				this.$store.commit({
					type:"increment",
					parameter:{
						step:2  //载荷参数
					}
				})
			},
			//或者用简化模式 ...mapMutations 但是不能传参
			...mapMutations({
				deHandel:"decrement" //// 映射 this.deHandel() 为 this.$store.commit('decrement')
			})
			//数组方式 
//			...mapMutations([
//				"decrement" // 映射 this.decrement() 为 this.$store.commit('decrement')
//			])
		}
	}
	
</script>

<style>
	.btn{
		display: inline-block;
		cursor: pointer;
		text-align: center;
		width: 30px;
		height: 30px;
		line-height: 28px;
		font-size: 28px;
		background: transparent;
		border: 1px solid #2C3E50;
	}
	.number{
		display: inline-block;
		width: 60px;
		height: 30px;
		line-height: 30px;
		
	}
</style>

<!--
	遗留问题：
	1、...mapGetters扩展函数，不接受函数return方式？？只能接受key:value形式？？
	mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性
-->