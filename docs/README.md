---
home: true
heroImage: /avatar.jpg
heroImageStyle:
  {
    maxWidth: "400px",
    width: "100%",
    display: block,
    margin: "0 auto 1.5rem",
    borderRadius: "50%",
    boxShadow: "0 5px 18px rgba(0,0,0,0.2)",
  }
heroText: Jnnndjjsnxbhhunheng的博客
tagline: 记录技术成长的点滴
actionLink: /handbook/ConditionalTypes
footer: MIT Licensed | Copyright © 2023 Jnnndjjsnxbhhunheng
---

<div class="selects">
  <!-- 添加 class="select" -->
  <RouterLink to="/tech-sharing/" class="select">
    <h2>技术分享</h2>
    <p>记录前端开发中的技术难点与解决方案</p>
  </RouterLink>
  <RouterLink to="/study-notes/" class="select">
    <h2>学习笔记</h2>
    <p>整理学习过程中的重要知识点</p>
  </RouterLink>
  <RouterLink to="/project-practice/" class="select">
    <h2>项目实践</h2>
    <p>分享实际项目中的经验与心得</p>
  </RouterLink>
</div>

<style>

.selects {
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  flex-wrap: wrap;
}
.select {
  flex-grow: 1;
  flex-basis: 20%;
  max-width: 20%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.select:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
@media (max-width: 719px) {
  .select {
    flex-basis: 100%;
    max-width: 100%;
  }
}

</style>
