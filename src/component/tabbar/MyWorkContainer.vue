<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()" ><span class="back-btn">返回</span></a>
			<mt-navbar class="mui-title" v-model="selected">
                <mt-tab-item id="1" >待办任务</mt-tab-item>
                <mt-tab-item id="2" >已办任务</mt-tab-item>
            </mt-navbar>
            <a class="mui-icon mui-icon-plusempty mui-pull-right" @click="goAddCase" v-show="flag"></a>
		</header>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                    <div class="card-container">
                        <div class="mui-card" v-for="(item,index) in caseList" :key="index">
                            <div class="mui-card-header">
                                {{ item.caseTitle }}
                                <p>{{ item.dateTime | dateFormat }}</p>
                            </div>
                            <div class="mui-card-content">
                                <div class="mui-card-content-inner">
                                    <p>
                                        <span>任务内容：	{{ item.caseContent }}</span>&nbsp;
                                        <span>{{ item.caseType }}</span>&nbsp;
                                        <span>{{ item.caseNumber }}</span>
                                    </p>
                                    <p>上一环节办理人：{{ item.lastPerson }}</p>
                                    <p>承办人：{{ item.underTaker }}</p>
                                </div>
                            </div>
                            <div class="mui-card-footer">
                                <mt-button type="primary" size="normal" @click="goCaseHandle(item.type,index)">案件处理</mt-button>
                            </div>
                        </div>
                    </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="card-container">
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                    <div class="mui-card">
                        <div class="mui-card-header">
                            劳动保障监察处理流程
                            <p>2018-11-30 10:28</p>
                        </div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <p>
                                    <span>任务内容：	武汉浩天电子股份有限公司</span>&nbsp;
                                    <span>调查取证</span>&nbsp;
                                    <span>武昌劳社监案字[2018]第4882号</span>
                                </p>
                                <p>上一环节办理人：王娟</p>
                                <p>承办人：李伟</p>
                            </div>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>    
    </div>
</template>
<script>


import {Toast} from 'mint-ui';
export default{
    data() {
        return {
            name: "待办任务 已办任务",
            selected: "1",
            flag: true,
            caseList: []
        }
    },
    created() {
        this.getCaseList();
        this.$emit("pageChanged",true);
    },
    methods: {
        appInfoShow(){
            let instance = Toast('本系统正在升级'+"\n"+'预计2019年10月正式上线运行');
            setTimeout(() => {
            instance.close();
            }, 2000);
        },
        getCaseList(){
            this.caseList = this.$store.state.caseList;
        },
        goCaseHandle(type,id){
            this.$router.push("/mywork/casehandle/"+type+"/"+id);
        },
        goAddCase(){
            this.$router.push("/mywork/addcase");
        },
        goBack(){
			//点击后退
			this.$router.go(-1);
		}
    },
    watch: {
        'selected': function(newVal){
            if(newVal == "1"){
                this.flag = true;
            }else{
                this.flag = false;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.mui-bar.mui-bar-nav{
    font-size: 19px;
    z-index: 99;
    height: 50px;
    background-color: #26a2ff;
    .mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left{
        color: #fff;
        padding-top: 14px;
        .back-btn{
            font-size: 19px;
            font-weight: bold;
        }
    }
    .mui-title{
        height: 50px;
        background-color: #26a2ff;
        display: flex;
        justify-content: center;
        overflow: hidden;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
        font-size: inherit;
    }
    .mui-pull-right{
        color: #fff;
        background-color: inherit;
        font-weight: bold;
    }
}
.card-container{
    position: absolute;
    /* height: 100%; */
    width: 100%;
    padding-bottom: 50px;    
    vertical-align: middle;
    p{
        margin: 0;
    }
    .mui-card{
        border-radius: 7px; 
        .mui-card-content-inner{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5px;
        }
    }
    
}
.mint-tab-container{
    width: 100%;
    position: initial;
    overflow: auto;
}
/deep/.mint-tab-item-label {
    color: inherit;
    font-size: 19px;
    line-height: 1;
    width: 90px;
}
/deep/.mint-tab-item {
    display: flex;
    text-decoration: none;
    flex: unset;
}
/deep/.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid white;
    color: #fff;
    margin-bottom: 4px;
}
</style>