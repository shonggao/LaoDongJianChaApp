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
import editCompanyInfo from './component/companymanager/EditCompanyInfo.vue';

//导入inspectioncompany组件
import inspectionCompanyList from './component/companymanager/InspectionCompanyList.vue';
import addInspectionCompany from './component/companymanager/AddInspectionCompany.vue';
import editInspectionCompany from './component/companymanager/EditInspectionCompany.vue';

import inspectionCompanyInfoList from './component/companymanager/InspectionCompanyInfoList.vue';
import addInspectionCompanyInfo from './component/companymanager/AddInspectionCompanyInfo.vue';
import inspectionCompanyInfo from './component/companymanager/InspectionCompanyInfo.vue';

//导入personal组件
import workRecord from './component/personal/WorkRecord.vue';
import evidence from './component/personal/Evidence.vue';
import evidenceDetail from './component/personal/EvidenceDetail.vue';
import download from './component/personal/Download.vue';

//导入mywork组件
import addCase from './component/mywork/AddCase.vue';
// import recordPage from './component/mywork/RecordPage.vue';
import caseHandle from './component/mywork/CaseHandle.vue';

import complaintRegistration from './component/mywork/ComplaintRegistration.vue';  //投诉登记表
import caseRegisterPage from './component/mywork/CaseRegisterPage.vue';  //立案审批表
import caseDeliver from './component/mywork/CaseDeliverPage.vue';  //立案审批表
import carryOutPage from './component/mywork/CarryOutByItselfPage.vue';  //立案审批表
import reformPage from './component/mywork/ReformByItselfPage.vue';  //立案审批表
import trialTransferPage from './component/mywork/TrialTransferPage.vue';  //移送审批表
import trialTransferPolicePage from './component/mywork/TrialTransferPolicePage.vue';  //移送审批表
import fileSendPage from './component/mywork/FileSendPage.vue';  //调查询问通知书
import caseEndPage from './component/mywork/CaseEndPage.vue';  //结案审批表
import planPunishPage from './component/mywork/PlanPunishPage.vue';  //行政处罚决定书
import punishPage from './component/mywork/PunishPage.vue';  //行政处理决定书
import correctionInstruction from './component/mywork/CorrectionInstruction.vue'; //限期改正指令书
import administrativePenaltyPriorNotice from './component/mywork/administrativePenaltyPriorNotice.vue';


// import caseEndPage from './'

// import caseFilePage from './component/mywork/CaseFilePage.vue';
// import rectificationBackPage from './component/mywork/RectificationBackPage.vue';

//创建路由对象
var router = new VueRouter({
    routes: [     // 配置路由规则的
       { path: '/' , redirect: '/login'},

       { path: '/login' , component: loginContainer},             

       { path: '/home' , component: homeContainer},     
       { path: '/mywork' , component: myworkContainer},     
       { path: '/companymanager' , component: companymanagerContainer},     
       { path: '/personal' , component: personalContainer},     

    //    { path: '/companymanager/addcompanyinfo' , component: addCompanyInfo , name: "addcompanyinfo"},
       { path: '/companymanager/companyinfo/add' , component: addCompanyInfo , name: "addcompanyinfo"},                                                           
    //    { path: '/companymanager/companyinfo/:id' , component: companyInfo , name: "companyinfo"},  
       { path: '/companymanager/companyinfo/:id' , component: companyInfo , name: "companyinfo"},  
    //    { path: '/companymanager/companyinfolist' , component: companyInfoList , name: "companyinfolist"},
       { path: '/companymanager/companyinfolist' , component: companyInfoList , name: "companyinfolist"},
    //    { path: '/companymanager/editcompanyinfo/:id', component: editCompanyInfo, name: "editcompanyinfo"}, 
       { path: '/companymanager/companyinfo/edit/:id', component: editCompanyInfo, name: "editcompanyinfo"},                  

          
    //    { path: '/companymanager/inspectioncompanylist', component: inspectionCompanyList, name:"inspectioncompanylist"}, 
       { path: '/companymanager/inspectioncompanylist', component: inspectionCompanyList, name:"inspectioncompanylist"},
    //    { path: '/companymanager/addinspectioncompany', component: addInspectionCompany, name: "addinspectioncompany"},
       { path: '/companymanager/inspectioncompany/add', component: addInspectionCompany, name: "addinspectioncompany"},
    //    { path: '/companymanager/editinspectioncompany/:id', component: editInspectionCompany, name: "editinspectioncompany"},
       { path: '/companymanager/inspectioncompany/edit/:id', component: editInspectionCompany, name: "editinspectioncompany"}, 


    //    { path: '/companymanager/inspectioncompanyinfolist/:id', component: inspectionCompanyInfoList, name: "inspectioncompanyinfolist"},
       { path: '/companymanager/inspectioncompanyinfolist/:id', component: inspectionCompanyInfoList, name: "inspectioncompanyinfolist"},
       { path: '/companymanager/inspectioncompanyinfo/add/:id', component: addInspectionCompanyInfo, name: "addinspectioncompanyinfo"}, 
       { path: '/companymanager/inspectioncompanyinfo/edit/:id', component: inspectionCompanyInfo, name: "inspectioncompanyinfo"}, 

       
       { path: '/personal/workrecord' , component: workRecord , name: "workrecord"},
       { path: '/personal/evidence' , component: evidence , name: "evidence"},                                              
       { path: '/personal/evidence/:caseID/fileList' , component: evidenceDetail , name: "evidenceDetail"},                                              
       { path: '/personal/download' , component: download , name: "download"},                                                                                                   
                                                 
       { path: '/mywork/addcase' , component:  addCase, name: "addcase"},
      //  { path: '/mywork/recordpage' , component:  recordPage, name: "recordpage"},
       { path: '/mywork/complaintregistration/:formKey0' , component: complaintRegistration, name: "complaintregistration"},
       { path: '/mywork/caseregisterpage/:formKey0' , component: caseRegisterPage, name: "caseregisterpage"},
       { path: '/mywork/casedeliver/:formKey0' , component: caseDeliver, name: "casedeliver"},
       { path: '/mywork/carryout/:formKey0' , component: carryOutPage, name: "carryout"},
       { path: '/mywork/reform/:formKey0' , component: reformPage, name: "reform"},
       { path: '/mywork/planpunishpage/:formKey0' , component:  planPunishPage, name: "planpunishpage"},
       { path: '/mywork/correctioninstruction/:formKey0' , component:  correctionInstruction, name: "correctioninstruction"},
       { path: '/mywork/administrativepenaltypriornotice/:formKey0' , component:  administrativePenaltyPriorNotice, name: "administrativepenaltyprionotice"},
      //  { path: '/mywork/casefilepage' , component:  caseFilePage, name: "casefilepage"},
       { path: '/mywork/punishpage/:formKey0' , component:  punishPage, name: "punishpage"},
       { path: '/mywork/filesendpage/:formKey0' , component:  fileSendPage, name: "filesendpage"},
       { path: '/mywork/trialtransferpage/:formKey0' , component:  trialTransferPage, name: "trialtransferpage"},
       { path: '/mywork/trialtransferpolicepage/:formKey0' , component:  trialTransferPolicePage, name: "trialtransferpolicepage"},
       { path: '/mywork/caseendpage/:formKey0' , component:  caseEndPage, name: "caseendpage"},
       { path: '/mywork/casehandle' , component:  caseHandle, name: "casehandle"},
      //  { path: '/mywork/rectificationbackpage' , component:  rectificationBackPage, name: "rectificationbackpage"},                                                                                                                                                                                                           
                                                                                                                                                                                                                           
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
export default router