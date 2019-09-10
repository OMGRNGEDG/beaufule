Page({

  data: {
    scrollSections: [],
    activeIndex: 0,
    msg: [
      {
        title: [
          {
            subTitle: 'A1',
            position: 0,
          }, {
            subTitle: 'A2',
            position: 1,
          },
          {
            subTitle: 'A3',
            position: 2,
          }
        ]
      }, {
        firstChirlen: true
      }, {
        subTitle: 'A1',
        position: 0,
        value: "1"
      }
      , {
        subTitle: 'A1',
        position: 0,
        value: "2"
      }, {
        subTitle: 'A1',
        position: 0,
        value: "3"
      }, {
        firstChirlen: true
      }, {
        subTitle: 'A2',
        position: 1,
        value: "4"
      }, {
        subTitle: 'A2',
        position: 1,
        value: "5"
      }, {
        subTitle: 'A2',
        position: 1,
        value: "6"
      }, {
        firstChirlen: true
      }, {
        subTitle: 'A3',
        position: 2,
        value: "7"
      }, {
        subTitle: 'A3',
        position: 2,
        value: "8"
      }, {
        subTitle: 'A3',
        position: 2,
        value: "9"
      }, {
        subTitle: 'A3',
        position: 2,
        value: "10"
      }, {
        title: [{
          subTitle: 'B1',
          position: 3,
        }, {
          subTitle: 'B2',
          position: 4,
        }]
      }, {
        firstChirlen: true
      }, {
        subTitle: 'B1',
        position: 3,
        value: "B1-1"
      }, {
        subTitle: 'B1',
        position: 3,
        value: "B1-2"
      }, {
        subTitle: 'B1',
        position: 3,
        value: "B1-3"
      }, {
        subTitle: 'B1',
        position: 3,
        value: "B1-4"
      }, {
        subTitle: 'B1',
        position: 3,
        value: "B1-5"
      }, {
        subTitle: 'B1',
        position: 3,
        value: "B1-6"
      }, {
        firstChirlen: true
      }, {
        subTitle: 'B2',
        position: 4,
        value: "B2-7"
      }, {
        subTitle: 'B2',
        position: 4,
        value: "B2-8"
      }, {
        subTitle: 'B2',
        position: 4,
        value: "B2-9"
      }, {
        subTitle: 'B2',
        position: 4,
        value: "B2-10"
      }, {
        title: [{
          subTitle: 'C1',
          position: 5,
        }, {
          subTitle: 'C2',
          position: 6,
        }]
      }, {
        firstChirlen: true
      }, {
        subTitle: 'C1',
        position: 5,
        value: "C1-1"
      }, {
        subTitle: 'C1',
        position: 5,
        value: "C1-2"
      }, {
        subTitle: 'C1',
        position: 5,
        value: "C1-3"
      }, {
        subTitle: 'C1',
        position: 5,
        value: "C1-4"
      }, {
        subTitle: 'C1',
        position: 5,
        value: "C1-5"
      }, {
        subTitle: 'C1',
        position: 5,
        value: "C1-6"
      }, {
        subTitle: 'C1',
        position: 5,
        value: "C1-7"
      }, {
        firstChirlen: true
      }, {
        subTitle: 'C2',
        position: 6,
        value: "C2-8"
      }, {
        subTitle: 'C2',
        position: 6,
        value: "C2-9"
      }, {
        subTitle: 'C2',
        position: 6,
        value: "C2-10"
      }, {
        title: [{
          subTitle: 'D1',
          position: 7,
        }]
      }, {
        firstChirlen: true
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-1"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-2"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-3"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-4"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-5"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-6"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-7"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-8"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-9"
      }, {
        subTitle: 'D1',
        position: 8,
        value: "D1-10"
      }

    ],
    arrs: [{
      title: [{
        subTitle: 'A1',
        position: 0,
      }, {
        subTitle: 'A2',
        position: 1,
      },
      {
        subTitle: 'A3',
        position: 2,
      }
      ],
      content: [{
        subTitle: 'A1',
        position: 0,
        subContent: [
          '1',
          '2',
          '3'
        ]
      }, {
        subTitle: 'A2',
        position: 1,
        subContent: [
          '4',
          '5',
          '6'
        ]
      }, {
        subTitle: 'A3',
        position: 2,
        subContent: [
          '7',
          '8',
          '9',
          '10'
        ]
      }]
    },
    {
      title: [{
        subTitle: 'B1',
        position: 3,
      }, {
        subTitle: 'B2',
        position: 4,
      }],
      content: [{
        subTitle: 'B1',
        position: 3,
        subContent: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
        ]
      }, {
        subTitle: 'B2',
        position: 4,
        subContent: [
          '7',
          '8',
          '9',
          '10',
        ]
      },

      ]
    },
    {
      title: [{
        subTitle: 'C1',
        position: 5,
      }, {
        subTitle: 'C2',
        position: 6,
      }],
      content: [{
        subTitle: 'C1',
        position: 5,
        subContent: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7'
        ]
      }, {
        subTitle: 'C2',
        position: 6,
        subContent: [
          '8',
          '9',
          '10'
        ]
      }]
    },
    {
      title: [{
        subTitle: 'D1',
        position: 7,
      }],
      content: [{
        subTitle: 'D1',
        position: 7,
        subContent: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      }]
    }
    ]
  },


  onReady: function (options) {
    this.getTitleMarginTop((arr, res, heightRes, absoluteRes) => {
      if (res && absoluteRes) {
        this.setData({
          newScrollSec: arr,
          scrollSections: res,
          heightArr: heightRes,
          absoluteSections: absoluteRes
        })
      }
    })
    this.getSubTitleArr((res, arr) => {
      if (res && arr) {
        this.setData({
          subTitleArr: res,
          secondArr: arr
        })
      }
    })
  },

  getSubTitleArr(cb) {
    return wx
      .createSelectorQuery()
      .selectAll('.sub-title-child')
      .boundingClientRect(res => {
        const temp = []
        const firstLen = res[0].top
        const _arr = []
        res && res.map(val => {
          temp.push({ top: (val.top - firstLen), index: val.dataset.index })
          _arr.push(val.top - firstLen)
        })
        cb && cb(temp, _arr)
      }).exec()
  },

  getTitleMarginTop(cb) {
    return wx
      .createSelectorQuery()
      .selectAll('.title-content')
      .boundingClientRect(res => {
        const temp = []
        const heightItem = []
        const absoluteArr = []
        const _arr = []
        res && res.map(val => {
          _arr.push(val.top)
          temp.push({ top: val.top, index: val.dataset.index })
          heightItem.push(val.height)
        })
        temp.map((val, index) => {
          if (index - 1 >= 0) {
            absoluteArr.push({
              min: val.top - heightItem[index - 1],
              max: val.top,
              index: val.index
            })
          }
        });
        cb && cb(_arr, temp, heightItem, absoluteArr)
      })
      .exec()
  },

  onPageScroll() {
    console.log("滚动")
  },
  switchEvent() {
    wx.switchTab({
      url: '/pages/logs/logs',
    })
  }
})