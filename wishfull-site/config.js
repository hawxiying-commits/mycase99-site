/* 願滿 Wishfull 網站設定：要改電話、LINE、產品，只要改這個檔案（或接上 Google 試算表） */
window.WISHFULL = {
  phone: "0958844378",
  phoneDisplay: "0958 844 378",
  // 兩個都是 LINE 官方帳號（@499lujfu、@988mcfny）；要換主要帳號改這一行
  lineOaId: "@988mcfny",
  email: "wishfull9889@gmail.com",
  facebook: "https://www.facebook.com/Wishfull988/",
  address: "高雄市三民區朝陽街72號1樓",
  hours: "週一～週五 09:00–16:00（週六日公休）",

  /* 產品後台：Google 試算表「檔案 → 共用 → 發布到網路 → 逗號分隔值 (.csv)」產生的網址貼在這裡。
     留空的話，網站顯示下面的 products。欄位說明見「後台使用說明.md」。 */
  sheetCsvUrl: "",

  /* 產品清單（資料來源：業主 2026/11/23 LINE 提供的明細與 11/25 傳的照片）
     類型：現貨＝做好的易穿脫家居服；改製＝把一般成衣改成易穿脫
     照片：多張用 | 分隔；價格留空＝顯示「價格請洽詢」 */
  products: [
    { 上架:"是", 類型:"現貨", 分類:"成人家居服", 品名:"夏季鈕扣型家居服（上衣＋短褲）", 款式:"藍灰色・男款", 尺寸:"L", 開合:"大鈕扣・黏貼",
      說明:"短袖前襟大鈕扣，肩袖與短褲兩側可打開。現貨衣服上有補丁，以最後兩張照片為準。", 價格:"",
      照片:"assets/products/summer-button-3.jpg|assets/products/summer-button-1.jpg|assets/products/summer-button-2.jpg|assets/products/summer-button-4.jpg|assets/products/summer-button-5.jpg" },
    { 上架:"是", 類型:"現貨", 分類:"成人家居服", 品名:"春秋款黏貼型家居服（上衣＋長褲）", 款式:"紗布棉・豆沙粉・女款", 尺寸:"L", 開合:"黏貼",
      說明:"肩線與袖子整片以魔鬼氈開合，長褲兩側從腰到褲腳全開，附兩個口袋。", 價格:"",
      照片:"assets/products/spring-velcro-rose-1.jpg|assets/products/spring-velcro-rose-2.jpg|assets/products/spring-velcro-rose-3.jpg|assets/products/spring-velcro-rose-4.jpg" },
    { 上架:"是", 類型:"現貨", 分類:"成人家居服", 品名:"春秋款拉鏈型家居服（上衣＋長褲）", 款式:"棉・天藍色・女款", 尺寸:"L", 開合:"拉鍊",
      說明:"袖子與褲管兩側可整片打開，用拉鍊開合。", 價格:"",
      照片:"assets/products/spring-zip-blue-1.jpg|assets/products/spring-zip-blue-2.jpg|assets/products/spring-zip-blue-3.jpg" },
    { 上架:"是", 類型:"現貨", 分類:"成人家居服", 品名:"秋冬款黏貼型家居服（上衣＋長褲）", 款式:"磨毛棉布・粉紅格・女款", 尺寸:"M", 開合:"黏貼",
      說明:"長袖上衣從肩到袖口整排黏貼，長褲兩側可打開，適合天冷時穿。", 價格:"",
      照片:"assets/products/fw-velcro-pink-3.jpg|assets/products/fw-velcro-pink-1.jpg|assets/products/fw-velcro-pink-2.jpg|assets/products/fw-velcro-pink-4.jpg|assets/products/fw-velcro-pink-5.jpg" },
    { 上架:"是", 類型:"現貨", 分類:"成人家居服", 品名:"秋冬款黏貼型家居服（上衣＋長褲）", 款式:"磨毛棉布・藍灰格・男款", 尺寸:"L", 開合:"黏貼",
      說明:"長袖上衣從肩到袖口整排黏貼，長褲兩側可打開。腳上有護具、拄拐杖也好穿。", 價格:"",
      照片:"assets/products/fw-velcro-bluegray-4.jpg|assets/products/fw-velcro-bluegray-1.jpg|assets/products/fw-velcro-bluegray-2.jpg|assets/products/fw-velcro-bluegray-3.jpg|assets/products/fw-velcro-bluegray-5.jpg" },
    { 上架:"是", 類型:"現貨", 分類:"尿袋褲・內褲", 品名:"夏季尿袋外出休閒七分褲", 款式:"黑色・內置口袋／外口袋兩款", 尺寸:"L", 開合:"",
      說明:"尿袋管路可從褲子口袋走線，外出看不出來。有內置口袋和外口袋兩種，詢問時請說明要哪一款。", 價格:"",
      照片:"assets/products/urine-bag-capri-1.jpg|assets/products/urine-bag-capri-3.jpg|assets/products/urine-bag-capri-2.jpg|assets/products/urine-bag-capri-4.jpg" },
    { 上架:"是", 類型:"現貨", 分類:"尿袋褲・內褲", 品名:"春秋內置型尿袋外出休閒褲", 款式:"黑色・長褲", 尺寸:"M", 開合:"",
      說明:"尿袋收在褲子內側口袋，春秋外出穿。", 價格:"", 照片:"" },
    { 上架:"是", 類型:"現貨", 分類:"尿袋褲・內褲", 品名:"尿袋型平口內褲", 款式:"淺灰色", 尺寸:"L", 開合:"",
      說明:"給使用尿袋的人穿的平口內褲。", 價格:"", 照片:"" },
    { 上架:"是", 類型:"現貨", 分類:"尿袋褲・內褲", 品名:"開襠褲（含襠布）", 款式:"淺灰色", 尺寸:"M", 開合:"",
      說明:"褲襠可打開，附襠布遮蓋，換尿布、清潔不用整件脫下。", 價格:"", 照片:"" },
    { 上架:"是", 類型:"現貨", 分類:"兒童款", 品名:"夏季兒童款黏貼型家居服", 款式:"兒童款", 尺寸:"120 碼（M）", 開合:"黏貼",
      說明:"孩子受傷、骨折打石膏時，衣服打開就能穿。", 價格:"", 照片:"" },
    { 上架:"是", 類型:"現貨", 分類:"兒童款", 品名:"兒童款黏貼平口褲", 款式:"兒童款・短褲", 尺寸:"110 碼（S）|130 碼（L）", 開合:"黏貼",
      說明:"褲管兩側黏貼開合，腿部受傷也好穿脫。", 價格:"", 照片:"" },
    { 上架:"是", 類型:"改製", 分類:"成衣改製", 品名:"洋裝改製（長袖／短袖）", 款式:"套頭或雙側拉鍊開口・女款", 尺寸:"L–XL", 開合:"拉鍊",
      說明:"把一般洋裝加上雙側拉鍊開口，坐輪椅也能自己穿、保有外出的好看。", 價格:"",
      照片:"assets/products/kaizhi-dress-1.jpg|assets/products/kaizhi-dress-2.jpg" },
    { 上架:"是", 類型:"改製", 分類:"成衣改製", 品名:"吊帶牛仔褲改製", 款式:"雙側黏貼／拉鍊・褲襠黏貼・女款", 尺寸:"M", 開合:"黏貼・拉鍊",
      說明:"一般吊帶牛仔褲改成兩側與褲襠可打開，如廁、換尿布更方便。", 價格:"",
      照片:"assets/products/kaizhi-overalls.jpg" },
    { 上架:"是", 類型:"改製", 分類:"成衣改製", 品名:"牛仔喇叭褲改製", 款式:"褲腰到褲腳加長拉鍊・女款", 尺寸:"M", 開合:"拉鍊",
      說明:"整條褲管從腰到腳都能拉開，腿部受傷或打石膏也穿得下。", 價格:"", 照片:"" },
    { 上架:"是", 類型:"改製", 分類:"成衣改製", 品名:"背心式黏貼款內衣", 款式:"女款", 尺寸:"L–XL", 開合:"黏貼",
      說明:"肩帶黏貼開合，手抬不高也能穿上內衣。", 價格:"", 照片:"" }
  ]
};
