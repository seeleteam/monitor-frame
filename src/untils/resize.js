
const resize = function () {
  var iframe = document.getElementById('iframe')
  iframe.setAttribute('scrolling', 'no')
  if (document.documentElement.clientWidth > 768) {
    var sidebar = document.getElementById('navbar').offsetWidth
    var limit = document.body.clientWidth - sidebar
    var scale = limit / document.getElementById('frame-wrapper').offsetWidth
    // document.getElementById('frame-wrapper').style.width = limit + 'px'
    document.getElementById('frame-wrapper').style.transform = 'scale(' + (scale) + ')'
    document.getElementById('frame-wrapper').style.transformOrigin = '0 0'
    document.getElementById('frame-wrapper').style.height = document.body.clientHeight / scale + 'px'
    iframe.setAttribute('scrolling', 'auto')
  }
}
export default resize
