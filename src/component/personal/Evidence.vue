<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">查看取证</a>
        </header>
        <div class="card-container">
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <!-- 缩略图区域 -->
                    <div class="thumbs">
                        <vue-preview class="preimg" :slides="list" @close="handleClose"></vue-preview>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <!-- 缩略图区域 -->
                    <div class="thumbs">
                        <vue-preview class="preimg" :slides="list" @close="handleClose"></vue-preview>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <!-- 缩略图区域 -->
                    <div class="thumbs">
                        <vue-preview class="preimg" :slides="list" @close="handleClose"></vue-preview>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <!-- 缩略图区域 -->
                    <div class="thumbs">
                        <vue-preview class="preimg" :slides="list" @close="handleClose"></vue-preview>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <!-- 缩略图区域 -->
                    <div class="thumbs">
                        <vue-preview class="preimg" :slides="list" @close="handleClose"></vue-preview>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <!-- 缩略图区域 -->
                    <div class="thumbs">
                        <vue-preview class="preimg" :slides="list" @close="handleClose"></vue-preview>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
export default{
    data() {
        return {
            name: "查看取证",
            list: [],
            id: 37
        }
    },
    created() {
        this.$emit("pageChanged");
        this.getThumbs();
    },
    methods: {
        getThumbs(){
            //获取缩略图
            this.$http.get('http://127.0.0.1:8081/api/getthumimages/'+this.id).then(result => {
                if(result.body.status === 0){
                    result.body.message.forEach((item,index) => {
                        item.msrc = item.src;
                        item.alt= 'picture'+index;
                        item.title = 'Image Caption'+index;
                        item.w = 600;
                        item.h = 400;
                    });
                    this.list = result.body.message;
                }
            })
        },
        handleClose () {
            console.log('close event')
        },
        goBack(){
			//点击后退
			this.$router.go(-1);
		}
    },
}
</script>
<style lang="scss" scoped>
    .mui-bar.mui-bar-nav{
        font-size: 19px;
        z-index: 80;
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
            line-height: 52px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #fff;
            font-size: inherit;
        }
    }
.card-container{
    position: absolute;
    width: 100%;
    /* padding-bottom: 13%;     */
    vertical-align: middle;
    .mui-card{
        p{
            margin: 0;
        }
        border-radius: 7px; 
        .thumbs{
            .preimg{
                /deep/ .my-gallery{   
                    margin: 0;
                    padding: 0;
                    flex-wrap:wrap;
                    display: flex;
                    figure{
                        width: 30%;
                        margin: 5px;
                        img{
                            width: 100%;
                            box-shadow: 0 0 8px #999;
                        }
                    }
                }
            }
            
        }
    }
    
}   
</style>