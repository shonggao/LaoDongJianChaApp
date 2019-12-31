<template>
    <div class="app-container">
        <transition :name="transitionName" @before-enter="beforeEnter" @after-enter="afterEnter">
		    <router-view @pageChanged="titleChanged"></router-view>
        </transition>
        
        <nav class="mui-bar mui-bar-tab" v-show="flag" :style="style" ref="tabbar">
			<router-link class="mui-tab-item-11b" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-11b" to="/mywork">
				<span class="mui-icon mui-icon-compose"></span>
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
            flag: false,
            transitionName: 'slide-left',
            length: window.history.length,
            style: {
                position: "fixed",
                // top: "100%",
                // transform: "translateY(-100%)",
            }
        }
    },
    mounted() {
        console.log('mounted')
    },
    beforeRouteEnter (to, from, next) {
        // ...
        console.log(this);
        console.log(to,from);
    },
    methods: {
        titleChanged(flag=false){
            this.flag = flag;
            // console.log('routerchanged');
        },
        beforeEnter(el){
            // 获取底部栏在页面中的位置
            // const tabPosition = this.$refs.tabbar.getBoundingClientRect();
            // console.log('beforenter');
            // this.style = {
            //     position: "absolute",
            //     // transform: "translateY(-100%)",
            // }
        },
        beforeLeave(el){
        },
        afterEnter(el){
            this.style = {
                position: "fixed",
            }
        }
    },
    watch: {
        '$route' (to, from) {
            if(from.path == '/' || from.path == '/login' ){
                this.transitionName = 'slide-left';
            }
            // else if(to.path == '/home'){
            //     this.transitionName = 'slide-right';
            // }
            else{
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                if(toDepth == 2 && fromDepth == 2){
                    const toPath = to.path.split('/')[1];
                    const fromPath = from.path.split('/')[1];
                    var pathArr = ['home','mywork','companymanager','personal'];
                    const toIndex = pathArr.indexOf(toPath);
                    const fromIndex = pathArr.indexOf(fromPath);
                    this.transitionName = toIndex - fromIndex > 0 ? 'slide-left' : 'slide-right';
                }
                else{
                    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
                }
            }
        }
    },
}
</script>
<style lang="scss">
.mui-bar.mui-bar-nav{
    touch-action: none;
}
.app-container{
	overflow-x: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
	/* padding-bottom: 50px; */
	/* padding-bottom: 50px; */
}
/deep/.mui-bar .mui-bar-tab{
    position: absolute;
    bottom: 0;
}

/* push动画css */
.slide-left-enter{
	opacity: 0;
	transform: translateX(100%);
}

.slide-left-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.slide-left-enter-active,
.slide-left-leave-active{
	opacity: 1;
	transition: all 0.3s ease;
    /* z-index: 0;
    position: relative; */
    position: absolute;
    /* overflow-x: hidden; */
}
/* back动画css */
.slide-right-enter{
	opacity: 0;
	transform: translateX(-100%);
}

.slide-right-leave-to{
	opacity: 0;
	transform: translateX(100%);
	position: absolute;
}

.slide-right-enter-active,
.slide-right-leave-active{
	opacity: 1;
	transition: all 0.3s ease;
    /* z-index: 0;
    position: relative; */
    position: absolute;
    /* overflow-x: hidden; */
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