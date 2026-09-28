(function () {
  "use strict";

  var CATALOG = [
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

  var PRODUCT_INDEX = CATALOG.reduce(function (index, product) {
    index[product.id] = product;
    return index;
  }, {});

  var ROOM_LABEL = { khach: "Phòng khách", ngu: "Phòng ngủ", bep: "Phòng bếp" };
  var QUOTES = [
    ["“Phòng khách nhà tôi thay đổi hoàn toàn sau khi được tư vấn. Sofa đúng màu, đúng kích thước, đội ngũ lắp đặt làm việc rất gọn gàng.”", "Chị Trang Nguyễn · Quận 7, TP. HCM"],
    ["“Bàn ăn mặt đá dễ vệ sinh, khung chắc chắn. Đơn hàng giao đúng hẹn và được đóng gói cẩn thận.”", "Chị Hồng Nhung · Cầu Giấy, Hà Nội"],
    ["“Nhờ bài trắc nghiệm phong cách, tôi chọn được bộ nội thất hợp gu gia đình mà không mất nhiều thời gian.”", "Anh Minh Quân · Thủ Đức, TP. HCM"]
  ];
  var QUIZ_QUESTIONS = 3;
  var STORAGE = { cart: "mew_cart", wish: "mew_wish" };
  var SEARCH_DELAY = 140;
  var COUNTER_DURATION = 1400;
  var QUOTE_INTERVAL = 7000;
  var PARALLAX_LIMIT = 900;
  var IMAGE_WIDTH = { thumb: 200, card: 600, large: 800 };

  var motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var pointerQuery = window.matchMedia ? window.matchMedia("(pointer:fine)") : null;
  var REDUCED = !!(motionQuery && motionQuery.matches);
  var FINE_POINTER = !!(pointerQuery && pointerQuery.matches);
  var HAS_OBSERVER = "IntersectionObserver" in window;

  function $(id) {
    return document.getElementById(id);
  }

  function $$(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function vnd(value) {
    return value.toLocaleString("vi-VN") + "₫";
  }

  function plain(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  }

  function imageUrl(photo, width) {
    return "https://images.unsplash.com/" + photo + "?q=80&w=" + width + "&auto=format&fit=crop";
  }

  function debounce(run, wait) {
    var timer;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        run.apply(context, args);
      }, wait);
    };
  }

  function readList(key) {
    try {
      return JSON.parse(window.localStorage.getItem(key) || "[]") || [];
    } catch (error) {
      return [];
    }
  }

  function writeList(key, list) {
    try {
      window.localStorage.setItem(key, JSON.stringify(list));
    } catch (error) {
      return false;
    }
    return true;
  }

  function createWishlist(key) {
    var ids = new Set(readList(key));
    function persist() {
      writeList(key, Array.prototype.slice.call(ids));
    }
    return {
      has: function (id) {
        return ids.has(id);
      },
      size: function () {
        return ids.size;
      },
      toggle: function (id) {
        var liked = !ids.has(id);
        if (liked) {
          ids.add(id);
        } else {
          ids.delete(id);
        }
        persist();
        return liked;
      }
    };
  }

  function createCart(key) {
    var lines = readList(key);
    function persist() {
      writeList(key, lines);
    }
    return {
      lines: function () {
        return lines;
      },
      count: function () {
        return lines.reduce(function (total, line) {
          return total + line.qty;
        }, 0);
      },
      total: function () {
        return lines.reduce(function (sum, line) {
          return sum + line.price * line.qty;
        }, 0);
      },
      add: function (item, quantity) {
        var step = quantity || 1;
        var existing = null;
        lines.forEach(function (line) {
          if (line.name === item.name) {
            existing = line;
          }
        });
        if (existing) {
          existing.qty += step;
        } else {
          lines.push({ name: item.name, price: item.price, img: item.img, qty: step });
        }
        persist();
      },
      increase: function (index) {
        lines[index].qty += 1;
        persist();
      },
      decrease: function (index) {
        lines[index].qty -= 1;
        if (lines[index].qty < 1) {
          lines.splice(index, 1);
        }
        persist();
      },
      remove: function (index) {
        var removed = lines.splice(index, 1)[0];
        persist();
        return removed;
      }
    };
  }

  var wishlist = createWishlist(STORAGE.wish);
  var cart = createCart(STORAGE.cart);
  var query = { room: "all", text: "" };

  var els = {
    body: document.body,
    loader: $("loader"),
    loadNum: $("loadNum"),
    loadBar: $("loadBar"),
    grid: $("productGrid"),
    flashRow: $("flashRow"),
    empty: $("emptyResult"),
    tabs: $("roomTabs"),
    wishlistBtn: $("wishlistBtn"),
    wishlistCount: $("wishlistCount"),
    cartBtn: $("cartBtn"),
    cartCount: $("cartCount"),
    cartCount2: $("cartCount2"),
    cartDrawer: $("cartDrawer"),
    cartItems: $("cartItems"),
    cartTotal: $("cartTotal"),
    checkoutBtn: $("checkoutBtn"),
    overlay: $("overlay"),
    menuBtn: $("menuBtn"),
    mobileMenu: $("mobileMenu"),
    mCart: $("mCart"),
    searchToggle: $("searchToggle"),
    searchExpand: $("searchExpand"),
    searchInput: $("searchInput"),
    quickView: $("quickView"),
    qvImg: $("qvImg"),
    qvName: $("qvName"),
    qvPrice: $("qvPrice"),
    qvRoom: $("qvRoom"),
    qvMat: $("qvMat"),
    qvDim: $("qvDim"),
    qvAdd: $("qvAdd"),
    toast: $("toast"),
    cdH: $("cdH"),
    cdM: $("cdM"),
    cdS: $("cdS"),
    quoteText: $("quoteText"),
    quoteWho: $("quoteWho"),
    quoteDots: $("quoteDots"),
    quizSteps: $$(".qstep"),
    quizOptions: $$(".qopts button"),
    quizResult: $("quizResult"),
    quizResultTitle: $("quizResultTitle"),
    quizAgain: $("quizAgain"),
    newsForm: $("newsForm"),
    newsEmail: $("newsEmail"),
    buyCombo: $("buyCombo"),
    styleCta: $("styleCta"),
    toTop: $("toTop"),
    pjRow: $("pjRow"),
    pjNext: $("pjNext"),
    pjPrev: $("pjPrev"),
    siteHead: $("siteHead"),
    heroBg: $("heroBg"),
    heroSection: document.querySelector(".hero"),
    cursor: $("cursor"),
    productSection: $("san-pham"),
    quizSection: $("tu-van"),
    countNodes: $$("[data-count]"),
    revealNodes: $$(".reveal,.img-reveal"),
    magnetNodes: $$(".btn-magnet"),
    tiltNodes: $$(".tilt"),
    roomLinks: $$(".room")
  };

  var panels = [els.cartDrawer, els.quickView, els.mobileMenu];

  function cardMarkup(product, liked) {
    return '<article class="pcard">' +
      '<div class="pimg">' +
        '<img src="' + imageUrl(product.img, IMAGE_WIDTH.card) + '" alt="' + product.name + '" loading="lazy" decoding="async" width="600" height="636">' +
        (product.badge ? '<span class="badge">' + product.badge + "</span>" : "") +
        '<button class="wish' + (liked ? " on" : "") + '" data-wish="' + product.id + '" aria-label="Lưu ' + product.name + ' vào danh sách yêu thích" aria-pressed="' + (liked ? "true" : "false") + '">' + (liked ? "♥" : "♡") + "</button>" +
        '<button class="quick" data-view="' + product.id + '">Xem nhanh<span class="qprice-inline"> · ' + vnd(product.price) + "</span></button>" +
      "</div>" +
      '<div class="pbody">' +
        "<small>" + ROOM_LABEL[product.room] + "</small>" +
        "<h3>" + product.name + "</h3>" +
        '<span class="stars">' + product.rating + "</span>" +
        '<span class="price">' + vnd(product.price) + (product.old ? "<s>" + vnd(product.old) + "</s>" : "") + "</span>" +
      "</div>" +
      '<div class="pfoot"><button data-add-id="' + product.id + '">Thêm vào giỏ</button></div>' +
      "</article>";
  }

  function listMarkup(products, isLiked) {
    return products.map(function (product) {
      return cardMarkup(product, isLiked(product.id));
    }).join("");
  }

  function cartLineMarkup(line, index) {
    return '<div class="citem"><img src="' + line.img + '" alt="" width="64" height="64">' +
      "<div><strong>" + line.name + '</strong><span class="mut">' + vnd(line.price) + "</span>" +
      '<div class="qty"><button data-dec="' + index + '" aria-label="Giảm số lượng">−</button><span>' + line.qty +
      '</span><button data-inc="' + index + '" aria-label="Tăng số lượng">+</button></div></div>' +
      '<button data-del="' + index + '" aria-label="Xóa sản phẩm">✕</button></div>';
  }

  function quizItemMarkup(product) {
    return '<div class="qr"><img src="' + imageUrl(product.img, IMAGE_WIDTH.thumb) + '" alt="' + product.name + '" width="62" height="62">' +
      '<div><span class="qr-name">' + product.name + '</span><span class="qr-price">' + vnd(product.price) + "</span></div>" +
      '<button data-add-id="' + product.id + '">Thêm</button></div>';
  }

  function isLiked(id) {
    return wishlist.has(id);
  }

  function matchesQuery(product) {
    if (query.room !== "all" && product.room !== query.room) {
      return false;
    }
    if (!query.text) {
      return true;
    }
    return plain(product.name + " " + product.tag + " " + product.mat).indexOf(plain(query.text)) > -1;
  }

  function renderCatalog() {
    var visible = CATALOG.filter(matchesQuery);
    els.grid.innerHTML = listMarkup(visible, isLiked);
    els.empty.hidden = visible.length > 0;
  }

  function renderFlashRow() {
    els.flashRow.innerHTML = listMarkup(CATALOG.slice(0, 6), isLiked);
  }

  function syncWishBadge() {
    var total = wishlist.size();
    els.wishlistCount.textContent = total;
    els.wishlistBtn.classList.toggle("has", total > 0);
    els.wishlistBtn.querySelector(".heart").textContent = total > 0 ? "♥" : "♡";
  }

  function syncWishButtons(id, liked) {
    $$('[data-wish="' + id + '"]').forEach(function (button) {
      button.classList.toggle("on", liked);
      button.setAttribute("aria-pressed", liked ? "true" : "false");
      button.textContent = liked ? "♥" : "♡";
    });
    syncWishBadge();
  }

  function renderCart() {
    var lines = cart.lines();
    var count = cart.count();
    els.cartCount.textContent = count;
    els.cartCount2.textContent = count;
    els.cartItems.innerHTML = lines.length
      ? lines.map(cartLineMarkup).join("")
      : '<p class="mut">Giỏ hàng đang trống. Bạn hãy thêm vài sản phẩm ưng ý nhé.</p>';
    els.cartTotal.textContent = vnd(cart.total());
  }

  var toastTimer;
  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      els.toast.classList.remove("show");
    }, 2400);
  }

  function pulse(node) {
    if (REDUCED || !node || !node.animate) {
      return;
    }
    node.animate([{ transform: "scale(1)" }, { transform: "scale(1.08)" }, { transform: "scale(1)" }], { duration: 320, easing: "ease-out" });
  }

  function openPanel(panel) {
    panel.classList.add("show");
    els.overlay.classList.add("show");
  }

  function closePanels() {
    panels.forEach(function (panel) {
      panel.classList.remove("show");
    });
    els.overlay.classList.remove("show");
  }

  function toCartItem(name, price, photo) {
    return { name: name, price: price, img: imageUrl(photo, IMAGE_WIDTH.thumb) };
  }

  function productToCartItem(product) {
    return toCartItem(product.name, product.price, product.img);
  }

  function addToCart(item, quantity) {
    cart.add(item, quantity);
    renderCart();
    toast("Đã thêm “" + item.name + "” vào giỏ hàng.");
    pulse(els.cartBtn);
  }

  function openQuickView(product) {
    els.qvImg.src = imageUrl(product.img, IMAGE_WIDTH.large);
    els.qvImg.alt = product.name;
    els.qvName.textContent = product.name;
    els.qvPrice.textContent = vnd(product.price) + (product.old ? "  ·  giá cũ " + vnd(product.old) : "");
    els.qvRoom.textContent = ROOM_LABEL[product.room];
    els.qvMat.textContent = product.mat;
    els.qvDim.textContent = product.dim;
    els.qvAdd.onclick = function () {
      addToCart(productToCartItem(product));
      closePanels();
      openPanel(els.cartDrawer);
    };
    openPanel(els.quickView);
  }

  function selectRoom(room) {
    query.room = room;
    $$("button", els.tabs).forEach(function (button) {
      var active = button.dataset.filter === room;
      button.classList.toggle("on", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    renderCatalog();
  }

  function applySearch(value) {
    query.text = value;
    renderCatalog();
  }

  function bindFilterTabs() {
    els.tabs.addEventListener("click", function (event) {
      var button = event.target.closest("button");
      if (button) {
        selectRoom(button.dataset.filter);
      }
    });
    els.roomLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        selectRoom(link.dataset.room);
      });
    });
  }

  function bindSearch() {
    var runSearch = debounce(applySearch, SEARCH_DELAY);
    els.searchToggle.addEventListener("click", function () {
      var open = els.searchExpand.classList.toggle("open");
      els.searchToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        els.searchInput.focus();
      }
    });
    els.searchInput.addEventListener("input", function () {
      var value = this.value.trim();
      if (!query.text && value) {
        els.productSection.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
      }
      runSearch(value);
    });
  }

  function bindCartActions() {
    els.cartBtn.addEventListener("click", function () {
      openPanel(els.cartDrawer);
    });
    els.mCart.addEventListener("click", function (event) {
      event.preventDefault();
      openPanel(els.cartDrawer);
    });
    els.checkoutBtn.addEventListener("click", function () {
      toast(cart.lines().length ? "Bản xem trước: chức năng thanh toán sẽ hoạt động khi kết nối Haravan." : "Giỏ hàng đang trống.");
    });
  }

  function bindShortcuts() {
    els.menuBtn.addEventListener("click", function () {
      els.mobileMenu.classList.add("show");
    });
    els.wishlistBtn.addEventListener("click", function () {
      var total = wishlist.size();
      toast(total ? "Bạn đang lưu " + total + " sản phẩm trong danh sách yêu thích." : "Nhấn vào biểu tượng ♡ trên sản phẩm để lưu lại.");
    });
    els.buyCombo.addEventListener("click", function () {
      addToCart(toCartItem("Combo Indi (4 sản phẩm)", 133000000, "photo-1555041469-a586c61ea9bc"));
      openPanel(els.cartDrawer);
    });
    els.styleCta.addEventListener("click", function () {
      els.quizSection.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
    });
    els.toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
    });
    els.pjNext.addEventListener("click", function () {
      els.pjRow.scrollBy({ left: 450, behavior: REDUCED ? "auto" : "smooth" });
    });
    els.pjPrev.addEventListener("click", function () {
      els.pjRow.scrollBy({ left: -450, behavior: REDUCED ? "auto" : "smooth" });
    });
    els.overlay.addEventListener("click", closePanels);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePanels();
      }
    });
  }

  function bindDelegatedClicks() {
    document.addEventListener("click", function (event) {
      var target = event.target;

      var addButton = target.closest("[data-add-id]");
      if (addButton) {
        var product = PRODUCT_INDEX[Number(addButton.dataset.addId)];
        if (product) {
          addToCart(productToCartItem(product));
        }
        return;
      }

      var heroButton = target.closest("[data-add-hero]");
      if (heroButton) {
        var parts = heroButton.dataset.addHero.split("|");
        addToCart(toCartItem(parts[0], Number(parts[1]), parts[2]));
        openPanel(els.cartDrawer);
        return;
      }

      var wishButton = target.closest("[data-wish]");
      if (wishButton) {
        var id = Number(wishButton.dataset.wish);
        var liked = wishlist.toggle(id);
        syncWishButtons(id, liked);
        toast(liked ? "Đã lưu sản phẩm vào danh sách yêu thích." : "Đã bỏ sản phẩm khỏi danh sách yêu thích.");
        return;
      }

      var viewButton = target.closest("[data-view]");
      if (viewButton) {
        var showed = PRODUCT_INDEX[Number(viewButton.dataset.view)];
        if (showed) {
          openQuickView(showed);
        }
        return;
      }

      var increaseButton = target.closest("[data-inc]");
      if (increaseButton) {
        cart.increase(Number(increaseButton.dataset.inc));
        renderCart();
        return;
      }

      var decreaseButton = target.closest("[data-dec]");
      if (decreaseButton) {
        cart.decrease(Number(decreaseButton.dataset.dec));
        renderCart();
        return;
      }

      var removeButton = target.closest("[data-del]");
      if (removeButton) {
        var removed = cart.remove(Number(removeButton.dataset.del));
        renderCart();
        if (removed) {
          toast("Đã xóa “" + removed.name + "” khỏi giỏ hàng.");
        }
        return;
      }

      if (target.closest("[data-close]") || target.id === "overlay") {
        closePanels();
      }
    });
  }

  function bindNewsletter() {
    els.newsForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var email = els.newsEmail.value.trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        toast("Địa chỉ email chưa đúng định dạng. Bạn vui lòng kiểm tra lại.");
        els.newsEmail.focus();
        return;
      }
      toast("Cảm ơn bạn. Mã ưu đãi 200.000₫ đã được gửi tới email.");
      this.reset();
    });
  }

  function startLoader() {
    var box = els.loader;
    function reveal() {
      els.body.classList.add("ready");
    }
    if (!box) {
      reveal();
      return;
    }
    var progress = 0;
    var timer = setInterval(function () {
      progress = Math.min(100, progress + 12 + Math.random() * 14);
      els.loadNum.textContent = String(Math.floor(progress)).padStart(2, "0");
      els.loadBar.style.width = progress + "%";
      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(function () {
          box.classList.add("done");
          reveal();
        }, 320);
        setTimeout(function () {
          if (box.parentNode) {
            box.parentNode.removeChild(box);
          }
        }, 1400);
      }
    }, REDUCED ? 40 : 150);
    setTimeout(reveal, 2600);
  }

  function startCountdown() {
    function tick() {
      var now = new Date();
      var end = new Date();
      end.setHours(23, 59, 59, 0);
      var seconds = Math.max(0, Math.floor((end - now) / 1000));
      els.cdH.textContent = String(Math.floor(seconds / 3600)).padStart(2, "0");
      els.cdM.textContent = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      els.cdS.textContent = String(seconds % 60).padStart(2, "0");
    }
    tick();
    setInterval(tick, 1000);
  }

  function animateCount(node) {
    var target = Number(node.dataset.count) || 0;
    if (REDUCED) {
      node.textContent = target.toLocaleString("vi-VN");
      return;
    }
    var start = null;
    function step(timestamp) {
      if (start === null) {
        start = timestamp;
      }
      var progress = Math.min(1, (timestamp - start) / COUNTER_DURATION);
      var eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = Math.round(target * eased).toLocaleString("vi-VN");
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  function startCounters() {
    if (!HAS_OBSERVER || REDUCED) {
      els.countNodes.forEach(function (node) {
        node.textContent = Number(node.dataset.count).toLocaleString("vi-VN");
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    els.countNodes.forEach(function (node) {
      node.textContent = "0";
      observer.observe(node);
    });
  }

  function startReveals() {
    if (!HAS_OBSERVER || REDUCED) {
      els.revealNodes.forEach(function (node) {
        node.classList.add("in");
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    els.revealNodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  function startQuotes() {
    var dots = $$("button", els.quoteDots);
    var index = 0;
    var timer = null;

    function paint() {
      els.quoteText.textContent = QUOTES[index][0];
      els.quoteWho.textContent = QUOTES[index][1];
      els.quoteText.style.opacity = 1;
      els.quoteWho.style.opacity = 1;
    }

    function show(next) {
      index = (next + QUOTES.length) % QUOTES.length;
      if (REDUCED) {
        paint();
      } else {
        els.quoteText.style.opacity = 0;
        els.quoteWho.style.opacity = 0;
        setTimeout(paint, 240);
      }
      dots.forEach(function (dot, order) {
        dot.classList.toggle("on", order === index);
        dot.setAttribute("aria-pressed", order === index ? "true" : "false");
      });
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot, order) {
      dot.addEventListener("click", function () {
        show(order);
        stop();
      });
    });

    show(0);
    if (!REDUCED) {
      timer = setInterval(function () {
        show(index + 1);
      }, QUOTE_INTERVAL);
    }
  }

  function startQuiz() {
    var answers = [];

    function reset() {
      answers = [];
      els.quizSteps.forEach(function (step) {
        step.classList.remove("on");
      });
      els.quizSteps[0].classList.add("on");
    }

    function finish() {
      var score = {};
      answers.forEach(function (answer) {
        CATALOG.forEach(function (product) {
          if (product.style.indexOf(answer) > -1) {
            score[product.id] = (score[product.id] || 0) + 1;
          }
        });
      });
      var best = Object.keys(score)
        .sort(function (a, b) {
          return score[b] - score[a];
        })
        .slice(0, 3)
        .map(function (id) {
          return PRODUCT_INDEX[Number(id)];
        });
      var mood = answers.indexOf("sang") > -1 ? "sang trọng" : answers.indexOf("toi-gian") > -1 ? "tối giản" : "ấm cúng";
      els.quizResultTitle.textContent = "Phong cách " + mood + " — 3 sản phẩm phù hợp nhất";
      els.quizResult.innerHTML = best.map(quizItemMarkup).join("");
    }

    els.quizOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        answers.push(option.dataset.v);
        var step = option.closest(".qstep");
        step.classList.remove("on");
        var next = step.nextElementSibling;
        if (!next) {
          return;
        }
        next.classList.add("on");
        if (Number(next.dataset.step) === QUIZ_QUESTIONS + 1) {
          finish();
        }
      });
    });

    els.quizAgain.addEventListener("click", reset);
  }

  function bindPointerEffects(nodes, onMove) {
    nodes.forEach(function (node) {
      node.addEventListener("mousemove", function (event) {
        onMove(node, event);
      });
      node.addEventListener("mouseleave", function () {
        node.style.transform = "";
      });
    });
  }

  function startMotion() {
    if (REDUCED || !FINE_POINTER) {
      return;
    }
    bindPointerEffects(els.tiltNodes, function (node, event) {
      var box = node.getBoundingClientRect();
      var rotateY = ((event.clientX - box.left) / box.width - 0.5) * 5;
      var rotateX = ((event.clientY - box.top) / box.height - 0.5) * -5;
      node.style.transform = "perspective(1000px) rotateY(" + rotateY + "deg) rotateX(" + rotateX + "deg)";
    });
    bindPointerEffects(els.magnetNodes, function (node, event) {
      var box = node.getBoundingClientRect();
      var shiftX = (event.clientX - box.left - box.width / 2) * 0.1;
      var shiftY = (event.clientY - box.top - box.height / 2) * 0.16;
      node.style.transform = "translate(" + shiftX + "px," + shiftY + "px)";
    });
  }

  function startFrameLoop() {
    var mouseX = -100;
    var mouseY = -100;
    var cursorX = -100;
    var cursorY = -100;
    var heroVisible = true;
    var canTrack = !REDUCED && FINE_POINTER && !!els.cursor;

    if (canTrack) {
      document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
      }, { passive: true });
      document.addEventListener("mouseover", function (event) {
        els.cursor.classList.toggle("grow", !!event.target.closest("a,button"));
      });
    }

    if (HAS_OBSERVER && els.heroSection) {
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
      }, { threshold: 0 }).observe(els.heroSection);
    }

    if (REDUCED) {
      return;
    }

    function frame() {
      if (canTrack) {
        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;
        els.cursor.style.transform = "translate3d(" + (cursorX - 6) + "px," + (cursorY - 6) + "px,0)";
      }
      if (els.heroBg && heroVisible) {
        var offset = Math.min(window.scrollY, PARALLAX_LIMIT) * 0.14;
        els.heroBg.style.transform = "translate3d(0," + offset + "px,0) scale(1.04)";
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function startHeaderState() {
    var collapsed = false;
    function sync() {
      var next = window.scrollY > 40;
      if (next !== collapsed) {
        els.siteHead.classList.toggle("scrolled", next);
        collapsed = next;
      }
    }
    window.addEventListener("scroll", sync, { passive: true });
    sync();
  }

  function init() {
    renderFlashRow();
    renderCatalog();
    renderCart();
    syncWishBadge();
    bindFilterTabs();
    bindSearch();
    bindCartActions();
    bindShortcuts();
    bindDelegatedClicks();
    bindNewsletter();
    startLoader();
    startCountdown();
    startCounters();
    startReveals();
    startQuotes();
    startQuiz();
    startMotion();
    startFrameLoop();
    startHeaderState();
  }

  init();
})();
