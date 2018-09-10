import Router from 'next/router'
import Cookies from 'js-cookie'

function parseCookie(cookiestr, name) {
  const matchedCookie = cookiestr.split('; ').find((cookie) => cookie.split('=')[0] === name)
  if (matchedCookie) {
    return matchedCookie.split('=')[1]
  }
  return null
}

export async function authenticateUser({ req, res, query }) {
  const _sha256token = req ? parseCookie(req.headers.cookie, '_sha256token') : Cookies.get('_sha256token')

  if (req && !_sha256token) {
    res.redirect('/index')
    res.end()
    return
  } else if (!req && !_sha256token) {
    document.location.pathname = '/index'
    return
  }
  return
}
