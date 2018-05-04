Page({
  data: {
    markers: [{
      iconPath: "/pages/images/location.png",
      latitude: 23.099994,
      longitude: 113.324520,
      label:{
        content:"哈打扫打扫哈",
        color: "#f43c3c",
        textAlign: "left"
      }
    },
      {
        iconPath: "/pages/images/location.png",
        latitude: 23.099994,
        longitude: 113.324520
      }
      ]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})