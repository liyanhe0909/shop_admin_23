<template>
	<div class="home">
		<el-container>
			<el-header>
				<div class="login"></div>
				<div class="title">变啦后台管理系统</div>
				<div class="logout">欢迎光临
					<a href="javascript:void(0);" @click="logout">退出</a>
				</div>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<el-menu router default-active="/Knowledge" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#fff" text-color="#666" active-text-color="#1b8afa">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>变啦管理</span>
							</template>
							<el-menu-item index="/Knowledge">
								<i class="el-icon-menu"></i>
								<span slot="title">变啦知识</span>
							</el-menu-item>
							<el-menu-item index="1-2">
								<i class="el-icon-menu"></i>
								<span slot="title">变啦资讯</span>
							</el-menu-item>
							<el-menu-item index="1-3">
								<i class="el-icon-menu"></i>
								<span slot="title">变啦案例</span>
							</el-menu-item>
						</el-submenu>

					</el-menu>
				</el-aside>
				<el-main>
					<!--显示home组件的子组件-->
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			logout() {

				this.$confirm('是否退出登录？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					localStorage.removeItem('loginToken')
					this.$router.push('/Login')
					this.$message({
						type: 'success',
						message: '退出成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消登录'
					});
				});
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang="less">
	.home {
		height: 100%;
		>.el-container {
			height: 100%;
		}
		.el-aside {
			border-right: 1px solid #e3e3e3;
		}
		.el-header {
			background: #1b8afa;
		}
		.login {
			width: 200px;
			float: left;
			height: 60px;
			background: url(../assets/logo.png) no-repeat center center;
			background-size: contain;
		}
		.title {
			height: 60px;
			line-height: 60px;
			position: absolute;
			margin: auto;
			left: 0;
			right: 0;
			width: 300px;
			color: #fff;
		}
		.logout {
			width: 200px;
			height: 60px;
			float: right;
			color: #fff;
			line-height: 60px;
		}
	}
</style>