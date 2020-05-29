# beaufule
为每个页面添加公共函数
/**
 *
 * Page扩展函数
 *
 * @param {*} Page 原生Page
 */
const pageExtend = Page => {
  return object => {
    // 导出原生Page传入的object参数中的生命周期函数
    object.elementTracker = (e) => {
      if (e.target.dataset.point) {
        const { data, route } = getActivePage();
        const app = getApp();
        console.log(`👨‍💻👀👉`, e.target.dataset.point);
        app.sensors.track('miniPrgButtonClick', {
          belong_page: route,
          button_name: e.target.dataset.point,
          button_id: e.target.dataset.point
        });
      }
    }
    return Page(object)
  }
}

// 获取原生Page
const originalPage = Page
// 定义一个新的Page，将原生Page传入Page扩展函数
Page = pageExtend(originalPage);
在app.js  require('./track/index');加载该文件
