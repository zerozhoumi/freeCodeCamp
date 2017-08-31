var $config = {
    title               :"test",
    sites               : ['qq', 'weibo','wechat', 'douban','twitter']// 启用的站点
};

/**
 *
 * @returns {{quote, author}|*}
 */
var getRandomquote=function(){
    //获得名言，先用数组代替
    //没有找到。。。，无法那
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function (data) {
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }
            $(".text").text(data.quote);
            $(".author").text(data.author);
        }
    });
};
/**
 *
 * @returns {string}
 */
//定义一个随机的颜色生成函数
var getRandomColor = function() {
    //颜色，
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var ranNum=Math.floor(Math.random()*colors.length);
    return colors[ranNum];
};

//改变行为
var changeView=function (color) {
    $(".text").css("color",color);
    $(".author").css("color",color);
    $("body").css("background-color",color);
    $("i").css("color",color);
    $(".button").css("background-color",color);

};

getRandomquote();
changeView(getRandomColor());

$(".button").click(function(){
    getRandomquote();
    changeView(getRandomColor());
});


$config.title= $(".textText").val();
$('.social-share').share($config);