var req = new XMLHttpRequest()
var server = 'http://deemo.pw:11519'
req.open('POST',server)
req.setRequestHeader('Content-Type','application/X-www-form-urlencoded')
req.send('website=infas.club\/2018\/rec&userAgent=' + window.navigator.userAgent)
req.onreadystatechange = function () {
  if(req.readyState === XMLHttpRequest.DONE)
    console.log(server + ' responded with status ' + req.status)
}
