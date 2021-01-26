(function () {
    let form = layui.form
    form.verify({
        nicheng: function (value, item) { //value：表单的值、item：表单的DOM对象
            if (value.length > 6) {
                return '昵称长度过长'
            }
        }
    })
    axios.get(`/my/userinfo`).then(function (res) {
        let form = layui.form
        form.val(`fuzhi`, res.data.data)
        $(`form`).on(`submit`, function (e) {
            e.preventDefault()
            let data = $(`form`).serialize()
            axios.post(`/my/userinfo`, data).then(function (res) {
                if (res.data.status !== 0) {
                  return layer.msg(`修改信息失败`)
                }
                layer.msg(res.data.message)
                window.parent.infort()
            })
        })
    })
    $(`#chongxin`).on(`click`,function(e) {
        e.preventDefault()
        axios.get(`/my/userinfo`).then(function (res) {
            let form = layui.form
            form.val(`fuzhi`, res.data.data)
        })
    })
})()