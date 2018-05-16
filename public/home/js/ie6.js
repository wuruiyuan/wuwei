// 设定需要渲染的DOM对象 
DD_belatedPNG.fix('.png_bg'); 
//解决(让IE6缓存背景图片)
document.execCommand("BackgroundImageCache", false, true);