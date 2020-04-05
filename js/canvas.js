/**
 * Created by airing on 15/7/15.
 */

var flag_a = new Array(7);
var flag_b = new Array(7);
for (var i = 1; i < 8; i++) {
  flag_a[i] = 0;
  flag_b[i] = 0;
}
function getTitle() {
  return document.getElementById("title").value;
}
function getImage() {
  return document.getElementById("imgHead1").src;
}
function getModel() {
  switch (document.getElementById("select1").value) {
    case "魔法卡":
      return "https://imgsa.baidu.com/forum/w%3D580/sign=75f84293a8d3fd1f3609a232004f25ce/589b7bd0f703918f579fec77513d269758eec47a.jpg";
    default:
      return "https://imgsa.baidu.com/forum/w%3D580/sign=75f84293a8d3fd1f3609a232004f25ce/589b7bd0f703918f579fec77513d269758eec47a.jpg";
  }
}
function getDescription() {
  // return document.getElementById("descript").value;
  var value = document.getElementById("descript").value;
  var myIndex = value.indexOf("\n"); //获取回车即换行符
  var sp = (my = value.slice(myIndex + 1));
  return sp;
}
function getCopying() {
  var value = document.getElementById("L-descript");
  if (length(value) == 0) {
    return false;
  } else {
    return value;
  }
}
function putContentView(cxt) {
  alert("你正在生成这张图片，不要拿去做坏事呀");
  //绘制卡片模板
  context.beginPath();
  context.rect(0, 0, 477, 666);
  context.fillStyle = "rgb(236, 236, 236)";
  var CardModel = new Image();
  CardModel.src = getModel();
  CardModel.onload = function () {
    context.drawImage(CardModel, -10, -10);
  };
  context.fill();
  //绘制卡片标题
  setTimeout(function () {
    context.beginPath();
    context.fillStyle = "yellow";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.font = "45px STHeitiSC-Light";
    context.fillText(getTitle(), 45, 50, 325);
  }, 1000);
  //绘制卡片种类描述
  setTimeout(function () {
    context.beginPath();
    var kindDescript = new Image();

    kindDescript.src =
      "https://imgsa.baidu.com/forum/w%3D580/sign=b5f15025cb1349547e1ee86c664f92dd/3cb431381f30e92453b774954c086e061c95f744.jpg";
    kindDescript.onload = function () {
      context.drawImage(kindDescript, 300, 100);
    };
  }, 1000);
  //绘制卡片种类图标
  context.beginPath();
  var kindIcon = new Image();
  kindIcon.src =
    "https://imgsa.baidu.com/forum/w%3D580/sign=d561d2f7dab44aed594ebeec831d876a/be89fcdde71190ef25bf4362ce1b9d16fcfa6007.jpg";
  kindIcon.onload = function () {
    context.drawImage(kindIcon, 500, 110);
  };
  //绘制卡片图片
  setTimeout(function () {
    context.beginPath();
    var CardImg = new Image();
    CardImg.src = getImage();

    CardImg.onload = function () {
      context.drawImage(CardImg, 66, 160, 428, 428);
    };
  }, 1000);
  //绘制文字描述
  setTimeout(function () {
    context.beginPath();
    context.fillStyle = "black";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.font = "15px STHeitiSC-Light";

    if (typeof getDescription() == "string") {
      context.fillText(
        getDescription(), //34字节
        40,
        630,
        465
      );
    } else {
      context.fillText(
        getDescription()[0], //34字节
        40,
        630,
        465
      );
      context.fillText(
        getDescription()[1], //34字节
        40,
        645,
        465
      );
    }
  }, 1000);
  //绘制版权说明
  setTimeout(function () {
    const Copying = getCopying();
    if (Copying) {
      context.beginPath();
      context.fillStyle = "black";
      context.textAlign = "left";
      context.textBaseline = "top";
      context.font = "15px STHeitiSC-Light";
      context.fillText(
        Copying, //34字节
        40,
        785,
        465
      );
    } else {
      context.beginPath();
      context.fillStyle = "black";
      context.textAlign = "left";
      context.textBaseline = "top";
      context.font = "15px STHeitiSC-Light";
      context.fillText(
        "@由wuzhong233制作", //34字节
        40,
        785,
        465
      );
    }
  }, 1000);
  // 绘制卡片防伪标
  context.beginPath();
  var CardCopying = new Image();
  CardCopying.src =
    "https://imgsa.baidu.com/forum/w%3D580/sign=9f4cbf38c9ea15ce41eee00186013a25/bc28bdc27d1ed21b9283ff58ad6eddc450da3f05.jpg";
  CardCopying.onload = function () {
    context.drawImage(CardCopying, 530, 780, 20, 20);
  };
  //------------------------------------------
  //   mainView(cxt);
  //   var chk = new Array(7);
  //   var dis = 0;
  //   var len = 0;

  //   for (var i = 1; i < 8; i++) {
  //     chk[i] = document.getElementById("check" + i);
  //     if (chk[i].checked) {
  //       var player = document.getElementById("select" + i);
  //       var index = player.selectedIndex;
  //       var value = player.options[index].value;
  //       var content = document.getElementById("cnt" + i).value;
  //       var time = document.getElementById("time" + i);
  //       if (i == 1) {
  //         dis = 80;
  //         len = 60;
  //       } else {
  //         dis = dis + len;
  //       }
  //       if (time.value != "") {
  //         drawTimeMsg(cxt, dis, time.value);
  //         dis = dis + 30;
  //       }
  //       if (value == "我" && flag_b[i] == 0) {
  //         drawRight(cxt, dis, content);
  //       } else if (value == "对方" && flag_b[i] == 0) {
  //         drawLeft(cxt, dis, content);
  //       } else if (value == "我" && flag_b[i] != 0) {
  //         drawRightExp(cxt, dis, flag_a[i]);
  //       } else {
  //         drawLeftExp(cxt, dis, flag_a[i]);
  //       }

  //       if (content.length > 13 && content.length <= 26) {
  //         len = 80;
  //       } else if (content.length > 26 && content.length <= 35) {
  //         len = 100;
  //       } else if (content.length >= 0 && content.length <= 13) {
  //         len = 60;
  //       } else {
  //         alert("对话框不能超过35个字符");
  //       }
  //     } else {
  //       break;
  //     }
  //   }
  // }

  // function expClicked(id) {
  //   var img_a = id % 10;
  //   var b = parseInt(id / 10);
  //   var divImg = new Array(9);
  //   for (var i = 1; i < 10; i++) {
  //     divImg[i] = document.getElementById("exp" + b + i);
  //     divImg[i].className = "";
  //   }
  //   var image = document.getElementById("exp" + id);
  //   image.className = "imgClicked";
  //   if (img_a != 9) {
  //     flag_a[b] = id;
  //     flag_b[b] = b;
  //   } else {
  //     flag_a[b] = 0;
  //     flag_b[b] = 0;
  //   }
}
