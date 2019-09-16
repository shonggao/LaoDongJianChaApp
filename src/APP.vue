<template>
    <div class="app-container">
        <!-- mint-ui header -->
        <!-- <mt-header fixed :title="title" class="header-container">
            <span slot="left" @click="goBack()" v-show="flag">
				<mt-button icon="back">返回</mt-button>
            </span>            
        </mt-header> -->
        <!-- <header id="header" class="mui-bar mui-bar-nav">
                <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
                <a class="mui-title">{{ title }}</a>
        </header> -->
        <transition>
		    <router-view @pageChanged="titleChanged"></router-view>
        </transition>
        
        <nav class="mui-bar mui-bar-tab" v-show="flag">
			<router-link class="mui-tab-item-11b" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-11b" to="/mywork">
				<span class="mui-icon mui-icon-settings"></span>
				<span class="mui-tab-label">我的工作</span>
			</router-link>
			<router-link class="mui-tab-item-11b" to="/companymanager">
				<span class="mui-icon mui-icon-extra mui-icon-extra-hotel"></span>
				<span class="mui-tab-label">企业管理</span>
			</router-link>
			<router-link class="mui-tab-item-11b" to="/personal">
				<span class="mui-icon mui-icon-person-filled"></span>
				<span class="mui-tab-label">个人事务</span>
            </router-link>
		</nav>
    </div>
</template>
<script>
export default{
    data() {
        return {
            title: "武昌区劳动监察系统",
            flag: false
        }
    },
    created() {
	},
    methods: {
        titleChanged(flag=false){
            this.flag = flag;
        },
    },
    watch: {
    },
}
</script>
<style lang="scss" scoped>

.app-container{
	overflow-x: hidden;
	padding-bottom: 50px;
}
/deep/.mui-bar-tab{
    position: fixed;
    bottom: 0;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}

.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	opacity: 1;
	transition: all 0.3s ease;
    z-index: 0;
    position: fixed;
}


.mui-bar-tab .mui-tab-item-11b.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-11b {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-11b .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-11b .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>