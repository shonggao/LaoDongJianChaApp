import VueRouter from 'vue-router';

//导入登录组件
import loginContainer from './component/Login.vue';

//导入tabbar组件
import homeContainer from './component/tabbar/HomeContainer.vue';
import myworkContainer from './component/tabbar/MyWorkContainer.vue';
import companymanagerContainer from './component/tabbar/CompanyManagerContainer.vue';
import personalContainer from './component/tabbar/PersonalContainer.vue';

//导入companymanager组件
import companyInfo from './component/companymanager/CompanyInfo.vue';
import addCompanyInfo from './component/companymanager/AddCompanyInfo.vue';
import companyInfoList from './component/companymanager/CompanyInfoList.vue';

//导入inspectioncompany组件
import inspectionCompanyList from './component/companymanager/InspectionCompanyList.vue';
import inspectionCompanyInfo from './component/companymanager/InspectionCompanyInfo.vue';
import addInspectionCompany from './component/companymanager/AddInspectionCompany.vue';

//导入personal组件
import workRecord from './component/personal/WorkRecord.vue';
import evidence from './component/personal/Evidence.vue';
import download from './component/personal/Download.vue';

//导入mywork组件
import caseHandle from './component/mywork/CaseHandle1.vue';
import caseHandle2 from './component/mywork/CaseHandle2.vue';
import addCase from './component/mywork/AddCase.vue';

//创建路由对象
var router = new VueRouter({
    routes: [     // 配置路由规则的
       { path: '/' , redirect: '/login'},

       { path: '/login' , component: loginContainer},             

       { path: '/home' , component: homeContainer},     
       { path: '/mywork' , component: myworkContainer},     
       { path: '/companymanager' , component: companymanagerContainer},     
       { path: '/personal' , component: personalContainer},     

       { path: '/companymanager/addcompanyinfo' , component: addCompanyInfo , name: "addcompanyinfo"},                                                           
       { path: '/companymanager/companyinfo/:id' , component: companyInfo , name: "companyinfo"},                                              
       { path: '/companymanager/companyinfolsit' , component: companyInfoList , name: "companyinfolist"},
          
       { path: '/companymanager/inspectioncompanylist', component: inspectionCompanyList, name:"inspectioncompanylist"},
       { path: '/companymanager/inspectioncompanyinfo/:id', component: inspectionCompanyInfo, name: "inspectioncompanyinfo"},  
       { path: '/companymanager/addinspectioncompany', component: addInspectionCompany, name: "addinspectioncompany"},                   
       
       { path: '/personal/workrecord' , component: workRecord , name: "workrecord"},
       { path: '/personal/evidence' , component: evidence , name: "evidence"},                                              
       { path: '/personal/download' , component: download , name: "download"},                                                                                                   
                                                 
       { path: '/mywork/addcase' , component:  addCase, name: "addcase"}, 
       { path: '/mywork/casehandle/1/:id' , component:  caseHandle, name: "casehandle"},
       { path: '/mywork/casehandle/2/:id' , component:  caseHandle2, name: "casehandle2"},                                                                                                                                                                                                                    
                                                                                                                                                                                                                           
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

export default router