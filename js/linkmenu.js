/*! サブメニューのパカパカする動きを実装 */
$(document).ready(function(){

  $("#PAGE_LINK h4").click(function () { // id="PAGE_LINK h4"を押したら実行
    if($(this).hasClass("openlink")){ // h4にclass="openlink"があるかないか
      $(this).removeClass("openlink"); // classにopenlinkがついている時は、それを削除
    }else{
      $(this).addClass("openlink"); // classにopenlinkが無い時はopenlinkを追加
    }
      $("#PAGE_LINK h4 + ul").slideToggle(); // id="PAGE_LINK"の後にあるh4直後のULを表示させる
  });

  $("#CATEGORIES_LINK h4").click(function () { //id="CATEGORIES_LINK h4"を押したら実行
    if($(this).hasClass("openlink")){ // h4にclass="openlink"があるかないか
        $(this).removeClass("openlink"); // classにopenlinkがついている時は、それを削除
    }else{
      $(this).addClass("openlink"); // classにopenlinkが無い時はopenlinkを追加
    }
      $("#CATEGORIES_LINK h4 + ul").slideToggle(); // id="CATEGORIES_LINK"の後にあるh4直後のULを表示させる
  });
});
