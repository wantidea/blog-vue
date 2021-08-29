import hljs from 'highlight.js/lib/core'

import php from 'highlight.js/lib/languages/php'
import go from 'highlight.js/lib/languages/go'
// import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import nginx from 'highlight.js/lib/languages/nginx'
import sql from 'highlight.js/lib/languages/sql'
// import typescript from 'highlight.js/lib/languages/typescript'
import c from 'highlight.js/lib/languages/c'
// import cpp from 'highlight.js/lib/languages/cpp'
import java from 'highlight.js/lib/languages/java'
// import css from 'highlight.js/lib/languages/css'
// import markdown from 'highlight.js/lib/languages/markdown'
import xml from 'highlight.js/lib/languages/xml'
import python from 'highlight.js/lib/languages/python'
import scss from 'highlight.js/lib/languages/scss'
// import less from 'highlight.js/lib/languages/less'
import http from 'highlight.js/lib/languages/http'
import ini from 'highlight.js/lib/languages/ini'

hljs.registerLanguage('php', php)
hljs.registerLanguage('go', go)
// hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('json', json)
hljs.registerLanguage('nginx', nginx)
hljs.registerLanguage('sql', sql)
// hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('c', c)
// hljs.registerLanguage('cpp', cpp)+
hljs.registerLanguage('java', java)
// hljs.registerLanguage('css', css)
// hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('python', python)
hljs.registerLanguage('scss', scss)
// hljs.registerLanguage('less', less)
hljs.registerLanguage('http', http)
hljs.registerLanguage('ini', ini)

export default hljs
