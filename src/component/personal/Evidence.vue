<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  @click.prevent="goBack"><span class="back-btn">返回</span></a>
            <a class="mui-title">查看取证</a>
            <!-- <a class="mui-icon mui-icon-plusempty mui-pull-right" @click="downs()"></a> -->
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
import { Toast } from "mint-ui";
export default{
    data() {
        return {
            name: "查看取证",
            list: [],
            id: 37,
            src: '',
        }
    },
    created() {
        this.$emit("pageChanged");
        this.getThumbs();
    },
    methods: {
        getThumbs(){
            //获取缩略图
            this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(result => {
                if(result.body.status === 0){
                    result.body.message.forEach((item,index) => {
                        item.msrc = item.src;
                        this.src = item.src;
                        item.alt= 'picture'+index;
                        item.title = 'Image Caption'+index;
                        item.w = 600;
                        item.h = 400;
                    });
                    this.list = result.body.message;
                }
            }, error =>{
                Toast("图片获取失败");
            })
        },
        handleClose () {
            console.log('close event')
        },
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.replace('/personal');            
		},
        downPhoto(photoPath) {
            var pictrueUrl = encodeURI(photoPath);
            console.log(photoPath);
            function saveImageToPhone(url, success, error) {
                console.log(url);
                var canvas, context, imageDataUrl, imageData;
                var img = new Image();
                img.onload = function () {
                canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);
                try {
                    imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
                    imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
                    cordova.exec(
                        success,
                        error,
                        'Canvas2ImagePlugin',
                        'saveImageDataToLibrary',
                        [imageData]
                    );
                }
                catch (e) {
                    error(e.message);
                }
                };
                try {
                    img.src = url;
                }
                catch (e) {
                    error(e.message);
                }
            }

            var success = function (msg) {
            //下载成功
                Toast("下载成功");
            };
            var error = function (err) {
            //下载失败
                Toast("下载失败");
            };
            saveImageToPhone(photoPath, success, error);
        },
        downloadIamge(imgsrc, name) {//下载图片地址和图片名
            var image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute("crossOrigin", "anonymous");
            image.onload = function() {
                var canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                var context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, image.width, image.height);
                var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
            
                var a = document.createElement("a"); // 生成一个a元素
                var event = new MouseEvent("click"); // 创建一个单击事件
                a.download = name || "photo"; // 设置图片名称
                a.href = url; // 将生成的URL设置为a.href属性
                a.dispatchEvent(event); // 触发a的单击事件
            };
            image.src = imgsrc;
        },
        downs(){
            this.downloadIamge('../../image/icon2.png', 'pic')
        },
    },
}
</script>
<style lang="scss" scoped>
    .mui-bar.mui-bar-nav{
        font-size: 19px;
        z-index: 80;
        height: 75px;
        /* background-color: #26a2ff; */
        .mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left{
            color: black;
            padding-top: 39px;
            .back-btn{
                font-size: 19px;
                font-weight: bold;
            }
        }
        .mui-title{
            height: 50px;
            background-color: inherit;
            display: flex;
            justify-content: center;
            overflow: hidden;
            /* font-weight: bold; */
            line-height: 52px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: black;
            font-size: inherit;
        }
        .mui-pull-right{
            font-size: inherit;
            color: black;
            margin-top: 25px;
            background-color: inherit;
            font-weight: bold;
            line-height: 52px;
        }
    }
.card-container{
    position: absolute;
    width: 100%;
    /* padding-bottom: 13%;     */
    height: 100%;
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