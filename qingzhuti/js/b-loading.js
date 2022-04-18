 
//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为140px，高度为140px）
var _LoadingTop = _PageHeight > 140 ? (_PageHeight - 140) / 2 : 0,
    _LoadingLeft = _PageWidth > 140 ? (_PageWidth - 140) / 2 : 0;
//呈现loading效果
document.write(_LoadingHtml);
 
//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};
 
//监听加载状态改变
document.onreadystatechange = completeLoading;
 
//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
// JavaScript Document