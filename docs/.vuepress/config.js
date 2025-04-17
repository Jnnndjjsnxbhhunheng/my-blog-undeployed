module.exports = {
  title: "Jnnndjjsnxbhhunheng's blog",
  description: "Jnnndjjsnxbhhunheng's blog",
  base: "/my-blog/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "技术博客",
        items: [
          { text: "学习笔记", link: "/study-notes/index.md" },
          { text: "项目实践", link: "/project-practice/index.md" },
        ],
      },
      {
        text: "Jnnndjjsnxbhhunheng的博客",
        items: [
          { text: "Github", link: "https://github.com/Jnnndjjsnxbhhunheng" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/1968587888403961/posts",
          },
        ],
      },
    ],
    theme: "reco",
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    author: "Jnnndjjsnxbhhunheng",
    authorAvatar: "/avatar.jpg",
    subSidebar: "auto",
    base: "/my-blog/",
    sidebar: {
      "/study-notes/": [
        {
          title: "基础学习",
          path: "/study-notes/index",
          collapsable: true,
          children: [{ title: "es6", path: "/study-notes/Es6" }],
        },
      ],
      "/": [],
    },
  },
};
