$(document).ready(function(){
$("#dialog").css("display","none");
$("#msg").css("display","none");
$("#dialog").css("opacity","0.5");

});

function closeDialog(){
$("#dialog").css("display","none");
$("#msg").css("display","none");
}
function showDialog(){
   /*秀出對話框*/
$("#dialog").css("display","");
$("#msg").css("display","");
        
var w=$("#msg").width();
var h=$("#msg").height();
var _top=_sh/2-h/2+$(document).scrollTop();//更好的方法 使用jQuery解決
var _left=_sw/2-w/2;
   /*設定視窗出現位置*/  
$("#msg").css("top",_top+'px');
$("#msg").css("left",_left+'px');
}
 $(document).ready(function() {
      $.datepicker.regional['zh-TW'] = {
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        prevText: "上月",
        nextText: "次月",
        weekHeader: "週"
      };
      $.datepicker.setDefaults($.datepicker.regional["zh-TW"]);
      $("#datepicker1").datepicker({
        dateFormat: "yy-mm-dd",
        showMonthAfterYear: true
      });
      $("#datepicker2").datepicker({
        dateFormat: "yy-mm-dd",
        showWeek: true
      });
    });