/**
 * 微服务打卡使用头一天的数据
 */
(() => {
  'use strict';
  if (new URL(location.href).pathname !== '/ncov/wap/default/index') {
    console.log('到打卡页面使用，本页面不是打卡页面');
    return;
  }
  const vm = document.querySelector('.form-detail2').__vue__;
  const preGeo = JSON.parse(vm.oldInfo.geo_api_info);
  vm.locatComplete(preGeo);
  vm.save();
})();
