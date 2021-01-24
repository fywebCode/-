(function() {
  $(`#zhuce`).click(function() {
      $(`.loginAndRegi`).hide()
      $(`.remlogin`).show()
  })
  $(`#denglu`).click(function() {
      $(`.loginAndRegi`).show()
      $(`.remlogin`).hide()
  })
let form = layui.form;
form.verify({
  rema: function(value,dom){ 
        //value：表单的值、item：表单的DOM对象
       let word = $(`#hhh`).val()
        if(word !== value){
          return `密码与原密码不符合`;
        }
      },
  pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ]
  });      
$(`.remlogin form`).on(`submit`,function(e) {
     e.preventDefault();
     let data = $(this).serialize();
     axios.post(`/api/reguser`,data).then(function(res) {
        if (res.data.status !== 0) {
          return layer.msg(`您的名字已经被注册了`)
        }
        layer.msg(`注册成功`)
        $(`#denglu`).click()
     })
})  
$(`.loginAndRegi form`).on(`submit`,function(e){
  e.preventDefault();
  let data = $(this).serialize()
  console.log(data);
  axios.post(`/api/login`,data).then(function(res){
    console.log(res);
    if (res.data.status !== 0){
      return layer.msg(`登陆失败`)
    }
    let token = res.data.token
    localStorage.setItem(`localstoken`,token)
    layer.msg(res.data.message,function() {
      location.href = `/home/home.html`
    })
    console.log(res);
    // layer.msg(res.data.message,function(){
    //   location.href
    // })
  })
})         
})()