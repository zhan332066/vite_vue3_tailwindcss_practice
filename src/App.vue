<script setup>
  import { reactive, ref, watch } from "vue";

  const menuclick = ref(false);

  const navList = {
    news: "NEWS & EVENTS",
    moto: "摩托車",
    refit: "配件",
    clothes: "服飾精品",
    dealer: "經銷商",
    about: "關於TRIUMPH",
    warranty: "售後服務",
  };

  const menuList = ref(null);

  const handlerMenuEvent = () => {
    menuclick.value = !menuclick.value;

    // $refs('menuList')
  };

  const boardImgList = [
    "boardProduct_1.png",
    "boardProduct_2.png",
    "boardProduct_3.png",
  ];
  const boardIndex = ref(0);

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

  const handlerChangeInnerWidth = (innerWidth = 0) => {
    window.innerWidth = innerWidth === 0 ? window.screen.width : innerWidth;
    console.log(window.innerWidth);
  };

  window.addEventListener("resize", () => {
    menuclick.value = window.innerWidth > 767 ? true : false;
    changeStyle.value = window.innerWidth > 767 ? true : false;
  });

  const changeStyle = ref(false);
</script>

<template>
  <!-- RWD toggleButton -->
  <div class="hidden md:flex h-16  justify-center gap-2 p-2 bg-slate-10">
    <button
      class="w-10 text-2xl rounded-md shadow-[1px_1px_2px_1px_rgba(0,0,0,0.3)] focus:shadow-inner focus:shadow-slate-600 "
      @click="handlerChangeInnerWidth(0)"
    ><font-awesome-icon
        class="hover:cursor-pointer"
        :icon="['fa', 'computer']"
      /></button>
    <button
      class="w-10 flex justify-center pt-3 pb-3 rounded-md shadow-[1px_1px_2px_1px_rgba(0,0,0,0.3)] focus:shadow-inner focus:shadow-slate-600"
      @click="handlerChangeInnerWidth(753)"
    >
      <div class="w-6 h-full border-[3px] border-black rounded-sm
      "></div>
    </button>
    <button
      class="w-10 flex justify-center pt-3 pb-3 pl-3 pr-3 rounded-md shadow-[1px_1px_2px_1px_rgba(0,0,0,0.3)] focus:shadow-inner focus:shadow-slate-600"
      @click="handlerChangeInnerWidth(354)"
    >
      <div class="w-6 h-full border-[3px] border-black rounded-sm
      "></div>
    </button>
  </div>
  <!-- nav -->
  <div class="flex h-16 w-full items-center justify-between bg-gray-800">
    <p class="ml-2 font-[Trattatello] text-3xl text-gray-200 hover:cursor-pointer">RustRunner</p>

    <div class="relative flex h-6 w-6 flex-col items-center justify-center gap-1 text-white md:w-full md:flex-row md:justify-end">
      <p
        class="mr-4 text-2xl hover:text-gray-300 md:hidden"
        @click="handlerMenuEvent"
      >
        <font-awesome-icon
          class="transition delay-700 ease-in-out active:animate-spin"
          :icon="!menuclick ? ['fa', 'list'] : ['fa', 'x']"
        />
      </p>
      <ol
        ref="menuList"
        :class="`absolute ${
          menuclick ? 'opacity-100' : 'opacity-0'
        } right-0 top-11 w-40 justify-end  bg-slate-400 p-4 md:top-0 md:flex md:w-full md:gap-4 md:bg-transparent md:p-0 md:pr-4 z-10`"
      >
        <li
          class="hover:italic hover:text-black md:hover:text-white overflow-hidden md:border-white after:block after:w-full after:translate-x-[-100%] after:h-[1px] md:after:bg-white after:bg-black after:hover:translate-x-0 after:hover:transition-transform hover:cursor-pointer"
          v-for="(value, key) in navList"
          :key="key"
        >
          <a class="">{{ value }}</a>
        </li>
      </ol>
    </div>
  </div>
  <!-- first Block -->
  <div class="md:flex">
    <!-- boardList -->
    <div :class="`z-0 h-[650px] w-full flex flex-col justify-center gap-2 pb-2 md:pb-0 md:flex-1 relative overflow-hidden` ">
      <div class="absolute flex flex-1 items-center justify-between pl-4 pr-4 font-serif w-full text-6xl z-10 ">
        <div
          class="font-bold text-white/60 hover:cursor-pointer hover:text-white/80"
          @click="runBoardIndex(-1)"
        >
          &lt;
        </div>

        <div
          class="font-bold text-white/60 hover:cursor-pointer hover:text-white/80"
          @click="runBoardIndex(1)"
        >
          &gt;
        </div>
      </div>
      <div class="absolute bottom-4 w-full flex items-end justify-center gap-2">
        <div
          v-for="(link, idx) in boardImgList"
          :key="idx"
          :class="`z-10 h-2 w-2 rounded-full ${
            idx === boardIndex ? 'bg-gray-500' : ' bg-gray-600/70'
          }`"
        ></div>
      </div>
      <img
        :src="boardImgList[boardIndex]"
        class=" absolute w-full h-full object-cover hover:scale-110 transition delay-200 ease-in-out duration-500"
        alt=""
      >
    </div>
    <!-- AD -->
    <div class="z-0 flex h-[650px] w-full flex-col justify-center gap-2 pb-2 md:pb-0 md:flex-1 items-center">
      <img
        src="ad.png"
        class=" w-full h-full object-cover "
        alt=""
      >
    </div>
  </div>
  <!-- Second Block -->
  <div>
    <!-- New Product -->
    <p class="p-8 text-center text-3xl font-bold tracking-[0.5rem]">新品上架</p>
    <div class="md:flex md:gap-4 md:pl-4 md:pr-4">
      <div class="md:flex-1 ">
        <div :class="`z-0 h-[465px] w-full `">
          <img
            :src="newProductImgList[newProductIndex]"
            class="w-full h-full object-cover"
            alt=""
          >
        </div>
      </div>
      <div class="md:flex-1">
        <ul class="p-2 md:flex md:h-full md:flex-col md:justify-around md:p-0">
          <li
            class="mb-2 flex h-16 items-center justify-between bg-gray-100 pl-6 pr-4 transition-colors last:mb-0 hover:cursor-pointer hover:bg-gray-800 hover:text-white"
            v-for="(str, idx) in NewProductList"
            :key="idx"
          >
            <p>{{ str }}</p>
            <button class="border-2 border-slate-500 p-2 text-[10px]">
              SHOP NOW
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Third Block -->
  <div>
    <!-- Discount -->
    <p class="p-8 text-center text-3xl font-bold tracking-[0.5rem] text-red-700">
      精選折扣
    </p>
    <p
      class="mb-2 ml-4 mr-4 mt-2 w-fit rounded-md border-2 border-slate-600 pl-1 pr-1 hover:cursor-pointer md:hidden"
      @click="changeStyle = !changeStyle"
    >
      <font-awesome-icon :icon="changeStyle ? ['fa', 'list'] : ['fa', 'table']" />
    </p>
    <div :class="`flex ${
        changeStyle ? 'flex-col md:flex-row' : ''
      } flex-wrap items-start justify-center gap-2 md:gap-8 `">
      <div
        v-for="(product, idx) in discountProductList"
        :class="`${
          changeStyle ? 'w-full sm:w-[260px]  md:object-cover ' : 'w-56 '
        } bg-white transition delay-500 ease-in-out  `"
        :key="idx"
      >
        <img
          :class="`${changeStyle ? '' : 'h-56 w-56 object-cover'}`"
          :src="product.url"
        />
        <p class="mt-2 whitespace-pre-wrap">{{ product.name }}</p>
        <div class="text-sm font-light md:text-xs">
          建議售價
          <p class="inline-block line-through">NT${{ product.price }}</p>
        </div>
        <p class="font-normal md:text-sm">NT$ {{ product.discount }}</p>
        <button class="mt-2 w-28 rounded-md border-[1px] border-slate-800 pb-1 pl-2 pr-2 pt-1 text-sm hover:bg-gray-500 hover:text-white">
          加入購物車
        </button>
      </div>
    </div>
  </div>
  <!-- Forth Block -->
  <div>
    <!-- Hito Topic -->
    <p class="p-8 text-center text-3xl font-bold tracking-[0.5rem]">熱門話題</p>
    <div class="pl-4 pr-4 md:flex">
      <div
        class="relative mb-4 last:mb-0 md:mb-0 md:flex-1"
        v-for="(product,idx) in hitoProductList"
        :key="idx"
      >
        <p class="absolute left-8 top-[50%] z-10 text-white">{{product.title}}</p>
        <button class="absolute left-8 top-[57%] z-10 border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs text-white">
          馬上逛逛
        </button>
        <img
          :src="product.url"
          class="h-[478px] w-full object-cover"
          alt=""
        />
        <div class="absolute left-0 top-0 h-full w-full bg-black/50 transition delay-100 ease-linear hover:bg-gray-600/50"></div>
      </div>

    </div>
  </div>
  <!-- Fifth Block -->
  <div>
    <!-- Find Goods-->
    <p class="p-8 text-center text-3xl font-bold tracking-[0.5rem]">尋找好物</p>
    <div class="pl-4 pr-4 md:flex md:gap-6">
      <div
        class="relative mb-4 h-[340px] w-full overflow-hidden md:mb-0 md:flex-1"
        v-for="(product,idx) in goodProductList"
        :key="idx"
      >
        <div class="absolute top-1/2 z-10 flex w-full flex-col items-center justify-center text-white">
          <div class="mb-3 text-xs font-bold">{{ product.title }}</div>
          <button class="border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs font-thin hover:bg-white hover:text-black">
            馬上逛逛
          </button>
        </div>
        <img
          :src="product.url"
          class="h-[340px] w-full object-cover transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-300 hover:blur-sm hover:brightness-125"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- Sixth Block -->
  <div>
    <!-- Follow us -->
    <p class="p-8 text-center text-3xl font-bold tracking-[0.5rem]">關注我們</p>
    <div :class="`flex columns-3 flex-wrap justify-center pl-4 pr-4 mb-8`">
      <div
        :class="`relative w-[30vw] h-[30vw] flex justify-center items-center p-1`"
        v-for="(item,idx) in followusList"
        :key="idx"
      >
        <div class="absolute top-0 w-full h-full flex flex-col justify-between align-middle text-white text-center pt-4 pb-4 hover:bg-black/50 opacity-0 hover:opacity-100 transition delay-300 ease-linear hover:cursor-pointer ">
          <p class="md:text-3xl">{{ item.content }}</p>
          <p class="flex gap-4 justify-center md:text-3xl">
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
          class="w-full h-full object-cover object-center"
          alt=""
        >
      </div>
    </div>
  </div>
  <!-- Footer -->
  <div class="w-ful h-full md:h-40 bg-black flex flex-col md:flex-row justify-around text-white">

    <!-- contact with us -->
    <div class="flex-1  m-2 flex flex-col p-4">
      <p class="font-bold ">聯絡我們</p>
      <p class="text-sm">客服時間 Mon-Fir 9:00 - 16:00</p>
      <p class="text-sm">客服信箱 test@abc.com.tw</p>
      <p class="text-sm">商務合作 domain@test.com.tw</p>
    </div>
    <!-- customer service -->
    <div class="flex-1  m-2 flex flex-col p-4">
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
    <div class="flex-1  m-2 flex flex-col p-4">
      <p>會員專區</p>
    </div>
    <!-- social media icon -->
    <div class="flex-1  m-2 flex justify-start gap-6 p-4 text-2xl">
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
    <div class="flex-1  m-2 flex justify-center items-start  p-4 box-border">
      <input
        class="w-full h-8 focus:outline-0 text-black pl-2 rounded-l-md"
        type="text"
      >
      <button class="h-8  pl-2 pr-2 border-[1px] rounded-r-md border-white"><font-awesome-icon :icon="['fa', 'search']" /></button>
    </div>

  </div>
</template>

<style scoped>
</style>
