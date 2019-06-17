var unionLogin = (function (document) {

    var _imgLoad = 1;

    var getImage = function (ctx, selector) {
        if (_imgLoad) {
            _imgLoad = 0;
            $.rest.get({ url: ctx + '/init' }).done(function (result) {
                if (result.rescode) {
                    $(selector).attr("src", ctx + '/get/' + result.code);
                    $(selector).load(function () {
                        _imgLoad = 1;
                    });
                }
            });
        }
    };

    var unionLogin = function (ctx) {
        hngsLogin(ctx);
    };

    var hngsLogin = function (ctx) {
        $.ajax({
            url: ctx + '/login.do',
            dataType:"json",
            data: {
            }
        }).done(function (data) {
            doHngsLogin(ctx, data);
        }).fail(function () {
            getImage(ctx, document.getElementById('yzmImg'));
        });
    };

    var doHngsLogin = function (ctx, data) {
        if (data.result.code == '100000') {

            var menuList = data.pc_menuList;
            var cygnList = data.cygnList;
            if (menuList.length > 0) {
                store.set('pc_menuList', menuList);
                store.set("cygnList", cygnList);
            } else {
                store.set('pc_menuList', "nobody");
                store.set("cygnList", "nobody");
            }

            store.set('zgswskfjDm', data.zgswskfjDm);
            sessionStorage.setItem("userToken", data.userToken);
            sessionStorage.setItem("roleId", data.roleId);
            var moduleId = $("#moduleId").val() || '';

        } else {
        }
    };

    return {
        getImage: getImage,
        unionLogin: unionLogin
    };
})(document);

unionLogin.unionLogin('/wsbs');