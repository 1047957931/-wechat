import Vue from 'vue'
import Vuex from 'vuex'
import OfficialAccounts from "./official-account" //存放所有关注的公众号
import contact from './contacts' //存放所有联系人的数据
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)
    // 统一管理接口域名
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    currentLang: "zh", //h：简体中文
    newMsgCount: 0, //新消息数量
    allContacts: contact.contacts, //所有联系人
    OfficialAccounts: OfficialAccounts, //所有关注的公众号
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
    // 所有接口地址 后期需要
    apiUrl: {
        demo: apiPublicDomain + ""
    },
    msgList: {
        stickMsg: [],
        baseMsg: [{ //普通消息列表
                "mid": 1,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": false,
                "msg": [{
                    "text": "名记：约基奇新冠病毒检测为阳性 没有相关症状",
                    "date": 1488117964495,
                    "name": "周周",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhouzhou.png"
                }, {
                    "text": '重磅！中印防长齐聚俄罗斯参加红场阅兵，是否会晤引发高度关注',
                    "date": 1488117964495,
                    "name": "周周",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhouzhou.png"
                }, {
                    "text": '【战疫全时区】巴西新增确诊病例超3.9万例 累计确诊逾114万例',
                    "date": 1488117964495,
                    "name": "周周",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhouzhou.png"
                }],
                "user": [contact.getUserInfo('Z202911N')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "必胜客宅急送",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                        "text": "第一报道｜“后疫情时代”中欧关系再出发，习近平指明前行方向",
                        "date": 1488117964495,
                        "name": "周周",
                        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhouzhou.png"
                    }, {
                        "text": '打赢硬仗中的硬仗，全面小康一个都不能少',
                        "date": 1488117964495,
                        "name": "周周",
                        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhouzhou.png"
                    },
                    {
                        "text": '发射成功，北斗收官',
                        "date": 1488117964495,
                        "name": "周周",
                        "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhouzhou.png"
                    }
                ],
                "user": [contact.getUserInfo('C200812X'), contact.getUserInfo('Z202911N')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "🏥精神病院304病房💊",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                    "text": '冒个泡',
                    "date": 1488117964495,
                    "name": "王梓君",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/wzj.JPG"
                }],
                "user": [contact.getUserInfo('C200812X'),
                contact.getUserInfo('wzj991129'),
                contact.getUserInfo('LJ_541124324'),
                contact.getUserInfo('J1158641873'),
                contact.getUserInfo('DDp_15252859537'),
                contact.getUserInfo('zhou3107854980'),]
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": "在哪呢",
                    "date": 1488117964495,
                    "name": "王梓君",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/wzj.JPG"
                }, {
                    "text": '中午吃啥呀',
                    "date": 1488117964495,
                    "name": "王梓君",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/wzj.JPG"
                }, {
                    "text": '打包回去吃还是在食堂吃',
                    "date": 1488117964495,
                    "name": "王梓君",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/wzj.JPG"
                }],
                "user": [contact.getUserInfo('wzj991129')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": '恰🐔，上号！',
                    "date": 1488117964495,
                    "name": "刘杰",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/lj.JPG"
                }],
                "user": [contact.getUserInfo('LJ_541124324')]
            },
            {
                "mid": 6,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": true,
                "msg": [{
                    "text": '端午节是不是不上课？',
                    "date": 1488117964495,
                    "name": "蒋亦心",
                    "headerUrl": "https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/jyx.JPG"
                }],
                "user": [contact.getUserInfo('J1158641873')]
            }
        ]
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
