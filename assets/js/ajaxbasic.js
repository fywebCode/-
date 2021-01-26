(function() {
    axios.defaults.baseURL = `http://api-breakingnews-web.itheima.net`
    axios.interceptors.request.use(function (config) {
        if (config.url.includes(`/my`)){
            config.headers.Authorization = localStorage.getItem(`localstoken`)
        }
        // console.log(config);
        return config;
      }, function (error) {
        return Promise.reject(error);
      });
    axios.interceptors.response.use(function (response) {
        if (response.data.status == 1 && response.data.message == `身份认证失败！`)
        {
          // console.log(response);
          location.href = `/home/login.html`
        }
        console.log(response);
        return response;
      }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      });
})()
