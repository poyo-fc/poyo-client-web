import fs from 'fs'
import path from 'path'
import home from './config/home'
import activities from './config/activities'

export default {
  lang: 'ja-JP',
  title: 'POYO - FF XIV FC | Yes, we’re hardcore',
  description: '困難を克服し、絶望を打ち壊し、未踏の地を踏み締める。ぼくたちは、ハードコアの血を流す。',

  head: [
    ['link', { rel: 'icon', href: '/favicon-32.png', sizes: "32x32" }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-MVCFQQQM8W' }],
    ['script', {}, fs.readFileSync(path.resolve(__dirname, './theme/inlines/ga.js'), 'utf-8')]
  ],

  themeConfig: {
    home,
    activities
  }
}
