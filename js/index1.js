//轮播图

var carousel_lists = document.getElementsByClassName('carousel_list');
var left_btn = document.getElementById('bar_left');
var right_btn = document.getElementById('bar_right');

var index = 0;  //index 表示第几张图片在展示  ---> 第几张图片有 active 这个类名

//清除类名 active
var clearActive = function () {
  for(var i = 0; i < carousel_lists.length; i ++){
    carousel_lists[i].className = 'carousel_list';
  }
};

//展示有 active 类名的图片
var goIndex = function () {
  clearActive();
  carousel_lists[index].className = 'carousel_list active';
};

//实现下一张图片的展示，找到对应的 index
var goNext = function () {
  if(index == 4){
    index = 0;
  }else {
    index ++;
  }
  goIndex();
};

//实现上一张图片的展示，找到对应的 index
var goPre = function () {
  if(index == 0){
    index = 4;
  }else {
    index --;
  }
  goIndex();
};

//给 bar_right 设置事件，实现点击到下一张图片
right_btn.addEventListener('click',function () {
  goNext();
});

//给 bar_left 设置事件，实现点击到上一张图片
left_btn.addEventListener('click', function () {
  goPre();
});
