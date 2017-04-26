QUnit.module("menu test")
QUnit.test("insert menu and get menus", function(assert) {
  var done = assert.async()
  Promise.all([
    axios.post('service/public/restaurant/menu/submitMenu', {
      dish_type: "甜品",
      dish: {
        name: "黑森林蛋糕"
      }
    }),
    axios.post('service/public/restaurant/menu/submitMenu', {
      dish_type: "甜品",
      dish: {
        name: "西米露"
      }
    }),
    axios.post('service/public/restaurant/menu/submitMenu', {
      dish_type: "垃圾食品",
      dish: {
        name: "炸鸡块"
      }
    }),
    axios.post('service/public/restaurant/menu/submitMenu', {
      dish_type: "垃圾食品",
      dish: {
        name: "炸薯条"
      }
    })
  ]).then(() => {
    assert.ok(true, "插入完成")
    return axios.get('service/public/restaurant/menu/getMenus')
  }).then((result) => {
    assert.ok(result.data.filter((o) => {
      return o.name == "甜品" &&
        o.dishes.filter(o => o.name == "黑森林蛋糕").length > 0 &&
        o.dishes.filter(o => o.name == "西米露").length > 0
    }).length > 0, "获取甜品 OK")
    assert.ok(result.data.filter((o) => {
      return o.name == "垃圾食品" &&
        o.dishes.filter(o => o.name == "炸鸡块").length > 0 &&
        o.dishes.filter(o => o.name == "炸薯条").length > 0
    }).length > 0, "获取垃圾食品 OK")
    done()
  })
})
QUnit.test("delete menu", function(assert) {
  var done = assert.async()
  axios.get('service/public/restaurant/menu/getMenus').then((result) => {
    var data = result.data
    var deleteList = []
    result.data.forEach((o) => {
      o.dishes.forEach((d) => {
        deleteList.push(axios.post('service/public/restaurant/menu/deleteMenu', {
          id: d.menu.id
        }))
      })
    })
    return Promise.all(deleteList)
  }).then(() => {
    return axios.get('service/public/restaurant/menu/getMenus')
  }).then((result) => {
    assert.ok(result.data.every((o) => {
      return o.dishes.length == 0
    }), "删除成功")
    done()
  })
})
