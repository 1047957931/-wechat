/**
 * wxid-微信id
 * initial-姓名首字母
 * headerUrl-头像地址
 * nickname-昵称
 * sex-性别 男1女0
 * remark-备注
 * signature-个性签名
 * telphone-电话号码
 * album-相册
 * area-地区
 * from-来源
 * desc-描述
 */
const contacts = [{ //昵称备注都有的朋友
        "wxid": "Z202911N",
        "initial": 'z',
        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhouzhou.png",
        "nickname": "周周",
        "sex": 0,
        "remark": "周周",
        "signature": "",
        "telphone": 18912519979,
        "album": [{
            imgSrc: ""
        }],
        "area": ["中国", "盐城", "东台"],
        "from": "",
        "tag": "",
        "desc": {

        }
    }, { //昵称备注都有的朋友
        "wxid": "C200812X",
        "initial": 'Y',
        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/head.png",
        "nickname": "羊习习",
        "sex": 1,
        "remark": "羊习习",
        "signature": "羊习习",
        "telphone": 18061735962,
        "album": [{
            imgSrc: "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pyq.JPG",
            date: 182625262
        },{
          imgSrc: "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pyq2.JPG",
          date: 182625262
        },{
            imgSrc: "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pyq3.JPG",
            date: 182625262
        }],
        "area": ["江苏", "南京"],
        "from": "通过扫一扫",
        "tag": "羊习习",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "J1158641873",
        "initial": 'j',
        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/jyx.JPG",
        "nickname": "蒋亦心",
        "sex": 1,
        "remark": "蒋亦心",
        "signature": "秋",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["江苏", "南京"],
        "from": "通过扫一扫",
        "tag": "秦淮区",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "LJ_541124324",
        "initial": 'l',
        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/lj.JPG",
        "nickname": "刘杰",
        "sex": 1,
        "remark": "刘杰",
        "signature": "恰🐔，上号！",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pyq-lj.JPG",
            date: 182625262
        }],
        "area": ["江苏", "南京"],
        "from": "通过手机号码添加",
        "tag": "柴杰",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wzj991129",
        "initial": 'w',
        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/wzj.JPG",
        "nickname": "王梓君",
        "sex": 1,
        "remark": "王梓君",
        "signature": "中午吃什么",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["苏州", "盛泽"],
        "from": "通过手机号码添加",
        "tag": "君君",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "zhou3107854980",
        "initial": 'z',
        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zwl.JPG",
        "nickname": "周文龙",
        "sex": 1,
        "remark": "周文龙",
        "signature": "帮我带个饭吧",
        "telphone": 13776662062,
        "album": [{
            imgSrc: "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zwl.JPG",
            date: 182625262
        }],
        "area": ["江苏", "淮安"],
        "from": "通过手机号码添加",
        "tag": "淮安",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }, {
        "wxid": "DDp_15252859537",
        "initial": 'd',
        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/ddp.JPG",
        "nickname": "段东坡",
        "sex": 1,
        "remark": "段东坡",
        "signature": "猫和老鼠",
        "telphone": 15252859537,
        "album": [{
            imgSrc: "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/ddp.JPG",
            date: 182625262
        }],
        "area": ["江苏", "宿迁"],
        "from": "通过手机号码添加",
        "tag": "泗洪",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }
]

const contact = {
    contacts
}
contact.getUserInfo = function(wxid) {
    if (!wxid) {
        return;
    } else {
        for (var index in contacts) {
            if (contacts[index].wxid === wxid) {
                return contacts[index]
            }
        }
    }
}

export default contact
