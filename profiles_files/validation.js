var VALIDATION = {
    isUserNameAvailable: function (uri, f, success, fail) {
        var u = $.trim($(f).val());
        if (u != "") {
            var uri = uri.replace('--UN--', u);
            $.ajax({
                url: uri,
                cache: false,
                type: "GET",
                contentType: "application/json",
                dataType: "json",
                success: function (data) {
                    VALIDATION.setFieldState(f, data, data ? "" : "Username already taken");
                    if (data && success != undefined) {
                        success();
                    }
                    if (!data && fail != undefined) {
                        fail();
                    }
                }
            });
        } else {
            VALIDATION.setFieldState(f, false, "");
        }
    },
    hide: function (f) {
        $(f).parent().find(".v-pass").remove();
        $(f).parent().find(".v-fail").remove();
    },
    setFieldState: function (f, state, msg) {
        var pass = $(f).parent().find(".v-pass");
        var fail = $(f).parent().find(".v-fail");
        $(f).parent().find(".field-validation-error").hide();
        if (state) {
            $(fail).remove();
            if (pass.length == 0)
                $(f).parent().append('<span class="v-pass"></span>');
        } else {
            $(pass).remove();
            if (fail.length == 0)
                $(f).parent().append('<span class="v-fail" role="alert">' + msg + '</span>');
        }
    },
    isValidEmail: function (address) {
        
        //return address.match(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/);
        var pattern = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/;
        return pattern.test(address)

    },
    UnAuthorize: function (uri) {
        $.ajax({
            url: uri,
            traditional: true,
            cache: false,
            type: "POST",

            success: function (message) {
                if (message) {
                    $(".divunauth").hide();
                    $(".divauthsuccess").hide();
                }
            }
        });
    }
};

