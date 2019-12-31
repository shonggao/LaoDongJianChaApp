import Mock from 'mockjs'

const url = {
    tableDataOne: 'http://172.16.3.186:8081/admin/check',
    tableDataTwo: 'http://20181024Mock.com/mode1/tableDataTwo',
    tableDataThi: 'http://20181024Mock.com/mode1/tableDataThi',
}
var data = [
    Mock.mock(url.tableDataOne,'post', {
        'result|1' : ['success','error']
    }),
];
export default data;
