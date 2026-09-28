/* Mew Atelier — tương tác giao diện
   Nguyên tắc: mọi chuyển động chạy trong một vòng rAF duy nhất, không ghi style
   trực tiếp trong sự kiện scroll (tránh giật), tôn trọng prefers-reduced-motion. */
(function () {
  "use strict";

  var U = function (id, w) { return "https://images.unsplash.com/" + id + "?q=80&w=" + (w || 700) + "&auto=format&fit=crop"; };
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ dữ liệu */
  var PRODUCTS = [
    { id: 1, name: "Sofa Rodeo Ivory 3 chỗ", room: "khach", price: 38000000, old: 47500000, img: "photo-1555041469-a586c61ea9bc", badge: "−20%", rating: "★★★★★ · 212 đánh giá", tag: "sofa da phong khach", mat: "Khung gỗ sồi, da bò Ý", dim: "2.200 × 950 × 780 mm", style: ["sang", "da", "tren40"] },
    { id: 2, name: "Bàn trà Missouri mặt đá ceramic", room: "khach", price: 7460000, old: 10600000, img: "photo-1524758631624-e2822e304c36", badge: "−30%", rating: "★★★★★ · 98 đánh giá", tag: "ban tra da ceramic", mat: "Mặt đá ceramic, chân thép sơn tĩnh điện", dim: "Ø1.000 × 420 mm", style: ["toi-gian", "da2", "duoi10"] },
    { id: 3, name: "Ghế đôn Indi màu Ivory", room: "khach", price: 7500000, old: 9500000, img: "photo-1586023492125-27b2c045efd7", badge: "−21%", rating: "★★★★☆ · 64 đánh giá", tag: "ghe don sofa", mat: "Da bò Ý, khung gỗ sồi", dim: "480 × 480 × 420 mm", style: ["am", "go", "duoi10"] },
    { id: 4, name: "Kệ tivi Concord gỗ sồi", room: "khach", price: 8900000, old: null, img: "photo-1594620302200-9a762244a156", badge: "Mới", rating: "★★★★★ · 41 đánh giá", tag: "ke tivi go soi", mat: "Gỗ sồi tự nhiên", dim: "1.800 × 400 × 480 mm", style: ["am", "go", "duoi10"] },
    { id: 5, name: "Giường Mika chân cao 1m6", room: "ngu", price: 13200000, old: 16500000, img: "photo-1505693416388-ac5ce068fe85", badge: "−20%", rating: "★★★★★ · 176 đánh giá", tag: "giuong ngu go soi", mat: "Gỗ sồi, vải linen đầu giường", dim: "1.600 × 2.000 mm", style: ["am", "go", "10-40"] },
    { id: 6, name: "Tủ áo Sevan khung A800", room: "ngu", price: 3762000, old: 4180000, img: "photo-1595428774223-ef52624120d2", badge: "−10%", rating: "★★★★☆ · 53 đánh giá", tag: "tu ao", mat: "Gỗ công nghiệp phủ melamine", dim: "800 × 550 × 2.000 mm", style: ["toi-gian", "go", "duoi10"] },
    { id: 7, name: "Bàn trang điểm Mika kèm gương", room: "ngu", price: 9200000, old: 11600000, img: "photo-1616594039964-ae9021a400a0", badge: "−21%", rating: "★★★★★ · 87 đánh giá", tag: "ban trang diem", mat: "Gỗ sồi, gương viền gỗ", dim: "1.000 × 450 × 1.450 mm", style: ["am", "go", "duoi10"] },
    { id: 8, name: "Sofa thư giãn Aurora 1 chỗ", room: "khach", price: 5850000, old: 8300000, img: "photo-1592078615290-033ee584e267", badge: "−30%", rating: "★★★★☆ · 112 đánh giá", tag: "ghe luoi sofa", mat: "Vải bố cao cấp, khung gỗ sồi", dim: "850 × 900 × 1.020 mm", style: ["toi-gian", "go", "duoi10"] },
    { id: 9, name: "Bàn ăn Ontario 6 chỗ", room: "bep", price: 8720000, old: 10900000, img: "photo-1519710164239-da123dc03ef4", badge: "−20%", rating: "★★★★★ · 143 đánh giá", tag: "ban an go soi", mat: "Gỗ sồi tự nhiên", dim: "1.600 × 900 × 750 mm", style: ["am", "go", "duoi10"] },
    { id: 10, name: "Bộ bàn ăn Winston 8 chỗ", room: "bep", price: 42000000, old: 60000000, img: "photo-1556911220-bff31c812dba", badge: "−30%", rating: "★★★★★ · 39 đánh giá", tag: "bo ban an da ceramic", mat: "Mặt đá ceramic, chân gỗ sồi", dim: "2.000 × 1.000 × 750 mm", style: ["sang", "da2", "tren40"] },
    { id: 11, name: "Ghế ăn Winston màu Grey", room: "bep", price: 2730000, old: 3900000, img: "photo-1503602642458-232111445657", badge: "−30%", rating: "★★★★☆ · 71 đánh giá", tag: "ghe an", mat: "Khung gỗ sồi, đệm vải", dim: "450 × 520 × 820 mm", style: ["toi-gian", "go", "duoi10"] },
    { id: 12, name: "Sofa bed Dennis màu Cam", room: "khach", price: 8978000, old: 13400000, img: "photo-1493663284031-b7e3aefcae8e", badge: "−33%", rating: "★★★★☆ · 58 đánh giá", tag: "sofa bed", mat: "Da bò, khung thép", dim: "1.900 × 900 × 850 mm", style: ["am", "da", "10-40"] }
  ];
  var ROOM_LABEL = { khach: "Phòng khách", ngu: "Phòng ngủ", bep: "Phòng bếp" };

  var fmt = function (n) { return n.toLocaleString("vi-VN") + "₫"; };
  var norm = function (s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  };

  var cart = [];
  var wishlist = [];
  try {
    cart = JSON.parse(localStorage.getItem("mew_cart") || "[]") || [];
    wishlist = JSON.parse(localStorage.getItem("mew_wish") || "[]") || [];
  } catch (e) { cart = []; wishlist = []; }

  var filter = "all";
  var keyword = "";

  var el = function (id) { return document.getElementById(id); };
  var grid = el("productGrid");
  var flashRow = el("flashRow");
  var emptyEl = el("emptyResult");

  /* ------------------------------------------------------------- màn hình chờ */
  (function loader() {
    var box = el("loader"), num = el("loadNum"), bar = el("loadBar");
    var reveal = function () { document.body.classList.add("ready"); };
    if (box) {
      var p = 0;
      var timer = setInterval(function () {
        p = Math.min(100, p + 12 + Math.random() * 14);
        num.textContent = String(Math.floor(p)).padStart(2, "0");
        bar.style.width = p + "%";
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(function () { box.classList.add("done"); reveal(); }, 320);
          setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 1400);
        }
      }, REDUCED ? 40 : 150);
    } else { reveal(); }
    setTimeout(reveal, 2600); /* bảo hiểm: tiêu đề luôn hiện kể cả khi tải chậm */
  })();

  /* ---------------------------------------------------------------- sản phẩm */
  function cardHTML(p) {
    var liked = wishlist.indexOf(p.id) > -1;
    return '<article class="pcard">' +
      '<div class="pimg">' +
        '<img src="' + U(p.img, 600) + '" alt="' + p.name + '" loading="lazy" decoding="async" width="600" height="636">' +
        (p.badge ? '<span class="badge">' + p.badge + '</span>' : "") +
        '<button class="wish' + (liked ? " on" : "") + '" data-wish="' + p.id + '" aria-label="Lưu ' + p.name + ' vào danh sách yêu thích" aria-pressed="' + liked + '">' + (liked ? "♥" : "♡") + "</button>" +
        '<button class="quick" data-view="' + p.id + '">Xem nhanh<span class="qprice-inline"> · ' + fmt(p.price) + "</span></button>" +
      "</div>" +
      '<div class="pbody">' +
        "<small>" + ROOM_LABEL[p.room] + "</small>" +
        "<h3>" + p.name + "</h3>" +
        '<span class="stars">' + p.rating + "</span>" +
        '<span class="price">' + fmt(p.price) + (p.old ? "<s>" + fmt(p.old) + "</s>" : "") + "</span>" +
      "</div>" +
      '<div class="pfoot"><button data-add-id="' + p.id + '">Thêm vào giỏ</button></div>' +
    "</article>";
  }

  function render() {
    var list = PRODUCTS.filter(function (p) {
      var okRoom = filter === "all" || p.room === filter;
      var okKey = keyword === "" || norm(p.name + " " + p.tag + " " + p.mat).indexOf(norm(keyword)) > -1;
      return okRoom && okKey;
    });
    grid.innerHTML = list.map(cardHTML).join("");
    emptyEl.hidden = list.length > 0;
    flashRow.innerHTML = PRODUCTS.slice(0, 6).map(cardHTML).join("");
    el("wishlistCount").textContent = wishlist.length;
    var wbtn = el("wishlistBtn");
    wbtn.classList.toggle("has", wishlist.length > 0);
    wbtn.querySelector(".heart").textContent = wishlist.length > 0 ? "♥" : "♡";
  }

  /* ------------------------------------------------------------------ giỏ hàng */
  function saveCart() {
    try {
      localStorage.setItem("mew_cart", JSON.stringify(cart));
      localStorage.setItem("mew_wish", JSON.stringify(wishlist));
    } catch (e) { /* trình duyệt chặn lưu trữ: bỏ qua, giỏ vẫn dùng trong phiên */ }
    renderCart();
  }

  function renderCart() {
    var count = cart.reduce(function (s, i) { return s + i.qty; }, 0);
    el("cartCount").textContent = count;
    el("cartCount2").textContent = count;
    el("cartItems").innerHTML = cart.length
      ? cart.map(function (i, idx) {
          return '<div class="citem"><img src="' + i.img + '" alt="" width="64" height="64">' +
            "<div><strong>" + i.name + '</strong><span class="mut">' + fmt(i.price) + "</span>" +
            '<div class="qty"><button data-dec="' + idx + '" aria-label="Giảm số lượng">−</button><span>' + i.qty +
            '</span><button data-inc="' + idx + '" aria-label="Tăng số lượng">+</button></div></div>' +
            '<button data-del="' + idx + '" aria-label="Xóa sản phẩm">✕</button></div>';
        }).join("")
      : '<p class="mut">Giỏ hàng đang trống. Bạn hãy thêm vài sản phẩm ưng ý nhé.</p>';
    el("cartTotal").textContent = fmt(cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0));
  }

  function addToCart(p, qty) {
    qty = qty || 1;
    var found = null;
    cart.forEach(function (i) { if (i.name === p.name) found = i; });
    if (found) found.qty += qty;
    else cart.push({ name: p.name, price: p.price, img: U(p.img, 200), qty: qty });
    saveCart();
    toast("Đã thêm “" + p.name + "” vào giỏ hàng.");
    var btn = el("cartBtn");
    if (btn && !REDUCED && btn.animate) {
      btn.animate([{ transform: "scale(1)" }, { transform: "scale(1.08)" }, { transform: "scale(1)" }], { duration: 320, easing: "ease-out" });
    }
  }

  var toastTimer;
  function toast(msg) {
    var t = el("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2400);
  }

  function openCart() {
    el("cartDrawer").classList.add("show");
    el("overlay").classList.add("show");
  }
  function closeAll() {
    el("cartDrawer").classList.remove("show");
    el("quickView").classList.remove("show");
    el("mobileMenu").classList.remove("show");
    el("overlay").classList.remove("show");
  }

  /* -------------------------------------------------------- sự kiện click chung */
  document.addEventListener("click", function (e) {
    var t = e.target;

    var add = t.closest("[data-add-id]");
    if (add) {
      var p = PRODUCTS.filter(function (x) { return String(x.id) === add.dataset.addId; })[0];
      if (p) addToCart(p);
      return;
    }

    var hero = t.closest("[data-add-hero]");
    if (hero) {
      var parts = hero.dataset.addHero.split("|");
      addToCart({ name: parts[0], price: Number(parts[1]), img: parts[2] });
      openCart();
      return;
    }

    var wish = t.closest("[data-wish]");
    if (wish) {
      var id = Number(wish.dataset.wish);
      var idx = wishlist.indexOf(id);
      if (idx > -1) { wishlist.splice(idx, 1); toast("Đã bỏ sản phẩm khỏi danh sách yêu thích."); }
      else { wishlist.push(id); toast("Đã lưu sản phẩm vào danh sách yêu thích."); }
      saveCart();
      render();
      return;
    }

    var view = t.closest("[data-view]");
    if (view) {
      var prod = PRODUCTS.filter(function (x) { return String(x.id) === view.dataset.view; })[0];
      if (!prod) return;
      el("qvImg").src = U(prod.img, 800);
      el("qvImg").alt = prod.name;
      el("qvName").textContent = prod.name;
      el("qvPrice").textContent = fmt(prod.price) + (prod.old ? "  ·  giá cũ " + fmt(prod.old) : "");
      el("qvRoom").textContent = ROOM_LABEL[prod.room];
      el("qvMat").textContent = prod.mat;
      el("qvDim").textContent = prod.dim;
      el("qvAdd").onclick = function () { addToCart(prod); closeAll(); openCart(); };
      el("quickView").classList.add("show");
      el("overlay").classList.add("show");
      return;
    }

    var inc = t.closest("[data-inc]");
    if (inc) { cart[inc.dataset.inc].qty += 1; saveCart(); return; }
    var dec = t.closest("[data-dec]");
    if (dec) {
      var i2 = Number(dec.dataset.dec);
      cart[i2].qty -= 1;
      if (cart[i2].qty <= 0) cart.splice(i2, 1);
      saveCart();
      return;
    }
    var del = t.closest("[data-del]");
    if (del) {
      var name = cart[Number(del.dataset.del)].name;
      cart.splice(Number(del.dataset.del), 1);
      saveCart();
      toast("Đã xóa “" + name + "” khỏi giỏ hàng.");
      return;
    }

    if (t.closest("[data-close]") || t.id === "overlay") closeAll();
  });

  /* --------------------------------------------------------------- bộ lọc, tìm */
  el("roomTabs").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    filter = b.dataset.filter;
    Array.prototype.forEach.call(this.querySelectorAll("button"), function (x) {
      var on = x === b;
      x.classList.toggle("on", on);
      x.setAttribute("aria-pressed", on ? "true" : "false");
    });
    render();
  });

  Array.prototype.forEach.call(document.querySelectorAll(".room"), function (a) {
    a.addEventListener("click", function () {
      filter = a.dataset.room;
      Array.prototype.forEach.call(document.querySelectorAll("#roomTabs button"), function (x) {
        var on = x.dataset.filter === filter;
        x.classList.toggle("on", on);
        x.setAttribute("aria-pressed", on ? "true" : "false");
      });
      render();
    });
  });

  var searchToggle = el("searchToggle"), searchBox = el("searchExpand"), searchInput = el("searchInput");
  searchToggle.addEventListener("click", function () {
    var open = searchBox.classList.toggle("open");
    searchToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) searchInput.focus();
  });
  searchInput.addEventListener("input", function () {
    var first = keyword === "";
    keyword = this.value.trim();
    if (first && keyword !== "") {
      /* chỉ cuộn một lần khi bắt đầu tìm, tránh nhảy trang theo từng ký tự */
      el("san-pham").scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
    }
    render();
  });

  /* ------------------------------------------------------------ điều khiển khác */
  el("cartBtn").addEventListener("click", openCart);
  el("mCart").addEventListener("click", function (e) { e.preventDefault(); openCart(); });
  el("menuBtn").addEventListener("click", function () { el("mobileMenu").classList.add("show"); });
  el("wishlistBtn").addEventListener("click", function () {
    toast(wishlist.length ? "Bạn đang lưu " + wishlist.length + " sản phẩm trong danh sách yêu thích." : "Nhấn vào biểu tượng ♡ trên sản phẩm để lưu lại.");
  });
  el("checkoutBtn").addEventListener("click", function () {
    toast(cart.length ? "Bản xem trước: chức năng thanh toán sẽ hoạt động khi kết nối Haravan." : "Giỏ hàng đang trống.");
  });
  el("buyCombo").addEventListener("click", function () {
    addToCart({ name: "Combo Indi (4 sản phẩm)", price: 133000000, img: "photo-1555041469-a586c61ea9bc" });
    openCart();
  });
  el("styleCta").addEventListener("click", function () {
    el("tu-van").scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
  });
  el("toTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }); });
  el("pjNext").addEventListener("click", function () { el("pjRow").scrollBy({ left: 450, behavior: REDUCED ? "auto" : "smooth" }); });
  el("pjPrev").addEventListener("click", function () { el("pjRow").scrollBy({ left: -450, behavior: REDUCED ? "auto" : "smooth" }); });

  el("newsForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var email = el("newsEmail").value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast("Địa chỉ email chưa đúng định dạng. Bạn vui lòng kiểm tra lại.");
      el("newsEmail").focus();
      return;
    }
    toast("Cảm ơn bạn. Mã ưu đãi 200.000₫ đã được gửi tới email.");
    this.reset();
  });

  /* -------------------------------------------------------------- đếm ngược */
  function tickCountdown() {
    var now = new Date();
    var end = new Date();
    end.setHours(23, 59, 59, 0);
    var s = Math.max(0, Math.floor((end - now) / 1000));
    el("cdH").textContent = String(Math.floor(s / 3600)).padStart(2, "0");
    el("cdM").textContent = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    el("cdS").textContent = String(s % 60).padStart(2, "0");
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

  /* ---------------------------------------------------- hiệu ứng xuất hiện */
  var roi = "IntersectionObserver" in window;
  if (roi && !REDUCED) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.16 });
    Array.prototype.forEach.call(document.querySelectorAll(".reveal,.img-reveal"), function (n) { io.observe(n); });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll(".reveal,.img-reveal"), function (n) { n.classList.add("in"); });
  }

  /* ------------------------------------------------------ số liệu đếm lên */
  function animateCount(node) {
    var target = Number(node.dataset.count) || 0;
    if (REDUCED) { node.textContent = target.toLocaleString("vi-VN"); return; }
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var k = Math.min(1, (ts - start) / 1400);
      var eased = 1 - Math.pow(1 - k, 3);
      node.textContent = Math.round(target * eased).toLocaleString("vi-VN");
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (roi && !REDUCED) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); cio.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    Array.prototype.forEach.call(document.querySelectorAll("[data-count]"), function (n) {
      n.textContent = "0"; /* HTML giữ sẵn số cuối cho trường hợp không có JS */
      cio.observe(n);
    });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll("[data-count]"), function (n) { n.textContent = Number(n.dataset.count).toLocaleString("vi-VN"); });
  }

  /* ------------------------------------------------------------ lời chứng thực */
  var QUOTES = [
    ["“Phòng khách nhà tôi thay đổi hoàn toàn sau khi được tư vấn. Sofa đúng màu, đúng kích thước, đội ngũ lắp đặt làm việc rất gọn gàng.”", "Chị Trang Nguyễn · Quận 7, TP. HCM"],
    ["“Bàn ăn mặt đá dễ vệ sinh, khung chắc chắn. Đơn hàng giao đúng hẹn và được đóng gói cẩn thận.”", "Chị Hồng Nhung · Cầu Giấy, Hà Nội"],
    ["“Nhờ bài trắc nghiệm phong cách, tôi chọn được bộ nội thất hợp gu gia đình mà không mất nhiều thời gian.”", "Anh Minh Quân · Thủ Đức, TP. HCM"]
  ];
  var quoteIdx = 0;
  var quoteText = el("quoteText"), quoteWho = el("quoteWho");
  var dots = [].slice.call(document.querySelectorAll("#quoteDots button"));
  function showQuote(i) {
    quoteIdx = (i + QUOTES.length) % QUOTES.length;
    var apply = function () {
      quoteText.textContent = QUOTES[quoteIdx][0];
      quoteWho.textContent = QUOTES[quoteIdx][1];
      quoteText.style.opacity = 1;
      quoteWho.style.opacity = 1;
    };
    if (REDUCED) { apply(); }
    else {
      quoteText.style.opacity = 0;
      quoteWho.style.opacity = 0;
      setTimeout(apply, 240);
    }
    dots.forEach(function (d, k) {
      d.classList.toggle("on", k === quoteIdx);
      d.setAttribute("aria-pressed", k === quoteIdx ? "true" : "false");
    });
  }
  dots.forEach(function (d, k) { d.addEventListener("click", function () { showQuote(k); stopQuotes(); }); });
  var quoteTimer = REDUCED ? null : setInterval(function () { showQuote(quoteIdx + 1); }, 7000);
  function stopQuotes() { if (quoteTimer) { clearInterval(quoteTimer); quoteTimer = null; } }

  /* --------------------------------------------------------- trắc nghiệm gu */
  var answers = [];
  var STEP_TOTAL = 3;
  [].slice.call(document.querySelectorAll(".qopts button")).forEach(function (b) {
    b.addEventListener("click", function () {
      answers.push(b.dataset.v);
      var step = b.closest(".qstep");
      step.classList.remove("on");
      var next = step.nextElementSibling;
      if (!next) return;
      next.classList.add("on");
      if (next.dataset.step === "4") finishQuiz();
    });
  });

  function finishQuiz() {
    var score = {};
    answers.forEach(function (a) {
      PRODUCTS.forEach(function (p) {
        if (p.style.indexOf(a) > -1) score[p.id] = (score[p.id] || 0) + 1;
      });
    });
    var top = Object.keys(score)
      .sort(function (a, b) { return score[b] - score[a]; })
      .slice(0, 3)
      .map(function (id) { return PRODUCTS.filter(function (p) { return String(p.id) === id; })[0]; });

    var gu = answers.indexOf("sang") > -1 ? "sang trọng" : answers.indexOf("toi-gian") > -1 ? "tối giản" : "ấm cúng";
    el("quizResultTitle").textContent = "Phong cách " + gu + " — 3 sản phẩm phù hợp nhất";
    el("quizResult").innerHTML = top.map(function (p) {
      return '<div class="qr"><img src="' + U(p.img, 200) + '" alt="' + p.name + '" width="62" height="62">' +
        '<div><span class="qr-name">' + p.name + '</span><span class="qr-price">' + fmt(p.price) + "</span></div>" +
        '<button data-add-id="' + p.id + '">Thêm</button></div>';
    }).join("");
  }

  el("quizAgain").addEventListener("click", function () {
    answers = [];
    [].slice.call(document.querySelectorAll(".qstep")).forEach(function (s) { s.classList.remove("on"); });
    document.querySelector('.qstep[data-step="1"]').classList.add("on");
  });

  /* --------------------------------------- một vòng rAF: cursor + parallax */
  var mouseX = -100, mouseY = -100, cursX = -100, cursY = -100;
  var cursor = el("cursor");
  if (cursor && !REDUCED && window.matchMedia("(pointer:fine)").matches) {
    document.addEventListener("mousemove", function (e) { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });
    document.addEventListener("mouseover", function (e) {
      cursor.classList.toggle("grow", !!e.target.closest("a,button"));
    });
  }

  var heroBg = el("heroBg");
  var heroSection = document.querySelector(".hero");
  var heroVisible = true;
  if ("IntersectionObserver" in window && heroSection) {
    new IntersectionObserver(function (entries) { heroVisible = entries[0].isIntersecting; }, { threshold: 0 }).observe(heroSection);
  }

  function loop() {
    if (cursor && !REDUCED) {
      cursX += (mouseX - cursX) * 0.18;
      cursY += (mouseY - cursY) * 0.18;
      cursor.style.transform = "translate3d(" + (cursX - 6) + "px," + (cursY - 6) + "px,0)";
    }
    if (heroBg && heroVisible && !REDUCED) {
      var y = Math.min(window.scrollY, 900);
      heroBg.style.transform = "translate3d(0," + (y * 0.14) + "px,0) scale(1.04)";
    }
    requestAnimationFrame(loop);
  }
  if (!REDUCED) requestAnimationFrame(loop);

  /* --------------------------------------------------------- nghiêng thẻ ảnh */
  if (!REDUCED && window.matchMedia("(pointer:fine)").matches) {
    [].slice.call(document.querySelectorAll(".tilt")).forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
        card.style.transform = "perspective(1000px) rotateY(" + ry + "deg) rotateX(" + rx + "deg)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
    [].slice.call(document.querySelectorAll(".btn-magnet")).forEach(function (b) {
      b.addEventListener("mousemove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) * 0.1) + "px," + ((e.clientY - r.top - r.height / 2) * 0.16) + "px)";
      });
      b.addEventListener("mouseleave", function () { b.style.transform = ""; });
    });
  }

  /* ------------------------------------------------------- trạng thái header */
  var head = el("siteHead");
  var lastState = false;
  function syncHead() {
    var on = window.scrollY > 40;
    if (on !== lastState) { head.classList.toggle("scrolled", on); lastState = on; }
  }
  window.addEventListener("scroll", syncHead, { passive: true });
  syncHead();

  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });

  render();
  renderCart();
})();
