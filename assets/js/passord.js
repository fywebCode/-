(function(){
   let form = layui.form
   form.verify({
    npw: function(value){ //value：表单的值、item：表单的DOM对象
       let newspassword = $(`#newp`).val()
       console.log(newspassword);
      console.log(value);
      if (value !== newspassword){
        // console.log(value,$(`#resPwd`).val())
          return `与新密码不符`
      }
    },
    opw: function(value){ //value：表单的值、item：表单的DOM对象
      let newspwd = $(`#newp`).val()
      if (value === newspwd){
          // console.log(value,$(`#newp`).val())
          return `与原密码不能相同`
      }
    }
    ,pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ] 
  });  
  $(`form`).on(`submit`,function(e){
    e.preventDefault()
    let data = $(this).serialize()
    axios.post(`/my/updatepwd`,data).then(function(res) {
      if (res.data.status !== 0) {
        return layer.msg(res.data.message)
      }
      layer.msg(res.data.message+`请重新登录`,function() {
        window.parent.location.href = `/home/login.html`
      })
      
    })
  }) 
  $(`#chongxin`).on(`click`,function(e) {
    e.preventDefault()
    $(`form`)[0].reset()
  })   
})()