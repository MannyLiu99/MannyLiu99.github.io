/*
		* 兼容移动端返回不刷新
		* */
window.addEventListener('pageshow', function (e) {
    if(e.persisted) {
        window.location.reload();
        console.log('persisted')
    }
});

$(function () {
    init();

    $('.index-tabs > li').on('click', function () {
        var self = $(this);

        var _target = self.data('target');
        window.location.hash = _target;

        self.addClass('active');
        if(!self.data('toggle')) {
            self.find('ul').height(self.data('height'));
            self.data('toggle', true);
        } else {
            self.find('ul').height(0);
            self.data('toggle', false);
        }

        //other
        self.siblings().removeClass('active').data('toggle', false).find('ul').height(0);
    });

    if(getQueryString() == '') {
        $('.index-tabs > li').eq(0).click();
    } else {
        $('[data-target = "' + getQueryString() + '"]').click();
    }
});

//初始化
function init() {
    var parent = $('.index-tabs');
    console.log("hahhhh")

    parent.children('li').each(function (index, item) {
        var self = $(item),
            ul = self.find('ul');

        var copy = ul.clone(true);
        copy.css({
            'display': 'block',
            'position': 'absolute',
            'z-index': -9999,
            'top': '-9999px'
        });

        ul.after(copy);
        self.data('height', copy.height());

        copy.remove();
        ul.css({
            'display': 'block',
            'height': 0
        });
    });
}

//获取锚点
function getQueryString() {
    if(window.location.hash != '') {
        return window.location.hash;
    } else {
        return '';
    }
}