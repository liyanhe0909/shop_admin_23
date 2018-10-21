<template>

	<div class="knowledge">
		<el-input placeholder="请输入内容" v-model="query" class="input-with-select">
			<el-button slot="append" icon="el-icon-search" @click="search"></el-button>
		</el-input>
		<el-button type="primary" plain @click="cz">重置</el-button>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="create_time" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="username" label="标题" width="180">
			</el-table-column>
			</el-table-column>
			<el-table-column label="封面图" prop="id" width="180">
				<template slot-scope="scope">
					<img :src="scope.row.id" />
				</template>
			</el-table-column>
			<el-table-column prop="id" label="描述">
			</el-table-column>
			<el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">添加</el-button>
					<el-button type="text" size="small">编辑</el-button>
					<el-button class="el-sc" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination background layout="total, prev, pager, next, jumper" :total="total" :page-size="pagesize" @current-change="currwntChange">
		</el-pagination>

	</div>
</template>

<script>
	// 导入axios
	import axios from 'axios'
	export default {
		data() {
			return {
				query: '',
				pagenum: 1, //当前页
				pagesize: 5,
				total: 0,
				tableData: [],
				imgData: [{
					images: '../../assets/logo.png'
				}, {
					images: '../../user/logo.png'
				}, {
					images: '../../build/logo.png'
				}]
			}
		},
		created() {
			this.getKnowList()
		},
		methods: {
			getKnowList() {
				axios({
					method: 'get',
					url: 'http://localhost:8888/api/private/v1/users',
					//传值给data
					params: {
						query: this.query,
						pagenum: this.pagenum,
						pagesize: this.pagesize
					},
					// 设置请求头
					headers: {
						'Authorization': localStorage.getItem('loginToken')
					}
				}).then(res => {
					const meta = res.data.meta.status
					const data = res.data.data
					if(meta === 200) {
						this.tableData = data.users
						this.total = data.total
						console.log(data.users)
					}

				})
			},
			currwntChange(val) {
				//修改当前页数
				this.pagenum = val
				this.getKnowList()
			},
			search () {
				this.pagenum =1
				this.getKnowList()
				
				
			},
			cz () {
				this.query = undefined
				this.search()
			}
		}
	}
</script>

<style>
	.el-sc {
		color: #F56C6C
	}
	.input-with-select{
		width: 300px;
		margin: 15px 0;
	}
	.el-pagination{
		margin: 15px 0;
		font-weight: normal;
	}
</style>