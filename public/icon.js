;(window._iconfont_svg_string_2873205 =
  '<svg><symbol id="icon-arrow-right" viewBox="0 0 1024 1024"><path d="M782.8 511.1 351.9 942c-22.8 22.8-59.8 22.8-82.6 0-22.8-22.8-22.8-59.8 0-82.6L617.5 511.1 269.2 162.8c-22.8-22.8-22.8-59.8 0-82.6 22.8-22.8 59.8-22.8 82.6 0L782.8 511.1 782.8 511.1zM782.8 511.1"  ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var o,
        i,
        c,
        d,
        s,
        a = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      ;(o = function () {
        var t,
          e = document.createElement('div')
        ;(e.innerHTML = n._iconfont_svg_string_2873205),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild ? a(e, t.firstChild) : t.appendChild(e))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o()
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((c = o),
            (d = n.document),
            (s = !1),
            l(),
            (d.onreadystatechange = function () {
              'complete' == d.readyState && ((d.onreadystatechange = null), r())
            }))
    }
    function r() {
      s || ((s = !0), c())
    }
    function l() {
      try {
        d.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(l, 50)
      }
      r()
    }
  })(window)
