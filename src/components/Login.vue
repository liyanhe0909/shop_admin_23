<template>
	<div class="login">
		<el-form ref="form" :model="form" label-width="80px" status-icon :rules="rules">
			<el-form-item label="用户名" prop="name">
				<el-input v-model="form.username" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	//导入axios,导入之前先安装axios，安装命令：npm install axios
	import axios from 'axios'
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				},
				rules: {
					username: [{
							required: true,
							message: '请输入用户名',
							trigger: 'change'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 6 个字符',
							trigger: 'change'
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'change'
						},
						{
							min: 3,
							max: 6,
							message: '长度在 6到 12 个字符',
							trigger: 'change'
						}
					]
				}
			}
		},
		methods: {
			login() {
				this.$refs.form.validate((valid) => {
					if(valid) {
						console.log('submit!!');
						//发送请求
						axios({
							method: 'post',
							url: 'http://localhost:8888/api/private/v1/login',
							data: this.form
						}).then(res => {
							if(res.data.meta.status === 200) {
								
								this.$message.success("登录成功");
								this.$router.push('/Home')

							} else {
								this.$message.error('用户名或密码错误');

							}
						})
					} else {

						return false;
					}
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.login {
		width: 100%;
		height: 100%;
		background-color: #2d434c;
		overflow: hidden;
		.el-form {
			width: 400px;
			padding: 75px 40px 15px 40px;
			background-color: #fff;
			margin: 200px auto;
			border-radius: 10px;
			position: relative;
			img {
				position: absolute;
				top: -80px;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 50%;
				border: 10px solid #fff;
			}
		}
		.reset {
			margin-left: 80px;
		}
	}
</style>