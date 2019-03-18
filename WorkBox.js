importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
// 预缓存静态文件
workbox.precaching.precacheAndRoute([
  '/index.js',
  { url: '/index.html', revision: 'cvxdv' },
]);

// 路由请求缓存
workbox.routing.registerRoute(
  '/a.html',    // 这里的路径可以是当前项目下的绝对路径，也可以是一个完整的URL，但是必须是HTTPS的，也可以是一个正则表达式
  workbox.strategies.staleWhileRevalidate({
    // 使用用户自定义的缓存名称
    cacheName: 'my-first-cache',
    // 使用workbox插件
    plugins: []
  })
);