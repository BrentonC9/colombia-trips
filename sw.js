<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Packages & Pricing — Colombia Trips Co.</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --gold:     #D4A843;
      --gold-lt:  #F0C96B;
      --gold-dk:  #A07820;
      --night:    #08151E;
      --navy:     #0D1F2D;
      --ocean:    #0B7EA8;
      --ocean-lt: #5EC4E8;
      --sand:     #F5EFE0;
      --sand2:    #EDE4CF;
      --cream:    #FDFAF4;
      --coral:    #E76F51;
      --text:     #0D1A22;
      --text-mid: #4A6070;
      --white:    #FFFFFF;
      --border:   rgba(212,168,67,0.15);
    }
    html{scroll-behavior:smooth}
    body{font-family:'DM Sans',sans-serif;background:var(--night);color:var(--white);overflow-x:hidden}

    /* ── CURSOR GLOW ── */
    #cursorGlow{
      position:fixed;width:320px;height:320px;
      background:radial-gradient(circle,rgba(212,168,67,0.08) 0%,transparent 70%);
      border-radius:50%;pointer-events:none;z-index:9998;
      transform:translate(-50%,-50%);transition:left 0.08s,top 0.08s;
    }

    /* ── NAV ── */
    nav{
      position:fixed;top:0;left:0;right:0;z-index:100;
      padding:0 48px;height:72px;
      display:flex;align-items:center;justify-content:space-between;
      background:rgba(8,21,30,0.92);backdrop-filter:blur(16px);
      border-bottom:1px solid rgba(212,168,67,0.1);
    }
    .nav-logo{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:600;color:#fff;text-decoration:none}
    .nav-logo span{color:var(--gold);font-style:italic}
    .nav-links{display:flex;gap:32px;list-style:none}
    .nav-links a{font-size:13px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.2s}
    .nav-links a:hover,.nav-links a.active{color:var(--gold)}
    .nav-actions{display:flex;align-items:center;gap:10px}
    .nav-login{font-size:13px;padding:9px 22px;border-radius:50px;background:transparent;border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.7);cursor:pointer;text-decoration:none;transition:all 0.2s}
    .nav-login:hover{border-color:var(--gold);color:var(--gold)}
    .nav-btn{font-size:13px;font-weight:500;padding:10px 24px;border-radius:50px;background:var(--gold);border:none;color:var(--text);cursor:pointer;text-decoration:none;transition:background 0.2s,transform 0.15s}
    .nav-btn:hover{background:var(--gold-lt);transform:translateY(-1px)}

    /* ── PAGE HERO ── */
    .page-hero{
      padding:140px 80px 80px;
      background:linear-gradient(160deg,var(--night) 0%,#1A2A18 60%,#0D1F2D 100%);
      position:relative;overflow:hidden;text-align:center;
    }
    .page-hero::before{
      content:'';position:absolute;
      width:600px;height:600px;border-radius:50%;
      background:radial-gradient(circle,rgba(212,168,67,0.08) 0%,transparent 70%);
      top:-200px;left:50%;transform:translateX(-50%);
    }
    .page-hero-label{
      font-size:11px;letter-spacing:3px;text-transform:uppercase;
      color:var(--gold);margin-bottom:16px;display:block;
    }
    .page-hero h1{
      font-family:'Cormorant Garamond',serif;
      font-size:clamp(48px,7vw,88px);
      font-weight:300;color:#fff;
      line-height:1;letter-spacing:-1px;
      margin-bottom:20px;
    }
    .page-hero h1 em{font-style:italic;color:var(--gold)}
    .page-hero p{
      font-size:17px;color:rgba(255,255,255,0.6);
      line-height:1.7;max-width:540px;margin:0 auto 32px;font-weight:300;
    }
    .one-time-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(212,168,67,0.1);
      border:1px solid rgba(212,168,67,0.3);
      border-radius:50px;padding:8px 20px;
      font-size:13px;color:var(--gold);
    }
    .badge-dot{width:7px;height:7px;border-radius:50%;background:var(--gold);animation:pulse 2s infinite}
    @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(1.5)}}

    /* ── PACKAGES GRID ── */
    .packages-section{padding:80px 60px;background:var(--night)}
    .pkg-grid{
      display:grid;grid-template-columns:repeat(3,1fr);
      gap:20px;max-width:1180px;margin:0 auto;
      align-items:start;
    }
    .pkg-card{
      background:rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.07);
      border-radius:24px;padding:44px 36px;
      position:relative;overflow:hidden;
      transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;
    }
    .pkg-card:hover{transform:translateY(-6px);box-shadow:0 24px 60px rgba(0,0,0,0.3)}
    .pkg-card.featured{
      background:rgba(212,168,67,0.06);
      border-color:rgba(212,168,67,0.35);
      box-shadow:0 0 0 1px rgba(212,168,67,0.15);
      transform:scale(1.02);
    }
    .pkg-card.featured:hover{transform:scale(1.02) translateY(-6px)}
    .pkg-card::before{
      content:'';position:absolute;top:0;left:0;right:0;height:2px;
      background:var(--gold);transform:scaleX(0);transform-origin:left;
      transition:transform 0.4s ease;
    }
    .pkg-card:hover::before,.pkg-card.featured::before{transform:scaleX(1)}
    .pkg-popular{
      position:absolute;top:20px;right:20px;
      font-size:10px;letter-spacing:1.5px;text-transform:uppercase;
      color:var(--text);background:var(--gold);
      padding:5px 12px;border-radius:20px;font-weight:500;
    }
    .pkg-num{font-size:12px;letter-spacing:2px;color:rgba(255,255,255,0.2);margin-bottom:16px}
    .pkg-name{
      font-family:'Cormorant Garamond',serif;
      font-size:32px;font-weight:600;color:#fff;margin-bottom:6px;
    }
    .pkg-tagline{font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:24px;font-weight:300}
    .pkg-price{
      font-family:'Cormorant Garamond',serif;
      font-size:64px;font-weight:300;color:#fff;
      line-height:1;margin-bottom:4px;
    }
    .pkg-price sup{font-size:28px;vertical-align:super}
    .pkg-price-note{font-size:12px;color:rgba(255,255,255,0.3);margin-bottom:32px}
    .pkg-divider{height:1px;background:rgba(255,255,255,0.07);margin-bottom:28px}
    .pkg-section-label{
      font-size:10px;letter-spacing:2px;text-transform:uppercase;
      color:var(--gold);margin-bottom:14px;
    }
    .pkg-features{list-style:none;margin-bottom:28px}
    .pkg-features li{
      display:flex;align-items:flex-start;gap:10px;
      font-size:14px;color:rgba(255,255,255,0.65);
      padding:9px 0;border-bottom:1px solid rgba(255,255,255,0.05);
      line-height:1.4;
    }
    .pkg-features li:last-child{border-bottom:none}
    .pf-icon{color:var(--gold);flex-shrink:0;font-size:12px;margin-top:2px}
    .pf-icon.no{color:rgba(255,255,255,0.15)}
    .pkg-features li.dim{color:rgba(255,255,255,0.25)}
    .pkg-cta{
      display:block;text-align:center;
      font-size:14px;font-weight:500;
      padding:15px 28px;border-radius:50px;
      text-decoration:none;transition:all 0.2s;
    }
    .pkg-cta.outline{
      background:transparent;color:rgba(255,255,255,0.7);
      border:1px solid rgba(255,255,255,0.2);
    }
    .pkg-cta.outline:hover{border-color:var(--gold);color:var(--gold)}
    .pkg-cta.solid{
      background:var(--gold);color:var(--text);
      border:none;font-weight:600;
      box-shadow:0 0 28px rgba(212,168,67,0.35);
    }
    .pkg-cta.solid:hover{background:var(--gold-lt);box-shadow:0 0 40px rgba(212,168,67,0.5);transform:translateY(-1px)}

    /* ── COMPARISON TABLE ── */
    .comparison{padding:80px 60px;background:var(--navy)}
    .comparison-header{text-align:center;margin-bottom:56px}
    .comp-label{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
    .comp-title{
      font-family:'Cormorant Garamond',serif;
      font-size:clamp(36px,5vw,52px);
      font-weight:300;color:#fff;
    }
    .comp-title em{font-style:italic;color:var(--gold)}
    .comp-table{
      max-width:1000px;margin:0 auto;
      border-radius:20px;overflow:hidden;
      border:1px solid rgba(255,255,255,0.07);
    }
    .comp-row{
      display:grid;grid-template-columns:2fr 1fr 1fr 1fr;
      border-bottom:1px solid rgba(255,255,255,0.05);
    }
    .comp-row:last-child{border-bottom:none}
    .comp-row.header-row{
      background:rgba(212,168,67,0.08);
      border-bottom:1px solid rgba(212,168,67,0.15);
    }
    .comp-cell{
      padding:16px 20px;
      display:flex;align-items:center;
      font-size:14px;color:rgba(255,255,255,0.6);
    }
    .comp-cell:not(:first-child){
      justify-content:center;text-align:center;
      border-left:1px solid rgba(255,255,255,0.05);
    }
    .comp-row.header-row .comp-cell{
      font-size:13px;font-weight:500;color:rgba(255,255,255,0.9);
      font-family:'Cormorant Garamond',serif;font-size:17px;
    }
    .comp-row.header-row .comp-cell:nth-child(3){color:var(--gold)}
    .comp-cell.feature-name{font-size:14px;color:rgba(255,255,255,0.7)}
    .comp-cell.feature-name strong{color:#fff;font-weight:500;display:block;margin-bottom:2px}
    .comp-cell.feature-name span{font-size:12px;color:rgba(255,255,255,0.35)}
    .comp-row:nth-child(even){background:rgba(255,255,255,0.02)}
    .comp-row.section-header-row{background:rgba(212,168,67,0.04)}
    .comp-row.section-header-row .comp-cell{
      font-size:11px;letter-spacing:2px;text-transform:uppercase;
      color:var(--gold);font-weight:500;
    }
    .check{color:var(--gold);font-size:16px}
    .cross{color:rgba(255,255,255,0.15);font-size:16px}
    .partial{color:var(--ocean-lt);font-size:12px;font-weight:500}

    /* ── FAQ ── */
    .faq{padding:80px 60px;background:var(--night)}
    .faq-header{text-align:center;margin-bottom:56px}
    .faq-label{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
    .faq-title{
      font-family:'Cormorant Garamond',serif;
      font-size:clamp(36px,5vw,52px);
      font-weight:300;color:#fff;
    }
    .faq-title em{font-style:italic;color:var(--gold)}
    .faq-grid{max-width:840px;margin:0 auto;display:flex;flex-direction:column;gap:2px}
    .faq-item{
      background:rgba(255,255,255,0.03);
      border:1px solid rgba(255,255,255,0.06);
      border-radius:12px;overflow:hidden;
    }
    .faq-q{
      width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
      padding:22px 28px;background:none;border:none;cursor:pointer;
      font-family:'DM Sans',sans-serif;font-size:16px;font-weight:400;
      color:#fff;text-align:left;transition:color 0.2s;
    }
    .faq-q:hover{color:var(--gold)}
    .faq-icon{
      width:28px;height:28px;border-radius:50%;
      border:1px solid rgba(255,255,255,0.15);
      display:flex;align-items:center;justify-content:center;
      font-size:16px;color:rgba(255,255,255,0.4);
      flex-shrink:0;transition:all 0.3s;
    }
    .faq-item.open .faq-icon{background:var(--gold);border-color:var(--gold);color:var(--text);transform:rotate(45deg)}
    .faq-a{
      max-height:0;overflow:hidden;
      transition:max-height 0.4s ease,padding 0.3s;
    }
    .faq-item.open .faq-a{max-height:300px}
    .faq-a-inner{
      padding:0 28px 22px;
      font-size:15px;color:rgba(255,255,255,0.55);
      line-height:1.8;font-weight:300;
    }

    /* ── CTA BANNER ── */
    .cta-section{padding:80px 60px;background:var(--navy)}
    .cta-box{
      max-width:900px;margin:0 auto;
      background:linear-gradient(135deg,rgba(212,168,67,0.1) 0%,rgba(212,168,67,0.04) 100%);
      border:1px solid rgba(212,168,67,0.25);
      border-radius:28px;padding:72px 60px;
      text-align:center;position:relative;overflow:hidden;
    }
    .cta-box::before{
      content:'';position:absolute;
      width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle,rgba(212,168,67,0.08) 0%,transparent 70%);
      top:-150px;right:-100px;pointer-events:none;
    }
    .cta-box h2{
      font-family:'Cormorant Garamond',serif;
      font-size:clamp(34px,5vw,56px);
      font-weight:300;color:#fff;
      margin-bottom:16px;line-height:1.1;
    }
    .cta-box h2 em{font-style:italic;color:var(--gold)}
    .cta-box p{font-size:17px;color:rgba(255,255,255,0.55);margin-bottom:40px;font-weight:300;line-height:1.7}
    .cta-actions{display:flex;justify-content:center;gap:16px;flex-wrap:wrap}
    .btn-gold{
      font-size:15px;font-weight:500;padding:16px 36px;border-radius:50px;
      background:var(--gold);color:var(--text);text-decoration:none;
      box-shadow:0 0 32px rgba(212,168,67,0.4);
      transition:background 0.2s,transform 0.15s,box-shadow 0.2s;display:inline-block;
    }
    .btn-gold:hover{background:var(--gold-lt);transform:translateY(-2px);box-shadow:0 0 48px rgba(212,168,67,0.55)}
    .btn-ghost{
      font-size:15px;padding:15px 32px;border-radius:50px;
      background:transparent;color:rgba(255,255,255,0.65);
      border:1px solid rgba(255,255,255,0.2);text-decoration:none;
      transition:border-color 0.2s,color 0.2s,transform 0.15s;display:inline-block;
    }
    .btn-ghost:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-2px)}

    /* ── FOOTER ── */
    footer{background:var(--night);padding:56px 60px 32px;border-top:1px solid rgba(255,255,255,0.05)}
    .ft-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;font-size:12px;color:rgba(255,255,255,0.25)}
    .ft-links-row{display:flex;gap:24px}
    .ft-links-row a{font-size:12px;color:rgba(255,255,255,0.25);text-decoration:none;transition:color 0.2s}
    .ft-links-row a:hover{color:var(--gold)}
    .ft-logo{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:600;color:#fff;text-decoration:none}
    .ft-logo span{color:var(--gold);font-style:italic}
    .ft-disclaimer{font-size:11px;color:rgba(255,255,255,0.18);line-height:1.6;margin-top:16px;font-style:italic}

    /* ── REVEAL ANIMATIONS ── */
    .reveal{opacity:0;transform:translateY(28px);transition:opacity 0.7s ease,transform 0.7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .d1{transition-delay:0.1s}.d2{transition-delay:0.2s}.d3{transition-delay:0.3s}

    /* ── RESPONSIVE ── */
    @media(max-width:960px){
      nav{padding:0 20px}
      .nav-links{display:none}
      .page-hero{padding:120px 24px 60px}
      .packages-section,.comparison,.faq,.cta-section{padding:60px 20px}
      .pkg-grid{grid-template-columns:1fr}
      .pkg-card.featured{transform:none}
      .comp-row{grid-template-columns:1.5fr 1fr 1fr 1fr}
      .comp-cell{padding:12px 10px;font-size:12px}
      .cta-box{padding:44px 28px}
      footer{padding:40px 20px 24px}
    }
  </style>
</head>
<body>

  <div id="cursorGlow"></div>

  <!-- ── NAV ── -->
  <nav>
    <a href="index.html" class="nav-logo">Colombia <span>Trips</span></a>
    <ul class="nav-links">
      <li><a href="vacation.html">Destinations</a></li>
      <li><a href="hotels.html">Hotels & Dining</a></li>
      <li><a href="healthcare.html">Healthcare</a></li>
      <li><a href="packages.html" class="active">Packages</a></li>
      <li><a href="support.html">Support</a></li>
    </ul>
    <div class="nav-actions">
      <a href="login.html" class="nav-login">Log In</a>
      <a href="#packages" class="nav-btn">Get Started</a>
    </div>
  </nav>

  <!-- ── HERO ── -->
  <div class="page-hero">
    <span class="page-hero-label">Pricing</span>
    <h1>Choose Your<br><em>Colombia Experience</em></h1>
    <p>One flat fee. Lifetime access. No subscriptions, no hidden costs — just everything you need to experience Colombia the right way.</p>
    <div class="one-time-badge">
      <div class="badge-dot"></div>
      One-time fee · Lifetime access · Real local network
    </div>
  </div>

  <!-- ── PACKAGES ── -->
  <section class="packages-section" id="packages">
    <div class="pkg-grid">

      <!-- EXPLORER -->
      <div class="pkg-card reveal d1">
        <div class="pkg-num">01</div>
        <div class="pkg-name">Explorer</div>
        <div class="pkg-tagline">Everything you need to get started</div>
        <div class="pkg-price"><sup>$</sup>99</div>
        <div class="pkg-price-note">One-time payment · Lifetime access</div>
        <div class="pkg-divider"></div>
        <div class="pkg-section-label">What's Included</div>
        <ul class="pkg-features">
          <li><span class="pf-icon">✦</span>Full website & mobile app access</li>
          <li><span class="pf-icon">✦</span>San Andrés, Medellín, Cartagena & all destination guides</li>
          <li><span class="pf-icon">✦</span>Vetted hotel recommendations</li>
          <li><span class="pf-icon">✦</span>Restaurant guides by city & cuisine</li>
          <li><span class="pf-icon">✦</span>Travel tips, safety guidance & local advice</li>
          <li><span class="pf-icon">✦</span>Hidden hot spots & off-the-beaten-path destinations</li>
          <li><span class="pf-icon">✦</span>Basic support access</li>
          <li class="dim"><span class="pf-icon no">✦</span>Exclusive partner deals & discounts</li>
          <li class="dim"><span class="pf-icon no">✦</span>Healthcare directory access</li>
          <li class="dim"><span class="pf-icon no">✦</span>Priority 24/7 support</li>
        </ul>
        <a href="#" class="pkg-cta outline">Get Explorer — $99</a>
      </div>

      <!-- ADVENTURE -->
      <div class="pkg-card featured reveal d2">
        <div class="pkg-popular">Most Popular</div>
        <div class="pkg-num">02</div>
        <div class="pkg-name">Adventure</div>
        <div class="pkg-tagline">Full access — the most popular choice</div>
        <div class="pkg-price"><sup>$</sup>199</div>
        <div class="pkg-price-note">One-time payment · Lifetime access</div>
        <div class="pkg-divider"></div>
        <div class="pkg-section-label">Everything in Explorer, plus</div>
        <ul class="pkg-features">
          <li><span class="pf-icon">✦</span>Exclusive partner deals at hotels & restaurants</li>
          <li><span class="pf-icon">✦</span>Full healthcare directory access</li>
          <li><span class="pf-icon">✦</span>Priority 24/7 live support line</li>
          <li><span class="pf-icon">✦</span>AI-powered chatbot for instant answers</li>
          <li><span class="pf-icon">✦</span>Member-only restaurant reservations</li>
          <li><span class="pf-icon">✦</span>Curated experience packages with local operators</li>
          <li><span class="pf-icon">✦</span>Offline access — no data required in Colombia</li>
          <li class="dim"><span class="pf-icon no">✦</span>Healthcare provider member discounts</li>
          <li class="dim"><span class="pf-icon no">✦</span>Personalized trip planning</li>
          <li class="dim"><span class="pf-icon no">✦</span>VIP partner introductions</li>
        </ul>
        <a href="#" class="pkg-cta solid">Get Adventure — $199</a>
      </div>

      <!-- ELITE CONCIERGE -->
      <div class="pkg-card reveal d3">
        <div class="pkg-num">03</div>
        <div class="pkg-name">Elite Concierge</div>
        <div class="pkg-tagline">White-glove access — nothing left out</div>
        <div class="pkg-price"><sup>$</sup>299</div>
        <div class="pkg-price-note">One-time payment · Lifetime access</div>
        <div class="pkg-divider"></div>
        <div class="pkg-section-label">Everything in Adventure, plus</div>
        <ul class="pkg-features">
          <li><span class="pf-icon">✦</span>Member discounts at healthcare providers</li>
          <li><span class="pf-icon">✦</span>Personalized trip planning — we plan it for you</li>
          <li><span class="pf-icon">✦</span>Direct concierge access — call or message anytime</li>
          <li><span class="pf-icon">✦</span>Healthcare referral coordination & scheduling</li>
          <li><span class="pf-icon">✦</span>Medical tourism support — hotels near clinics, logistics</li>
          <li><span class="pf-icon">✦</span>VIP introductions to our top partner network</li>
          <li><span class="pf-icon">✦</span>Emergency on-ground support through Chris's network</li>
          <li><span class="pf-icon">✦</span>First access to new hot spots & exclusive destinations</li>
          <li><span class="pf-icon">✦</span>Priority partner reservations & experiences</li>
          <li><span class="pf-icon">✦</span>Everything in Explorer & Adventure included</li>
        </ul>
        <a href="#" class="pkg-cta outline">Get Elite — $299</a>
      </div>

    </div>
  </section>

  <!-- ── COMPARISON TABLE ── -->
  <section class="comparison">
    <div class="comparison-header reveal">
      <div class="comp-label">Side by Side</div>
      <h2 class="comp-title">Compare <em>all packages</em></h2>
    </div>
    <div class="comp-table reveal">

      <!-- Header -->
      <div class="comp-row header-row">
        <div class="comp-cell">Feature</div>
        <div class="comp-cell">Explorer<br><small style="color:var(--gold);font-size:13px">$99</small></div>
        <div class="comp-cell" style="color:var(--gold)">Adventure<br><small style="font-size:13px">$199</small></div>
        <div class="comp-cell">Elite<br><small style="color:var(--gold);font-size:13px">$299</small></div>
      </div>

      <!-- Platform Access -->
      <div class="comp-row section-header-row">
        <div class="comp-cell">Platform Access</div>
        <div class="comp-cell"></div><div class="comp-cell"></div><div class="comp-cell"></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Website & Mobile App</strong></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Offline Access</strong><span>No data needed in Colombia</span></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>All Destination Guides</strong></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Hidden Hot Spots</strong></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>

      <!-- Hotels & Dining -->
      <div class="comp-row section-header-row">
        <div class="comp-cell">Hotels & Dining</div>
        <div class="comp-cell"></div><div class="comp-cell"></div><div class="comp-cell"></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Hotel Recommendations</strong></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Restaurant Guides</strong></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Exclusive Partner Deals</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Priority Reservations</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>VIP Partner Introductions</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>

      <!-- Healthcare -->
      <div class="comp-row section-header-row">
        <div class="comp-cell">Healthcare Network</div>
        <div class="comp-cell"></div><div class="comp-cell"></div><div class="comp-cell"></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Healthcare Directory</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Member Discounts at Providers</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Healthcare Referral Coordination</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Medical Tourism Support</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>

      <!-- Support -->
      <div class="comp-row section-header-row">
        <div class="comp-cell">Support</div>
        <div class="comp-cell"></div><div class="comp-cell"></div><div class="comp-cell"></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>24/7 Support Line</strong></div>
        <div class="comp-cell"><span class="partial">Basic</span></div>
        <div class="comp-cell"><span class="partial">Priority</span></div>
        <div class="comp-cell"><span class="check">✓ Direct</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>AI Chatbot Q&A</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Personalized Trip Planning</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>
      <div class="comp-row">
        <div class="comp-cell feature-name"><strong>Emergency On-Ground Support</strong></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="cross">—</span></div>
        <div class="comp-cell"><span class="check">✓</span></div>
      </div>

    </div>
  </section>

  <!-- ── FAQ ── -->
  <section class="faq">
    <div class="faq-header reveal">
      <div class="faq-label">Got Questions?</div>
      <h2 class="faq-title">We've got <em>answers</em></h2>
    </div>
    <div class="faq-grid">
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          Is this really a one-time fee? No subscription?
          <div class="faq-icon">+</div>
        </button>
        <div class="faq-a"><div class="faq-a-inner">Yes — absolutely one-time. You pay once and you have lifetime access to your package tier, all updates, and all content. We will never charge you again unless you choose to upgrade your package. No subscriptions, no renewals, no surprises.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          What exactly is the "local network" I'm getting access to?
          <div class="faq-icon">+</div>
        </button>
        <div class="faq-a"><div class="faq-a-inner">Our co-founder Chris has spent years building personal relationships with hotel owners, restaurant operators, doctors, clinics, and local experience providers across Colombia. These are real people who know us — which means they treat our members differently than a random tourist. You get access to deals, reservations, and providers that are simply not available to the general public.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          How do I access the healthcare network?
          <div class="faq-icon">+</div>
        </button>
        <div class="faq-a"><div class="faq-a-inner">Adventure and Elite Concierge members get full access to our healthcare directory directly in the app. For Elite members, we also coordinate appointments and referrals for you — just tell us what you need and we handle the rest. Member discounts at providers are available exclusively to Elite Concierge package holders and vary by provider.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          What are the "Hidden Hot Spots"?
          <div class="faq-icon">+</div>
        </button>
        <div class="faq-a"><div class="faq-a-inner">These are places in Colombia that most tourists never find — secret beaches, hidden villages, local markets, viewpoints, and experiences that only locals know about. Our co-founder Chris has personally visited and vetted every one of them. We keep the exact locations inside the platform to protect their exclusivity for our members.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          Which package is right for me?
          <div class="faq-icon">+</div>
        </button>
        <div class="faq-a"><div class="faq-a-inner">If you want the essentials — guides, hotel and restaurant recommendations, and local tips — Explorer at $99 is perfect. If you want the full experience with partner deals, healthcare access, and priority support, Adventure at $199 is our most popular choice. If you want white-glove treatment, personalized planning, healthcare discounts, and direct access to our team and network, Elite Concierge at $299 is the move.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          Can I upgrade my package later?
          <div class="faq-icon">+</div>
        </button>
        <div class="faq-a"><div class="faq-a-inner">Yes — you can upgrade at any time by paying the difference between your current package and the one you want. We make it easy. Just reach out through the support page or call our 24/7 line and we'll handle it immediately.</div></div>
      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <section class="cta-section">
    <div class="cta-box reveal">
      <h2>Ready to experience <em>Colombia?</em></h2>
      <p>Join thousands of Americans exploring Colombia the right way — with real local connections, trusted recommendations, and support every step of the way.</p>
      <div class="cta-actions">
        <a href="#packages" class="btn-gold">Choose Your Package →</a>
        <a href="support.html" class="btn-ghost">Talk to Us First</a>
      </div>
    </div>
  </section>

  <!-- ── FOOTER ── -->
  <footer>
    <div class="ft-bottom">
      <a href="index.html" class="ft-logo">Colombia <span>Trips</span></a>
      <div class="ft-links-row">
        <a href="vacation.html">Destinations</a>
        <a href="hotels.html">Hotels & Dining</a>
        <a href="healthcare.html">Healthcare</a>
        <a href="support.html">Support</a>
        <a href="about.html">About Us</a>
      </div>
      <span>© 2025 Colombia Trips Co. LLC</span>
    </div>
    <p class="ft-disclaimer">Colombia Trips Co. provides travel information, recommendations, and referrals as a concierge service. We do not guarantee personal safety during travel. Member discounts at healthcare providers vary by provider and are not guaranteed. Colombia Trips Co. LLC is not a licensed travel agency, medical provider, or insurance company.</p>
  </footer>

  <script>
    // Cursor glow
    const glow = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    });

    // Scroll reveal
    const revEls = document.querySelectorAll('.reveal');
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    revEls.forEach(el => revObs.observe(el));

    // FAQ accordion
    function toggleFaq(btn) {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }
  </script>
</body>
</html>
