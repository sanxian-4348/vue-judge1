<template>
  <div class="landing-page">
    
    <header class="navbar">
      <h2 class="logo">九章文理補習班</h2>
      <nav>
        <a href="#highlight">關於我們</a>
        <a href="#features">課程師資</a>
        <button @click="$router.push('/login')" class="login-btn">登入記帳系統</button>
        <button @click="$router.push('/practice')" class="login-btn">程式練習場</button>
        <button @click="$router.push('/news')" class="login-btn">近期公告</button>
      </nav>
    </header>

    
    <section class="hero">
      <div class="hero-shapes">
        <span class="shape shape1"></span>
        <span class="shape shape2"></span>
        <span class="shape shape3"></span>
      </div>
      <div class="hero-content">
        <h1><span>理論</span>與<span>實作</span>並肩，培養未來工程師</h1>
        <p>九章文理補習班，不只是補習班，更是孩子通往工程師之路的啟蒙地！</p>
      </div>
    </section>

   
    <section id="highlight" class="highlight">
      <h2>啟發 AI 時代的工程師 — 九章文理補習班</h2>
      <ul>
        <li>✔ 虎尾第一、專注「培養未來工程師」</li>
        <li>✔ 國小數理資優班｜國中數理衝刺班｜APCS程式檢定班</li>
        <li>✔ 最強師資：理論＋電路程式實作，學得會、用得出來</li>
        <li>✔ 數理英文全方位強化，奠定未來核心競爭力</li>
        <li>✔ 課程緊貼 AI 科技趨勢，帶孩子搶先一步</li>
      </ul>
    </section>

   
    <section id="features" class="features">
      <h2>九章師資</h2>
      <div class="feature-list">
        <div class="feature">
          <div class="avatar"></div>
          <h3>阿凱老師</h3>
          <p>國立清華大學資訊工程系</p>
          <p>遊戲程式設計助教</p>
          <p>2015學測73級分</p>
        </div>
        <div class="feature">
          <div class="avatar"></div>
          <h3>阿明老師</h3>
          <p>臺灣科技大學資訊工程系</p>
          <p>鈊象電子遊戲開發經歷3年</p>
          <p>盈米科技VR遊戲開發2年經歷</p>
          <p>天瀚科技國際後端工程師3年經歷</p>
        </div>
      </div>
    </section>

    
    <footer class="footer">
      <p>© 2025 九章文理補習班</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const revealElements = ref([]);

onMounted(() => {
  revealElements.value = document.querySelectorAll('.highlight, .feature');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, 
    { threshold: 0.2 }
  );
  
  revealElements.value.forEach(el => observer.observe(el));

  // Navbar 滾動陰影
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap');

* { 
  box-sizing:border-box; 
  font-family:'Noto Sans TC',sans-serif; 
  margin:0; 
  padding:0; 
}
body { 
  background:#f5f7fa; 
  color:#333; 
}
html { 
  scroll-behavior: smooth; 
} 

/* Navbar */
.navbar { 
  position: fixed; /* 固定在最上方 */
  top:0;
  left:0;
  width:100%;
  z-index:1000;
  display:flex; 
  justify-content:space-between; 
  align-items:center;
  padding:1em 2em; 
  background:#26a69a; 
  color:white; 
  border-radius:0 0 12px 12px;
  transition: box-shadow 0.3s ease;
}
.navbar.scrolled {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.landing-page {
  padding-top: 80px; 
}

.logo { 
  font-weight:700; 
  font-size:1.5em; 
}
.navbar nav { 
  display:flex; 
  align-items:center; 
  gap:1em; 
}
.navbar a { 
  color:white; 
  text-decoration:none; 
  font-weight:bold; 
  transition:0.3s; 
}
.navbar a:hover { 
  text-decoration:underline; 
}
.navbar .login-btn {
  background:white; 
  color:#26a69a; 
  padding:0.5em 1em; 
  border-radius:8px; 
  border:none;
  cursor:pointer; 
  font-weight:600; 
  transition: all 0.3s ease;
}
.navbar .login-btn:hover { 
  background: linear-gradient(45deg, #26a69a, #80cbc4);
  color:white;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

/* Hero */
.hero { 
  margin:4em 0; 
  text-align:center; 
  padding:3em 1em; 
  position:relative; 
  overflow:hidden; 
  border-radius:16px; 
  background:linear-gradient(135deg,#e0f7fa,#ffffff); 
}
.hero-content { 
  position:relative; 
  z-index:2; 
}
.hero h1 { 
  font-size:2.8em; 
  color:#004d40; 
  line-height:1.3; 
  opacity:0; 
  animation:fadeInUp 1s ease forwards; 
  animation-delay:0.2s; 
}
.hero h1 span { 
  background: linear-gradient(45deg, #26a69a, #80cbc4); 
  background-clip: text; 
  -webkit-text-fill-color: transparent; 
}
.hero p { 
  margin-top:1em; 
  font-size:1.2em; 
  color:#555; 
  opacity:0; 
  animation:fadeInUp 1s ease forwards; 
  animation-delay:0.5s; 
}

/* Hero shapes */
.hero-shapes { 
  position:absolute; 
  top:0; left:0; 
  width:100%; 
  height:100%; 
  overflow:hidden; 
  z-index:1; 
}
.shape { 
  position:absolute; 
  border-radius:50%; 
  opacity:0.15; 
}
.shape1 { 
  width:200px; 
  height:200px; 
  background:#26a69a; 
  top:10%; left:5%; 
  animation:float 6s ease-in-out infinite, rotate 20s linear infinite;
}
.shape2 { 
  width:300px; 
  height:300px; 
  background:#80cbc4; 
  bottom:5%; 
  right:10%; 
  animation:float 8s ease-in-out infinite, rotate 25s linear infinite;
}
.shape3 { 
  width:150px; 
  height:150px; 
  background:#004d40; 
  top:30%; right:20%; 
  animation:float 7s ease-in-out infinite, rotate 18s linear infinite;
}

/* Highlight */
.highlight { 
  background:rgba(255,255,255,0.9); 
  margin:3em auto; padding:2em; 
  border-radius:16px; 
  max-width:900px; 
  box-shadow:0 8px 20px rgba(0,0,0,0.08); 
  backdrop-filter:blur(6px); 
  opacity:0; 
  transform:translateY(30px) scale(0.98); 
  transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}
.highlight.reveal { 
  opacity:1; 
  transform:translateY(0) scale(1); 
}
.highlight h2 { 
  font-size:1.8em; 
  color:#004d40; 
  margin-bottom:1em; 
}
.highlight ul { 
  list-style:none; 
  padding-left:0; 
}
.highlight li { 
  margin-bottom:0.8em; 
  font-size:1.1em; 
  line-height:1.5; 
  color:#333; 
}

/* Features / 師資 */
.features { 
  margin-top:4em; 
  padding-top:3em;
  text-align:center; 
  background: linear-gradient(180deg, #ffffff 0%, #f1fdfc 100%);
  border-radius: 20px;
}
.features h2 { 
  font-size:2em; 
  margin-bottom:1.5em; 
  color:#004d40; 
}
.feature-list { 
  display:flex; 
  flex-wrap:wrap; 
  justify-content:center; 
  gap:2em; 
}
.feature { 
  background:rgba(255,255,255,0.95); 
  padding:2em 1.5em; 
  border-radius:16px;
   width:240px; 
   box-shadow:0 6px 15px rgba(0,0,0,0.08); 
   transition:transform 0.3s, box-shadow 0.3s; 
   text-align:center; 
   display:flex; 
   flex-direction:column; 
   align-items:center; 
   backdrop-filter:blur(6px); 
   opacity:0; 
   transform:translateY(30px) scale(0.98);
   transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}
.feature.reveal { 
  opacity:1; 
  transform:translateY(0) scale(1);
}
.feature:hover { 
  transform:translateY(-6px); 
  box-shadow:0 12px 25px rgba(0,0,0,0.15);
}
.feature h3 { 
  margin-bottom:0.5em; 
  color:#004d40; 
  font-weight:700;
}
.feature p { 
  font-size:0.95em; 
  color:#555; 
  line-height:1.4; 
  margin-bottom:0.3em;
}
.avatar { 
  width:80px; 
  height:80px; 
  border-radius:50%; 
  background:#26a69a; 
  margin-bottom:1em; 
}

/* Footer */
.footer { 
  margin-top:3em; 
  padding:2em 1em; 
  background:#e0f2f1; 
  color:#004d40; 
  border-radius:12px 12px 0 0; 
  text-align:center; 
}

/* Animations */
@keyframes float { 
  0%,100%{
    transform:translateY(0) translateX(0);
  } 
  50%{
    transform:translateY(-20px) translateX(10px);
  } 
}
@keyframes fadeInUp { 
  0%{ opacity:0; transform:translateY(20px);} 
  100%{ opacity:1; transform:translateY(0);} 
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
