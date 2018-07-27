
const resize = function () {
  if (document.documentElement.clientWidth > 768) {
    var sidebar = document.getElementById('navbar').offsetWidth
    var limit = document.body.clientWidth - sidebar
    var scale = limit / 1920
    document.getElementById('frame-wrapper').style.width = limit
    document.getElementById('frame-wrapper').style.height = document.body.clientHeight / scale
    document.getElementById('frame-wrapper').style.transform = 'scaleX(' + (scale) + ')'
    document.getElementById('frame-wrapper').style.transformOrigin = '0 0'
  }
}
export default resize
