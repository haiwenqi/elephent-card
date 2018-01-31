//统一状态管理:把数据和处理事件函数抽离出来 供复用
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    title:"Hello World！",
    students:[{
    	name:"haiwenqi",
    	done:true
    },{
    	name:"haiwenwen",
    	done:false
    },{
    	name:"haiwen",
    	done:true
    }]
  },
  getters:{
  	// state派生出的一些状态,store的计算属性
  	filterStudents(state,getters){
  		//接受两个参数,state-->上面的state//getters-->getter中其他计算属性
  		return state.students.filter(function(currentValue){
  			return currentValue.done;
  		})
  	//console.log(filterStudents)-->[ { "name": "haiwenqi", "done": true }, { "name": "haiwen", "done": true } ]
  	}
  },
  mutations: {
    increment (state,payload) {
      //payload--负载参数，从组件传入
      state.count += payload.parameter.step
    },
    decrement (state,payload) {
      state.count -= payload.step
    }
  }
})

export default store;

//数据--state
//同步方法 :mutations  触发用commit()
//异步方法：actions  触发用dispatch()  action只能异步提交mutation或触发另一个action,不能直接对state做处理
