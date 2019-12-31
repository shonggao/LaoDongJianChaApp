import Vue from 'vue';

//手动导入安装VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter)

//导入vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//导入图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
})

//导入文件上传插件
const VueUploadComponent = require('vue-upload-component')
Vue.component('file-upload', VueUploadComponent)

var store = new Vuex.Store({
    state:{
        companyInfoList: [
        ],
        inspectionList:[],
        inspectionCompanyInfoList:[],
        docVarList: {},
        caseList:[
        ],
        overDownList:[
        ]
    },
    mutations:{
        addCompanyInfo(state,companyInfo){
            state.companyInfoList.unshift(companyInfo);
        },
        deleteCompanyInfo(state,CompanyInfoIndex){
            state.companyInfoList.splice(CompanyInfoIndex,1);
        },
        updateCompanyInfo(state, data) {
            console.log(data)
            state.companyInfoList.splice(data.index,1,data.companyInfo);
        },
        pushCompanyInfo(state,data){
            state.companyInfoList.push(...data);
        },
        addInspectionCompany(state,inspectionCompany){
            state.inspectionList.unshift(inspectionCompany);
        },
        deleteInspectionCompany(state,inspectionCompanyIndex){
            state.inspectionList.splice(inspectionCompanyIndex,1);
        },
        updateInspectionCompany(state, data) {
            // console.log(data)
            state.companyInfoList.splice(data.index,1,data.inspectionCompany);
        },
        pushInspectionCompany(state,data){
            state.inspectionList.push(...data);
        },
        addInspectionCompanyInfo(state,inspectionCompanyInfo){
            state.inspectionCompanyInfoList.unshift(inspectionCompanyInfo);
        },
        deleteInspectionCompanyInfo(state,inspectionCompanyInfoIndex){
            state.inspectionCompanyInfoList.splice(inspectionCompanyInfoIndex,1);
        },
        updateInspectionCompanyInfo(state, data) {
            // console.log(data)
            state.inspectionCompanyInfoList.splice(data.index,1,data.inspectionCompanyInfo);
        },
        pushInspectionCompanyInfo(state,data){
            state.inspectionCompanyInfoList.push(...data);
        },
        addCase(state,CaseInfo){
            state.caseList.unshift(CaseInfo);
        },
        deleteCase(state,CaseIndex){
            // console.log('deletecase');
            state.caseList.splice(CaseIndex,1);
        },
        addOverDownCase(state,CaseIndex){
            state.overDownList.unshift(state.caseList[CaseIndex]);
        },
        pushdocVarList(state,docVarList){
            state.docVarList = docVarList;
        }
    }
})


//导入 MUI 的样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import './lib/mui/css/mui.picker.min.css';
import './lib/mui/css/app.css';

// 初始化MUI






import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);



//导入vue-resource
import VueResource from 'vue-resource'; 
//安装vue-resource
Vue.use(VueResource);

//全局设置post时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;
// Vue.http.options.root = 'http://172.16.3.186:8081/';
// Vue.http.options.xhr = {
//     withCredentials: true
// }
// Vue.http.options.root = 'http://172.16.10.84:8081/';
// Vue.http.options.root = 'http://192.168.190.205:8080/fhadmin/';


// Vue.http.options.root = 'http://192.168.190.205:8080/fhadmin/';

Vue.http.options.root = 'http://59.173.9.77:8080/fhadmin/';

//导入APP根组件
import app from './APP.vue';

//导入格式化时间的插件
import moment from 'moment';

//导入自己的router.js路由模块
import router from './router.js';

//导入mock.js模块
// import './js/api';

//定义全局时间过滤器
Vue.filter('dateFormat',function(dataStr, pattern="YYYY-MM-DD HH:mm"){
    return moment(dataStr).format(pattern)
})

Vue.filter('undefinedTo',function(dataStr, pattern = '——'){
    if (dataStr == "UNDEFINED" || dataStr == "undefined" || dataStr == ""){
        return pattern;
    }
    return dataStr;
})

// mui.init();

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})