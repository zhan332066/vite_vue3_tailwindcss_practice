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

  const boardImgList = ["boardList_1.png", "boardList_2.png", "boardList_3.png"];
  const boardIndex = ref(0);

  const runBoardIndex = (value = 0) => {
    let num = value == 0 ? 1 : value;
    boardIndex.value += num;
    boardIndex.value =
      boardIndex.value < 0
        ? boardImgList.length - 1
        : boardIndex.value % boardImgList.length;
  };

  setInterval(() => {
    runBoardIndex();
  }, 10000);

  const NewProductList = [
    "HONDA | CB650R",
    "HONDA | CB300R",
    "HONDA | CB350",
    "HONDA | CB650F",
    "HONDA | CB150R",
    "HONDA | CB1000R",
  ];

  const discountProductList = [
    { name: "Lorem, ipsum dolor.", price: 33000, discount: 31500 },
    { name: "Lorem ipsum dolor sit amet.", price: 1980, discount: 1680 },
    { name: "Lorem ipsum dolor sit.", price: 5040, discount: 3200 },
    {
      name: "Lorem ipsum dolor sit amet consectetur.",
      price: 2776,
      discount: 2680,
    },
    { name: "Lorem ipsum dolor sit.", price: 12800, discount: 9800 },
    { name: "Lorem ipsum dolor sit amet.", price: 3990, discount: 2990 },
  ];

  window.addEventListener("resize", () => {
    menuclick.value = window.innerWidth > 767 ? true : false;
    changeStyle.value = window.innerWidth > 767 ? true : false;
  });

  const changeStyle = ref(false);
</script>

<template>
  <!-- nav -->
  <div class="flex h-16 w-full items-center justify-between bg-gray-800">
    <p class="ml-2 font-[Trattatello] text-3xl text-gray-200">RustRunner</p>

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
        } right-0 top-11 w-40 justify-end  bg-slate-400 p-4 md:top-0 md:flex md:w-full md:gap-4 md:bg-transparent md:p-0 md:pr-4`"
      >
        <li
          class="border-b-0 border-black underline-offset-0 transition ease-in-out hover:border-b-[1px] hover:italic hover:text-black"
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
    <div :class="`z-0 h-[650px] w-full bg-cover bg-center bg-[url('${boardImgList[boardIndex]}')] flex flex-col justify-center gap-2 pb-2 md:flex-1`">
      <div class="flex flex-1 items-center justify-between pl-4 pr-4 font-[Trattatello] text-6xl">
        <div
          class="font-bold text-white/40 hover:cursor-pointer hover:text-white/60"
          @click="runBoardIndex(-1)"
        >
          &lt;
        </div>

        <div
          class="font-bold text-white/40 hover:cursor-pointer hover:text-white/60"
          @click="runBoardIndex(1)"
        >
          &gt;
        </div>
      </div>
      <div class="flex items-end justify-center gap-2">
        <div
          v-for="(link, idx) in boardImgList"
          :key="idx"
          :class="`z-10 h-2 w-2 rounded-full ${
            idx === boardIndex ? 'bg-gray-500' : ' bg-gray-600/70'
          }`"
        ></div>
      </div>
    </div>
    <!-- AD -->
    <div class="z-0 flex h-[650px] w-full flex-col justify-center gap-2 bg-[url('boardList_1.png')] bg-cover bg-center pb-2 md:flex-1"></div>
  </div>
  <!-- Second Block -->
  <div>
    <!-- New Product -->
    <p class="p-8 text-center text-3xl font-bold tracking-[0.5rem]">新品上架</p>
    <div class="md:flex md:gap-4 md:pl-4 md:pr-4">
      <div class="md:flex-1">
        <div :class="`z-0 h-[465px] w-full p-2 bg-[url('${boardImgList[boardIndex]}')] bg-cover bg-center `"></div>
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
          src="boardList_1.png"
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
      <div class="relative mb-4 md:mb-0 md:flex-1">
        <p class="absolute left-8 top-[50%] z-10 text-white">有感精選</p>
        <button class="absolute left-8 top-[57%] z-10 border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs text-white">
          馬上逛逛
        </button>
        <img
          src="boardList_1.png"
          class="h-[478px] w-full object-cover"
          alt=""
        />
        <div class="absolute left-0 top-0 h-full w-full bg-black/50 transition delay-100 ease-linear hover:bg-gray-600/50"></div>
      </div>
      <div class="relative mb-4 md:mb-0 md:flex-1">
        <p class="absolute left-8 top-[50%] z-10 text-white">有感精選</p>
        <button class="absolute left-8 top-[57%] z-10 border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs text-white">
          馬上逛逛
        </button>
        <img
          src="boardList_2.png"
          class="h-[478px] w-full object-cover"
          alt=""
        />
        <div class="absolute left-0 top-0 h-full w-full bg-black/50 transition delay-100 ease-linear hover:bg-gray-600/50"></div>
      </div>
      <div class="relative md:flex-1">
        <p class="absolute left-8 top-[50%] z-10 text-white">有感精選</p>
        <button class="absolute left-8 top-[57%] z-10 border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs text-white">
          馬上逛逛
        </button>
        <img
          src="boardList_3.png"
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
      <div class="relative mb-4 h-[340px] w-full overflow-hidden md:mb-0 md:flex-1">
        <div class="absolute top-1/2 z-10 flex w-full flex-col items-center justify-center text-white">
          <div class="mb-3 text-xs font-bold">居家生活</div>
          <button class="border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs font-thin hover:bg-white">
            馬上逛逛
          </button>
        </div>
        <img
          src="boardList_1.png"
          class="h-[340px] w-full object-cover transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-300 hover:blur-sm hover:brightness-125"
          alt=""
        />
      </div>
      <div class="relative mb-4 h-[340px] w-full overflow-hidden md:mb-0 md:flex-1">
        <div class="absolute top-1/2 z-10 flex w-full flex-col items-center justify-center text-white">
          <div class="mb-3 text-xs font-bold">品味餐廚</div>
          <button class="border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs font-thin hover:bg-white">
            馬上逛逛
          </button>
        </div>
        <img
          src="boardList_2.png"
          class="h-[340px] w-full object-cover transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-300 hover:blur-sm hover:brightness-125"
          alt=""
        />
      </div>
      <div class="relative mb-4 h-[340px] w-full overflow-hidden md:mb-0 md:flex-1">
        <div class="absolute top-1/2 z-10 flex w-full flex-col items-center justify-center text-white">
          <div class="mb-3 text-xs font-bold">個人風格</div>
          <button class="border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs font-thin hover:bg-white">
            馬上逛逛
          </button>
        </div>
        <img
          src="boardList_3.png"
          class="h-[340px] w-full object-cover transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-300 hover:blur-sm hover:brightness-125"
          alt=""
        />
      </div>
      <div class="relative mb-4 h-[340px] w-full overflow-hidden md:mb-0 md:flex-1">
        <div class="absolute top-1/2 z-10 flex w-full flex-col items-center justify-center text-white">
          <div class="mb-3 text-xs font-bold">媽咪寶貝</div>
          <button class="border-[1px] border-white pb-1 pl-4 pr-4 pt-1 text-xs font-thin hover:bg-white">
            馬上逛逛
          </button>
        </div>
        <img
          src="boardList_1.png"
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
    <div class="flex h-[440px] w-full flex-wrap justify-center gap-1 pl-4 pr-4 md:h-[1920px] md:gap-2">
      <div
        class="relative h-[143px] w-[143px] overflow-hidden md:h-[33%] md:w-[33%]"
        v-for="idx in 9"
        :key="idx"
      >
        <div class="absolute z-10 flex h-full w-full translate-y-10 flex-col items-center justify-center text-white opacity-0 transition delay-200 ease-in-out hover:translate-y-0 hover:cursor-pointer hover:bg-black/50 hover:opacity-100">
          <p class="absolute top-0">#媽的購物節</p>
          <p class="absolute bottom-0 flex gap-4 h-12 text-3xl">
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <font-awesome-icon :icon="['fab', 'instagram']" />
            <font-awesome-icon :icon="['fab', 'pinterest']" />
          </p>
        </div>
        <img
          src="boardList_1.png"
          class="absolute top-0 h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .fadein {
    animation: fadeinText 1s ease-in-out 2s;
  }
  @keyframes fadeinText {
    from {
      transform: translateX(50px);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>
