
   function infort()
   {
    axios.get(`/my/userinfo`).then(function(res) {
      if (res.data.status !== 0) {
          return layer.msg(`用户信息获取失败`);
      }
      msgGet(res.data)
    })
   }
   infort()
   function msgGet(res) {
      let name = res.data.nickname || res.data.username
      $(`#nameaa`).text(`用户名 `+name)
      if (res.data.user_pic){
          $(`.layui-nav-img`).attr(`str`,res.data.user_pic).show()
          $(`#firstname`).hide()
      }
      else{
        $(`.layui-nav-img`).hide()
        $(`.firstname`).text(name[0].toUpperCase()).show()
      }
   }
   $(`#tuichu`).on(`click`,function() {
       console.log(`1`);
    layer.confirm('确定吗?', {icon: 3, title:'确定要退出当前登录吗'}, function(index){
        //do something
        localStorage.removeItem(`localstoken`)
        location.href = `/home/login.html`
        layer.close(index);
      });
   })
