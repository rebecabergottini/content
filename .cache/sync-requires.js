// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/templates/blog-post.js")),
  "component---src-templates-lesson-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/templates/lesson.js")),
  "component---src-templates-tags-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/templates/tags.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/pages/index.js")),
  "component---src-pages-lessons-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/pages/lessons.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/pages/page-2.js")),
  "component---src-pages-tags-js": preferDefault(require("/Users/rafaelesaa/workspaces/gatsby-content/content/src/pages/tags.js"))
}

exports.json = {
  "layout-index.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/layout-index.json"),
  "error-hola-error.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/error-hola-error.json"),
  "how-to-how-to-assets.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/how-to-how-to-assets.json"),
  "how-to-install-node-npm-mac-osx.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/how-to-install-node-npm-mac-osx.json"),
  "lesson-about-react-js.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/lesson-about-react-js.json"),
  "lesson-mentoring-guidelines.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/lesson-mentoring-guidelines.json"),
  "lesson-intro-to-prework.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/lesson-intro-to-prework.json"),
  "lesson-internet-arquitecture.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/lesson-internet-arquitecture.json"),
  "tags-fale.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/tags-fale.json"),
  "tags-animals.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/tags-animals.json"),
  "tags-alejandro.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/tags-alejandro.json"),
  "tags-node.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/tags-node.json"),
  "tags-npm.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/tags-npm.json"),
  "tags-osx.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/tags-osx.json"),
  "dev-404-page.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/404.json"),
  "about.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/about.json"),
  "index.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/index.json"),
  "lessons.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/lessons.json"),
  "page-2.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/page-2.json"),
  "tags.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/tags.json"),
  "404-html.json": require("/Users/rafaelesaa/workspaces/gatsby-content/content/.cache/json/404-html.json")
}