<script setup>
  import { faL, fas } from "@fortawesome/free-solid-svg-icons";
  import { reactive, ref, watch, onMounted } from "vue";

  const menuclick = ref(true);
  const changeStyle = ref(true);
  const menuType = ref("");
  const menuTypeChange = () => {
    if (deviceType.value === 0) {
      menuType.value = menuclick.value
        ? "absolute md:static right-0 top-11 w-40 bg-slate-400 md:top-0 md:flex md:w-full md:gap-4 md:bg-transparent md:p-0 md:pr-4 opacity-100"
        : "absolute right-0 top-11  opacity-0";
    } else {
      menuType.value = menuclick.value
        ? "absolute right-0 top-11 w-40 bg-slate-400 flex flex-col top-0 flex gap-1 p-0 pr-4 opacity-100"
        : "absolute right-0 top-11  opacity-0";
    }
  };
  onMounted(() => {
    menuTypeChange();
  });
  const navList = {
    news: "NEWS & EVENTS",
    moto: "摩托車",
    refit: "配件",
    clothes: "服飾精品",
    dealer: "經銷商",
    about: "關於TRIUMPH",
    warranty: "售後服務",
  };

  const handlerMenuEvent = () => {
    menuclick.value = !menuclick.value;
    menuTypeChange();
  };

  const boardImgList = [
    "boardProduct_1.png",
    "boardProduct_2.png",
    "boardProduct_3.png",
  ];
  const boardIndex = ref(0);
  const adProduct = ref("adProduct.png");
  const newProductImgList = [
    "newProduct_1.png",
    "newProduct_2.png",
    "newProduct_3.png",
  ];
  const newProductIndex = ref(0);

  const runBoardIndex = (value = 0) => {
    let num = value == 0 ? 1 : value;
    boardIndex.value += num;
    boardIndex.value =
      boardIndex.value < 0
        ? boardImgList.length - 1
        : boardIndex.value % boardImgList.length;
    newProductIndex.value = boardIndex.value;
  };

  setInterval(() => {
    runBoardIndex();
  }, 10000);

  const NewProductList = [
    "GONDA | BD650R",
    "GONDA | BD300R",
    "GONDA | BD350",
    "GONDA | BD650F",
    "GONDA | BD150R",
    "GONDA | BD1000R",
  ];

  const discountProductList = [
    {
      name: "Lorem, ipsum dolor.",
      price: 33000,
      discount: 31500,
      url: "discountProduct_1.png",
    },
    {
      name: "Lorem ipsum dolor sit amet.",
      price: 1980,
      discount: 1680,
      url: "discountProduct_2.png",
    },
    {
      name: "Lorem ipsum dolor sit.",
      price: 5040,
      discount: 3200,
      url: "discountProduct_3.png",
    },
    {
      name: "Lorem ipsum dolor sit amet consectetur.",
      price: 2776,
      discount: 2680,
      url: "discountProduct_4.png",
    },
    {
      name: "Lorem ipsum dolor sit.",
      price: 12800,
      discount: 9800,
      url: "discountProduct_5.png",
    },
    {
      name: "Lorem ipsum dolor sit amet.",
      price: 3990,
      discount: 2990,
      url: "discountProduct_6.png",
    },
  ];

  const hitoProductList = [
    { title: "有感精選", url: "hitoProduct_1.png" },
    { title: "旅遊清單", url: "hitoProduct_2.png" },
    { title: "節日專區", url: "hitoProduct_3.png" },
  ];

  const goodProductList = [
    { title: "居家生活", url: "goodProduct_1.png" },
    { title: "露營用品", url: "goodProduct_2.png" },
    { title: "個人風格", url: "goodProduct_3.png" },
    { title: "MenPower", url: "goodProduct_4.png" },
  ];

  const followusList = [
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_1.png",
    },
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_2.png",
    },
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_3.png",
    },
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_4.png",
    },
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_5.png",
    },
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_6.png",
    },
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_7.png",
    },
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_8.png",
    },
    {
      content:
        "#購物節 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis!",
      url: "followus_9.png",
    },
  ];

  const deviceType = ref(0);

  const deviceSize = ref("w-full h-full");

  const handlerChangeDevice = (type) => {
    deviceType.value = type;
    deviceSize.value =
      type === 0
        ? "w-full h-full"
        : type === 1
        ? "w-[820px] h-[844px]"
        : "w-[390px] h-[844px]";
    menuclick.value = deviceType.value === 0 ? true : false;
    changeStyle.value = deviceType.value === 0 ? true : false;
    menuTypeChange();
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 501) {
      deviceType.value = 0;
    }
    menuclick.value = window.innerWidth > 501 ? true : false;
    changeStyle.value = window.innerWidth > 501 ? true : false;
    menuTypeChange();
  });
</script>

<template>
  <div
    class="full-setting"
    :class="[deviceType===0?'h-full':'h-screen ']"
  >
    <!-- RWD toggleButton -->
    <div class="div-togglebutton">
      <button
        class="togglebtn-pc"
        @click="handlerChangeDevice(0)"
      ><font-awesome-icon :icon="['fa', 'computer']" /></button>
      <div class="dividing-line"></div>
      <button
        class="togglebtn-pad"
        @click="handlerChangeDevice(1)"
      >
        <div class="inside-square"></div>
      </button>
      <div class="dividing-line"></div>
      <button
        class="togglebtn-phone"
        @click="handlerChangeDevice(2)"
      >
        <div class="inside-square"></div>
      </button>
    </div>
    <div :class="[deviceSize]">
      <div
        class="scoped-size"
        :class="[deviceType!==0?'mt-4 overflow-y-scroll box-border ':' overflow-clip ']"
      >
        <!-- nav -->
        <div class="nav">
          <p class="logo">RustRunner</p>

          <div class="menu">
            <p
              class="menu-logo"
              :class="[deviceType===0 ?'md:hidden':'']"
              @click="handlerMenuEvent"
            >
              <font-awesome-icon :icon="!menuclick ? ['fa', 'list'] : ['fa', 'x']" />
            </p>
            <ol
              class="menu-list"
              :class="[menuType]"
            >
              <li
                class="menu-item"
                v-for="(value, key) in navList"
                :key="key"
              >
                <a>{{ value }}</a>
              </li>
            </ol>
          </div>
        </div>
        <!-- first Block -->
        <div
          class="first-block"
          :class="[deviceType===2?'flex-col h-full':'']"
        >
          <!-- boardList -->
          <div class="board-list">
            <div class="board-togglebtn-position">
              <div
                class="board-togglebtn"
                @click="runBoardIndex(-1)"
              >
                &lt;
              </div>

              <div
                class="board-togglebtn"
                @click="runBoardIndex(1)"
              >
                &gt;
              </div>
            </div>
            <div class="board-pagination-position">
              <div
                v-for="(link, idx) in boardImgList"
                :key="idx"
                class="pagination-item"
                :class="[idx === boardIndex ? 'bg-gray-500' : ' bg-gray-600/70']"
              ></div>
            </div>
            <img
              :src="boardImgList[boardIndex]"
              class="board-img"
              alt=""
            >
          </div>
          <!-- AD -->
          <div class="ad">
            <img
              :src="adProduct"
              class="ad-img"
              alt=""
            >
          </div>
        </div>
        <!-- Second Block -->
        <div>
          <!-- New Product -->
          <p class="block-title">新品上架</p>
          <div
            class="block-newproduct"
            :class="[deviceType===2?'flex-col h-full':'']"
          >

            <div class="newproduct-block-img">
              <img
                :src="newProductImgList[newProductIndex]"
                class="newproduct-img"
                alt=""
              >
            </div>

            <ul class="newproduct-itemlist">
              <li
                class="newproduct-item"
                v-for="(str, idx) in NewProductList"
                :key="idx"
              >
                <p>{{ str }}</p>
                <button class="newproduct-btn">
                  SHOP NOW
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!-- Third Block -->
        <div>
          <!-- Discount -->
          <p class="block-title text-red-700">
            精選折扣
          </p>
          <p
            class="discount-changetype-btn"
            :class="[deviceType!==2?'sm:hidden':'']"
            @click="changeStyle = !changeStyle"
          >
            <font-awesome-icon :icon="changeStyle ? ['fa', 'list'] : ['fa', 'table']" />
          </p>
          <div
            :class="[changeStyle ? 'flex-col sm:flex-row ' : '']"
            class="block-discount"
          >

            <div
              v-for="(product, idx) in discountProductList"
              class="discount-item"
              :class="[ changeStyle  ? deviceType===2?'w-full': 'w-full sm:w-[300px]  sm:h-full' :  'w-[47%] h-full']"
              :key="idx"
            >
              <div
                :class="[ changeStyle ? deviceType===2?'w-full':  'h-96 w-full sm:w-[300px] object-cover' : deviceType===2?'w-full h-44':'w-full h-44 sm:h-96 sm:w-full']"
                class="overflow-hidden"
              >
                <img
                  class="h-full w-full "
                  :src="product.url"
                />
              </div>

              <p class="mt-2 whitespace-pre-wrap">{{ product.name }}</p>
              <div class="text-sm font-light md:text-xs">
                建議售價
                <p class="inline-block line-through">NT${{ product.price.toLocaleString() }}</p>
              </div>
              <p class="font-normal md:text-sm">NT$ {{ product.discount.toLocaleString() }}</p>
              <button class="discount-btn">
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <!-- Forth Block -->
        <div>
          <!-- Hito Topic -->
          <p class="block-title">熱門話題</p>
          <div
            class="block-hitotopic"
            :class="[deviceType===2?'flex-col':'']"
          >
            <div
              class="hitotopic-items"
              v-for="(product,idx) in hitoProductList"
              :key="idx"
            >
              <p class="hitotopic-btn-position">{{product.title}}</p>
              <button class="hitotopic-btn">
                馬上逛逛
              </button>
              <img
                :src="product.url"
                class="hitotopic-img"
                alt=""
              />
              <div class="hitotopic-hover"></div>
            </div>

          </div>
        </div>
        <!-- Fifth Block -->
        <div>
          <!-- Find Goods-->
          <p class="block-title">尋找好物</p>
          <div
            class="block-findgoods"
            :class="[deviceType===2?'flex-col':'']"
          >
            <div
              class="findgoods-items"
              v-for="(product,idx) in goodProductList"
              :key="idx"
            >
              <div class="findgoods-hover">
                <div class="mb-3 text-xs font-bold">{{ product.title }}</div>
                <button class="findgoods-btn">
                  馬上逛逛
                </button>
              </div>
              <img
                :src="product.url"
                class="findgoods-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- Sixth Block -->
        <div>
          <!-- Follow us -->
          <p class="block-title">關注我們</p>
          <div class="block-followus">
            <div
              class="followus-item"
              :class="[deviceType!==0?'w-1/3 h-1/3':' w-[30vw] h-[30vw]']"
              v-for="(item,idx) in followusList"
              :key="idx"
            >
              <div class="followus-item-position">
                <p
                  class="text-sm"
                  :class="[deviceType===2?'':'md:text-3xl ']"
                >{{ item.content }}</p>
                <p
                  class="followus-icon"
                  :class="[deviceType===2?'':'md:text-3xl']"
                >
                  <font-awesome-icon
                    class="hover:cursor-pointer"
                    :icon="['fab', 'facebook']"
                  />
                  <font-awesome-icon
                    class="hover:cursor-pointer"
                    :icon="['fab', 'instagram']"
                  />
                  <font-awesome-icon
                    class="hover:cursor-pointer"
                    :icon="['fab', 'pinterest']"
                  />
                </p>
              </div>
              <img
                :src="item.url"
                class="object-center"
                alt=""
              >
            </div>
          </div>
        </div>
        <!-- Footer -->
        <div
          class="block-footer"
          :class="[deviceType!==0?'flex-col h-fit':'flex-col md:flex-row md:h-40']"
        >
          <!-- contact with us -->
          <div class="footer-inline-block">
            <p class="font-bold ">聯絡我們</p>
            <p class="text-sm">客服時間 Mon-Fir 9:00 - 16:00</p>
            <p class="text-sm">客服信箱 test@abc.com.tw</p>
            <p class="text-sm">商務合作 domain@test.com.tw</p>
          </div>
          <!-- customer service -->
          <div class="footer-inline-block">
            <p class="font-bold">顧客服務</p>
            <a
              class="text-sm"
              href=""
            >購物說明</a>
            <a
              class="text-sm"
              href=""
            >退換貨說明</a>
            <a
              class="text-sm"
              href=""
            >隱私權條款</a>
            <a
              class="text-sm"
              href=""
            >常見Q&A</a>
          </div>
          <!-- member service -->
          <div class="footer-inline-block">
            <p>會員專區</p>
          </div>
          <!-- social media icon -->
          <div class="footer-mediaicon">
            <font-awesome-icon
              class="hover:cursor-pointer"
              :icon="['fab', 'facebook']"
            />
            <font-awesome-icon
              class="hover:cursor-pointer"
              :icon="['fab', 'instagram']"
            />
            <font-awesome-icon
              class="hover:cursor-pointer"
              :icon="['fab', 'pinterest']"
            />
          </div>
          <!-- search form -->
          <div class="footer-searchform">
            <input
              class="searchform-input"
              type="text"
            >
            <button class="searchform-btn"><font-awesome-icon :icon="['fa', 'search']" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style >
  .full-setting {
    @apply flex  w-full flex-col items-center justify-start overflow-hidden bg-slate-100 box-border;
  }
  .div-togglebutton {
    @apply hidden w-full  justify-center gap-2 bg-white p-2 shadow-sm shadow-slate-400 lg:flex;
  }
  .scoped-size {
    @apply h-full bg-white;
  }
  .nav {
    @apply flex h-16 w-full items-center justify-between bg-gray-800;
  }
  .dividing-line {
    @apply h-12 w-[1px] border-r-[1px] border-slate-200;
  }
  .togglebtn-pc {
    @apply w-10 h-12  text-2xl rounded-md shadow-[1px_1px_2px_1px_rgba(0,0,0,0.3)] focus:shadow-inner focus:shadow-slate-600 hover:cursor-pointer hover:bg-slate-50;
  }
  .togglebtn-pad {
    @apply w-10 h-12  flex justify-center pt-3 pb-3 rounded-md shadow-[1px_1px_2px_1px_rgba(0,0,0,0.3)] focus:shadow-inner focus:shadow-slate-600 hover:cursor-pointer hover:bg-slate-50;
  }
  .togglebtn-phone {
    @apply w-10 h-12  flex justify-center pt-3 pb-3 pl-3 pr-3 rounded-md shadow-[1px_1px_2px_1px_rgba(0,0,0,0.3)] focus:shadow-inner focus:shadow-slate-600 hover:bg-slate-50;
  }
  .inside-square {
    @apply w-6 h-full border-[3px] border-black rounded-sm;
  }
  .logo {
    @apply ml-4 font-[Trattatello] text-4xl text-gray-200 hover:cursor-pointer;
  }
  .menu {
    @apply relative flex h-6 w-6 flex-col items-center justify-center gap-1 text-white md:w-full md:flex-row md:justify-end;
  }
  .menu-logo {
    @apply mr-4 text-2xl hover:text-gray-300 transition delay-700 ease-in-out active:animate-spin z-20;
  }
  .menu-list {
    @apply justify-end   p-4 z-10;
  }
  .menu-item {
    @apply hover:italic hover:text-black md:hover:text-white overflow-hidden md:border-white after:block after:w-full after:translate-x-[-100%] after:h-[1px] md:after:bg-white after:bg-black after:hover:translate-x-0 after:hover:transition-transform hover:cursor-pointer;
  }
  .board-list {
    @apply z-0 h-[650px] w-full flex flex-col justify-center gap-2 pb-2 md:pb-0 md:flex-1 relative overflow-hidden;
  }
  .first-block {
    @apply md:flex;
  }
  .board-togglebtn-position {
    @apply absolute flex flex-1 items-center justify-between pl-4 pr-4 font-serif w-full text-6xl z-10;
  }
  .board-togglebtn {
    @apply font-bold text-white/60 hover:cursor-pointer hover:text-white/80;
  }
  .board-pagination-position {
    @apply absolute bottom-4 w-full flex items-end justify-center gap-2;
  }
  .pagination-item {
    @apply z-10 h-2 w-2 rounded-full;
  }
  .board-img {
    @apply absolute;
  }
  .ad {
    @apply z-0 flex h-[650px] w-full flex-col justify-center gap-2 pb-2 md:pb-0 md:flex-1 items-center overflow-hidden;
  }
  img {
    @apply w-full h-full object-cover hover:scale-110 transition delay-200 ease-in-out duration-500;
  }
  .block-title {
    @apply p-8 text-center text-3xl font-bold tracking-[0.5rem];
  }
  .block-newproduct {
    @apply md:flex md:gap-4 md:pl-4 md:pr-4 overflow-hidden;
  }
  .newproduct-block-img {
    @apply flex-1 overflow-hidden;
  }
  .newproduct-img {
    @apply h-[465px] w-full;
  }
  .newproduct-itemlist {
    @apply p-2 md:flex md:flex-1 md:h-[465px] md:flex-col md:justify-around md:p-0 justify-between;
  }
  .newproduct-item {
    @apply mb-2 flex h-16 items-center justify-between bg-gray-100 pl-6 pr-4 transition-colors last:mb-0 hover:cursor-pointer hover:bg-gray-800 hover:text-white;
  }
  .newproduct-btn {
    @apply border-2 border-slate-500 p-2 text-[10px];
  }
  .discount-changetype-btn {
    @apply mb-2 ml-4 mr-4 mt-2 w-fit rounded-md border-2 border-slate-600 pl-1 pr-1 hover:cursor-pointer;
  }
  .block-discount {
    @apply w-full flex flex-wrap items-start justify-center pl-2 pr-2 sm:pl-4 sm:pr-4 gap-2;
  }
  .discount-item {
    @apply transition delay-500;
  }
  .discount-btn {
    @apply mt-2 w-28 rounded-lg border-[1px] border-slate-800 pb-1 pl-2 pr-2 pt-1 text-sm hover:bg-slate-800 hover:text-white hover:font-bold;
  }
  .block-hitotopic {
    @apply pl-4 pr-4 md:flex;
  }
  .hitotopic-items {
    @apply relative mb-4 last:mb-0 md:mb-0 md:flex-1;
  }
  .hitotopic-btn-position {
    @apply absolute left-8 top-[50%] z-10 text-white;
  }
  .hitotopic-btn {
    @apply absolute left-8 top-[57%] z-10 border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs text-white;
  }
  .hitotopic-img {
    @apply h-[478px] w-full object-cover;
  }
  .hitotopic-hover {
    @apply absolute left-0 top-0 h-full w-full bg-black/50 transition delay-100 ease-linear hover:bg-gray-600/50;
  }
  .block-findgoods {
    @apply pl-4 pr-4 md:flex md:gap-6;
  }
  .findgoods-items {
    @apply relative mb-4 h-[340px] w-full overflow-hidden md:mb-0 md:flex-1;
  }
  .findgoods-img {
    @apply h-[340px] w-full object-cover transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-300 hover:blur-sm hover:brightness-125;
  }
  .findgoods-btn {
    @apply border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs font-thin hover:bg-white hover:text-black;
  }
  .findgoods-hover {
    @apply absolute top-1/2 z-10 flex w-full flex-col items-center justify-center text-white;
  }
  .block-followus {
    @apply flex columns-3 flex-wrap justify-center pl-4 pr-4 mb-8;
  }
  .followus-item {
    @apply relative flex justify-center items-center p-1;
  }
  .followus-item-position {
    @apply absolute top-0 w-full h-full flex flex-col justify-between align-middle text-white text-center  hover:bg-black/50 opacity-0 hover:opacity-100 transition delay-300 ease-linear hover:cursor-pointer;
  }
  .followus-icon {
    @apply flex gap-4 justify-center;
  }
  .block-footer {
    @apply w-full h-auto max-h-96 bg-black flex justify-around text-white px-4 pt-4 pb-12;
  }
  .footer-inline-block {
    @apply flex-1  flex flex-col p-2  h-fit md:h-full;
  }
  .footer-mediaicon {
    @apply flex-1  flex justify-start gap-6 p-2 text-2xl;
  }
  .footer-searchform {
    @apply flex-1  flex justify-center items-start  p-2 box-border;
  }
  .searchform-input {
    @apply w-full h-8 focus:outline-0 text-black pl-2 rounded-l-md;
  }
  .searchform-btn {
    @apply h-8  pl-2 pr-2 border-[1px] rounded-r-md border-white;
  }
</style>
