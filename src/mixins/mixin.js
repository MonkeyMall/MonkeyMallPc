const mixin = {
  data() {
    return {
      longitude: "",
      latitude: ""
    };
  },
  methods: {
    onGetLocation() {
      var map = new BMap.Map("allmap");
      var geolocation = new BMap.Geolocation();
      const that = this;
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            // console.log("成功", r);
            that.lng = String(r.point.lng);
            that.lat = String(r.point.lat);
            that.onInitDrivePage(that.lng, that.lat);
          } else {
            that.onInitDrivePage();
          }
        },
        function(r) {
          that.onInitDrivePage();
        }
      );
    }
  }
};
export default mixin;
