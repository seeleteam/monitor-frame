function getCookie (name, defaultValue) {
  let arr, reg
  arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr === document.cookie.match(reg)) {
    return unescape(arr[2])
  } else {
    return defaultValue
  }
}

export { getCookie }
