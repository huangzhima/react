var Mock=require("mockjs")

var Random = Mock.Random
Random.image()
Random.color()
Random.ctitle()
module.exports= Mock.mock({
    "list|4-6":[{
        "id|+1":1,
        img:"@image('250x250','@color()')",
        text:"@ctitle(2,3)"
    }]
})
// var Mock = require('mockjs')
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// })