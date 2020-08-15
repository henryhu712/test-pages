// group.js

//const axios = require('axios')

const express = require('express');
const router = express.Router();

/*
const check_openid = require('../my_modules/check_openid')
const get_gzhs = require('../my_modules/get_gzhs')
const get_week_gzhs = require('../my_modules/get_week_gzhs')
const get_week_award = require('../my_modules/get_week_award')
const get_articles = require('../my_modules/get_articles')
*/


router.get('/', (req, res, next) => {

  const pagedata = {
    site_prefix: process.env.SITE_PREFIX,
    gzhs: [],
    week_gzhs: [],
    week_award: [],
    articles: [],
  }

  if (!req.query.token || req.query.token.length < 10) {
    res.send('nono...')
    return next()
  }

  console.log('yes')

  const me = ''



  /*
  if (req.query.code && req.query.code.length > 10) { // Callback from WeChat.

    const appid = process.env.OFFICIAL_appid
    const secret = process.env.OFFICIAL_secret

    // base, userinfo
    const state = req.query.state

    axios.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${req.query.code}&grant_type=authorization_code`)
      .then( async (res1) => {

        if (res1.data.openid && res1.data.access_token && res1.data.refresh_token) {

          let res2
          let uid = 0
          try {
            res2 = await check_openid(res1.data, state)
            uid = res2.id
            pagedata.gzhs = await get_gzhs()
            pagedata.articles = await get_articles()
          } catch (err2) {
            console.log('Error check_openid')
            throw 323
          }


          pagedata.nickname = res2.nickname ? res2.nickname : '[' + res2.id + ']'
          pagedata.uid = uid
          pagedata.token = res2.token

          pagedata.json_articles = '[]'


          pagedata.official_account_number = pagedata.gzhs.length
          pagedata.article_number = pagedata.articles.length


          pagedata.chou_jiang_str = {
          }


          pagedata.chou_jiang = {
          }


          res.render('community', pagedata)


          } else {
            // 刷新本页
            res.writeHead(301, { Location: process.env.URL_BASE + '/login?dest=community' })
            res.end()
          }
        })
        .catch(er => {
          console.log('Fail rr23456')
          res.send('Error 290021')
        })
  }
  else {
    // 判断是否在微信内
    const ua = req.headers['user-agent'].toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      res.writeHead(301, { Location: process.env.URL_BASE + '/login?dest=community' })
      res.end()
    }
    else {
      res.send('<h2>请复制网址，然后在微信中访问本页面。https://businessonwechat.com/gzh/login</h2>');
    }
  }
  */

})

module.exports = router
