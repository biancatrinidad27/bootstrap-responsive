var Utils = {
    initAjax: function (uri) {
        var loginUrl = uri;

        $.ajaxSetup({
            cache: false,
            data: {
                __RequestVerificationToken: $("#XssForm input[name=__RequestVerificationToken]").val()
            },
            error: function (x, e) {
                if (x.status == 403) {
                    alert("Sorry, your session has expired. Please login again to continue");
                    window.location = loginUrl;
                }
            }
        });
    },
    selectAll: function (css, checked) {
        $("." + css).each(function () {
            $(this).attr("checked", checked);
        });
    },
    initNotify: function () {
        // Set up notification box
        $("body").prepend("<div id='notification-box' style='display:none'><a style='float:right;' href='javascript:void(0);' onclick='Utils.hideNotify();' title='Hide this message'>X</a><span class='message-text'></span></div>");
    },
    notify: function (message, sticky, warning) {
        if ($("#notification-box").length == 0) {
            Utils.initNotify();
        }
        $(".message-text").html(message);
        $("#notification-box").show();
        if (!sticky) {
            window.setTimeout(Utils.hideNotify, 5000);
        }
        if (warning) {
            $("#notification-box").addClass("notification-box-warning");
        } else {
            $("#notification-box").removeClass("notification-box-warning");
        }
    },
    hideNotify: function () {
        $("#notification-box").fadeOut();
    },
    populateSelect: function (el, items, valName, textName, emptyText) {
        $(el).children().remove();
        if (emptyText != "") {
            $(el).append('<option value="">' + emptyText + '</option>');
        }
        $.each(items, function () {
            $(el).append('<option value="' + eval("this." + valName) + '">' + eval("this." + textName) + '</option>');
        });
        $(el).filter("option:first-child").attr("selected", "selected");
    },
    checkMessages: function (uri, callBack) {
        $.ajax({
            type: "GET",
            cache: false,
            url: uri,
            dataType: 'json',
            data: '{messagecount:0,checkfeed:true}',
            success: callBack
        });
    },
    escapeHTML: function (str) {
        var div = document.createElement('div');
        var text = document.createTextNode(str);
        div.appendChild(text);
        return div.innerHTML;
    },

    // Feedback functions
    showFeedback: function () {
        var f = $('.feedback');
        if (f.length > 0) {
            f.hide();
            $('.feedback').slideDown();
        }
    },
    feedbackUri: "",
    feedbackSubject: "",
    sendFeedback: function () {
        var v = $('.feedbacksubject').val() + '\n\n' + $('.feedbackbox').val();
        if (v.length > 0) {
            $.ajax({
                url: this.feedbackUri,
                traditional: true,
                cache: false,
                type: "POST",
                data: { body: v },
                success: function (d) { }
            });
            this.cancelFeedback();
        }
    },

    sendModalFeedback: function () {
        var v = $("#feedback input[name=mfeedbacksubject]").val() + '\n\n' + $("#feedback textarea[name=mfeedbackbox]").val();
        if (v.length > 0) {
            $.ajax({
                url: this.feedbackUri,
                traditional: true,
                cache: false,
                type: "POST",
                data: { body: v },
                success: function (d) { alert('Thank you, your feedback has been sent.');  }
            });
            $("#feedback input[name=mfeedbacksubject]").val("");
            $("#feedback textarea[name=mfeedbackbox]").val("");

        }
    },

    sendAdminFeedback: function () {
        var v = $('.feedbackbox').val();
        if (v.length > 0) {
            $.ajax({
                url: this.feedbackUri,
                traditional: true,
                cache: false,
                contentType: 'application/json',
                type: "POST",
                data: '{"body":"' + (v).replace('"', '') + '"}',
                success: function (d) { }
            });
            this.cancelFeedback();
        }
    },
    cancelFeedback: function () {
        $('.feedbackbox').val("");
        $('.feedback').slideUp();
    },
    initFSLayout: function () {
        this.setFSLayout();
        $(window).resize(function () {
            Utils.setFSLayout();
        });
    },
    setFSLayout: function () {
        //        var h = $().height();
        //        var t = $(".toptoolbar").height();
        //        var b = $(".bottomtoolbar").height();
        var t = $(".toptoolbar").height() + 5;
        var f = $(".footer").height();

        var w = $(window).width();
        var h = $(window).height();
        var x = (h - (t + f));
        //        var fs = $(".fscontainer");
        //        h = (h - (t+5));
        if (x > 0) {
            $(".fsbody").height(x);
            $(".fsbody").width(w);
        }
    },

    deleteItem: function (uri, callBack) {
        $.ajax({
            url: uri,
            cache: false,
            type: "DELETE",
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if (data.Success) {
                    location.reload();
                    $("#" + data.ElementId).find('*').css("text-decoration", "line-through").css("background-color", "#f2f0f5").css("color", "red");
                    $("#" + data.ElementId).fadeOut('slow');

                    if (typeof callBack != 'undefined') {
                        callBack();
                    }
                }
            }
        });
    },

    makeOptional: function (uri, callBack, id, optional) {

        idString = id.slice(2);
        if (optional == true) {
            $("#optional_" + idString).hide();
            $("#mandatory_" + idString).show();
        }
        else {
            $("#optional_" + idString).show();
            $("#mandatory_" + idString).hide();
        }


        $.ajax({
            url: uri,
            cache: false,
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if (data.Success) {
                    $('#recalcAlert').show();
                    if (typeof callBack != 'undefined') {
                        callBack();
                    }
                    else {
                        alert("You need to have at least one module that is mandatory");
                    }
                }
            }
        });
    },

    deleteQuestion: function (uri, callBack) {
        $.ajax({
            url: uri,
            traditional: true,
            cache: false,
            type: "POST",
            success: function (data) {
                $("#Questionlist").find("tr").remove();
                $("#Questionlist").find("tbody").append($(data).find("tr"));
            }

        });
    },

    deleteItemClass: function (uri, callBack) {
        $.ajax({
            url: uri,
            cache: false,
            type: "DELETE",
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if (data.Success) {
                    $("." + data.ElementId).find('*').css("text-decoration", "line-through").css("background-color", "#f2f0f5").css("color", "red");
                    $("." + data.ElementId).fadeOut('slow');
                    $('#recalcAlert').show();
                    if (typeof callBack != 'undefined') {
                        callBack();
                    }
                }
            }
        });
    },

    addAnswer: function (uri, callBack) {
        $.ajax({
            type: "post",
            dataType: "",
            url: uri,
            data: { id: $(this).data("id") },
            success: function (response) {
                $('#tblAnswers tr:last').after(response);
                QUESTIONS.SetAnswerType(false);
            }
        });


    },


    addSurveyAnswer: function (uri, callBack) {
        $.ajax({
            type: "post",
            dataType: "",
            url: uri,
            data: { id: $(this).data("id") },
            success: function (response) {
                $('#tblAnswers tr:last').after(response);
                SURVEYQUESTIONS.SetQuestionType(false);
            }
        });


    },


    Upload: function (uri, callBack) {
        $.ajax({
            type: "post",
            dataType: "",
            url: uri,
            data: { id: $(this).data("id") },
            success: function (response) {
                //$('#tblAnswers tr:last').after(response);
            }
        });


    },

    markQuestion: function (form, correct) {
        var uri = $(form).attr("action");
        var data = $(form).serialize();
        data += correct ? "&Correct=true" : "&Correct=false";
        $.ajax({
            url: uri,
            cache: false,
            data: data,
            type: "POST",
            dataType: "json",
            success: function (data) {
                if (data.Success) {
                    $("#" + data.ElementId).remove();
                    Utils.notify("Question Marked", false, false);
                    // Check for any other questions to mark otherwise redirect
                    if ($(".unmarked-q").length == 0) {
                        window.location = $("#btnBackURL").attr("href");
                    }
                } else {
                    Utils.notify("Sorry that question could not be marked", true, true);
                }
            }
        });
        return false;
    },

    markLearnerUploadQuestion: function (form) {
        var uri = $(form).attr("action");
        var data = $(form).serialize();
        $.ajax({
            url: uri,
            cache: false,
            data: data,
            type: "POST",
            dataType: "json",
            success: function (data) {
                if (data.Success) {
                    $("#" + data.ElementId).remove();
                    Utils.notify("Question Marked", false, false);
                    // Check for any other questions to mark otherwise redirect                   
                    window.location = $("#btnBackURL").attr("href");

                } else {
                    Utils.notify("Sorry that question could not be marked", true, true);
                }
            },
            error: function (data) {
                Utils.notify("Sorry that question could not be marked. Please contact customer support.", true, true);
            }
        });
        return false;
    },
    markVideoAssessment: function (form) {
        var uri = $(form).attr("action");
        var data = $(form).serialize();
        $.ajax({
            url: uri,
            cache: false,
            data: data,
            type: "POST",
            dataType: "json",
            success: function (data) {
                if (data.Success) {
                    $("#" + data.ElementId).remove();
                    Utils.notify("Video Assessment Marked", false, false);
                    // Check for any other questions to mark otherwise redirect                   
                    window.location = $("#btnBackURL").attr("href");

                } else {
                    Utils.notify("Sorry that video assessment could not be marked", true, true);
                }
            },
            error: function (data) {
                Utils.notify("Sorry that video assessment could not be marked. Please contact customer support.", true, true);
            }
        });
        return false;
    },
    loadDropDown: function (target, uri) {
        $.ajax({
            url: uri,
            cache: false,
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                if (data) {
                    $(target + " > option").remove();
                    $(data).each(function (i, o) {
                        $(target).append($('<option></option>').val(o.Value).html(o.Text));
                    });
                }
            }
        });
    },
    popProfile: function (e, o) {
        var href = $(o).attr("href");
        var offSet = $(o).offset();
        var pop = $("#proSnap");
        if (pop.length == 0) {
            pop = $("<div id='proSnap'>").hover(function () {
                $(this).show();
            }, function () {
                $(this).hide();
            });
            pop.appendTo("body");
        }
        pop.css({ top: offSet.top, left: offSet.left });
        pop.hide().load(href, function () { pop.show() });
        e.preventDefault();
    },
    hideProfile: function (e) {
        $("#proSnap").hide();
    },
    toDateTimeString: function (time) {
        return Date.parse(Date.today().toString("yyyy-MM-ddT") + time).toString("yyyy-MM-ddTHH:mm:ss");
    },
    checkFlash: function () {
        swfobject.addDomLoadEvent(function () {
            var playerVersion = swfobject.getFlashPlayerVersion(); // returns a JavaScript object
            if (playerVersion.major < 9) {
                $("#NoFlash").show();
            }
        });
    },
    numbersOnly: function () {
        $(".numbers-only").keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 190 || event.keyCode == 110) {
            } else {
                if (event.keyCode < 95) {
                    if (event.keyCode < 48 || event.keyCode > 57) {
                        event.preventDefault();
                    }
                } else {
                    if (event.keyCode < 96 || event.keyCode > 105) {
                        event.preventDefault();
                    }
                }
            }
        });
    },
    initCheckBoxRowSelector: function () {

        $(document).on("change", ".row-select", function () {
            if ($(this).is(":checked")) {
                $(this).closest("tr").addClass("row-selected");
            } else {
                $(this).closest("tr").removeClass("row-selected");
            }
        });
    },
    dropMenuHide: null,
    initDropMenu: function () {
        $(".drop-menu li a.drop").click(function (e) {
            var t = $(this).closest("li").offset().top + $(this).closest("li").outerHeight() + 3;
            var l = $(this).closest("li").offset().left + 1;
            $(".drop-menu li ul").hide();
            $(this).closest("li").find("ul").show().css({ top: t, left: l });
            e.preventDefault();
        }, function (e) {
            $(this).find("ul").hide();
        });

        $(".drop-menu li ul li").hover(function (e) {
            clearTimeout(Utils.dropMenuHide);
            $(this).closest("ul").show();
        }, function () {
            Utils.dropMenuHide = setTimeout(function () {
                $(".drop-menu li ul").hide();
            }, 1500);
        });
    },
    delaySearchTimeOut: null,
    initDelaySearch: function (uri, box, target, prompt, brand) {

        if (uri.indexOf("?") == -1) {
            uri = uri + "?";
        }

        var search = (function () {
            var s = $(box).serialize();
            var results = $(target);
            var bid = "";
            Utils.delaySearchTimeOut = null;
            if (s.length > 1) {
                $(".grid-search").hide();
                if (brand != null) {
                    if ($(brand).val() != null && $(brand).val().trim() != "") {
                        bid = "&bId=" + $(brand).val();
                    }
                }
                results.load(uri + "&" + s + bid + "&ts=" + new Date().getTime());
            }
            else
                $(".grid-search").show();
        });


        $(box).bind('keyup', function (e) {
            if (Utils.delaySearchTimeOut != null) clearTimeout(Utils.delaySearchTimeOut);
            Utils.delaySearchTimeOut = setTimeout(search, 400);
        });


    },


    getQuerystringValue: function (url, name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        if (results == null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    assignContentToBox: function (templatUri, contentUri) {

        $(document).bind('reveal.facebox', function () {

            $("#assignCancel").click(function (e) {
                jQuery(document).trigger('close.facebox');
                e.preventDefault();
            });

            $("#loadContentURL").load(contentUri);
            $("#facebox").bgiframe();

        });

        jQuery.facebox({ ajax: templatUri });
    },

    assignBoxID: null,

    assignBox: function (templatUri, searchUri, saveUri, prompt, email, subteams) {



        var delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $(document).bind('close.facebox', function () {
            $(document).unbind('reveal.facebox');
        });


        $(document).bind('reveal.facebox', function () {
            $("#assignResults").html('');
            if (email || subteams) {
                $(".assign-footer-opt").show();
            } else {
                $(".assign-footer-opt").hide();
            }
            if (email) {
                $("#assignEmails").show();
                $("#SendEmail").attr("checked", true);
            } else {
                $("#assignEmails").hide();
            }
            if (subteams) {
                $("#assignTeams").show();
            } else {
                $("#assignTeams").hide();
            }

            $("#assignCancel").click(function (e) {
                jQuery(document).trigger('close.facebox');
                e.preventDefault();
            });

            $(document).on("click", "#assignSave", function (e) {
                if ($("#AssignAll").is(":checked")) {
                    var assignAllMsg = "Are you sure you want to assign to all users?";
                    if (confirm(assignAllMsg)) {
                        $(this).closest("form").attr("action", saveUri).submit();
                        jQuery(document).trigger('close.facebox');
                    }
                    else {
                        e.preventDefault();
                    }
                }
                else {
                    var values = $('input[name="ToAssign"]:checkbox:checked').map(function () {
                        return this.value;
                    }).get();

                    if (values.length > 0) {
                        $(this).closest("form").attr("action", saveUri).submit();
                        jQuery(document).trigger('close.facebox');
                    }
                    else {
                        alert("None selected");
                        e.preventDefault();
                    }
                }
            });

            $(document).on("click", "#assignTokenSelect", function (e) {
                var selectedCourseID = $('input[name=ToAssign]:checked', '#selectionForm').val();
                var selectedCourseName = $('input[name=ToAssign]:checked', '#selectionForm').attr('id');
                $('#Tokens_0__typeName').val(selectedCourseName);
                $('#Tokens_0__TypeID').val(selectedCourseID);
                $('#tokenName').text(selectedCourseName);
                //$(this).closest("form").attr("action", saveUri).submit();
                jQuery(document).trigger('close.facebox');
            });



            $("#searchPrompt").html(prompt);

            $("#assignResults").load(searchUri + "&ts=" + new Date().getTime());

            $("#assignSearch").bind('keypress', function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                    return false;
                }
            });

            /* $(document).on("click", "#loadMore", function (e) {
             
            $('#loadMoreResults').remove();
            var u = e.target.attributes["url"].value;
            $.get(u + "&h=true&ts=" + new Date().getTime(), function (data) {
            $("#assignResults").append(data);
            });
                
            });*/

            $("#assignSearch").bind('keyup', function (e) {
                var ts = new Date().getMilliseconds();
                var s = $(this).serialize();
                if (s.length > 2) {
                    $("#searchPrompt").hide();

                    clearTimeout(Utils.assignBoxID);
                    Utils.assignBoxID = setTimeout(function () {
                        $("#assignResults").load(searchUri + "&" + s + "&ts=" + new Date().getTime());
                    }, 500);
                } else {
                    $("#searchPrompt").show();
                    $("#assignResults").load(searchUri + "&ts=" + new Date().getTime());
                }
            }).focus();

            $("#facebox").bgiframe();
        });

        jQuery.facebox({ ajax: templatUri });
    },


    assignBoxAlerts: function (templatUri, searchUri, saveUri, prompt, email, subteams) {

        var delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $(document).bind('reveal.facebox', function () {

            if (email || subteams) {
                $(".assign-footer-opt").show();
            } else {
                $(".assign-footer-opt").hide();
            }
            if (email) {
                $("#assignEmails").show();
                $("#SendEmail").attr("checked", true);
            } else {
                $("#assignEmails").hide();
            }
            if (subteams) {
                $("#assignTeams").show();
            } else {
                $("#assignTeams").hide();
            }

            $("#assignCancel").click(function (e) {
                jQuery(document).trigger('close.facebox');
                e.preventDefault();
            });

            $(document).on("click", "#assignSave", function (e) {
                $(this).closest("form").attr("action", saveUri).submit();
                jQuery(document).trigger('close.facebox');
            });

            $("#searchPrompt").html(prompt);
            $("#assignSave .icon_add").text("Add");

            $("#assignResults").load(searchUri + "&ts=" + new Date().getTime());

            $("#assignSearch").bind('keypress', function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                    return false;
                }
            });

            $(document).on("click", "#loadMore", function (e) {

                $('#loadMoreResults').remove();
                var u = e.target.attributes["url"].value;
                $.get(u + "&h=true&ts=" + new Date().getTime(), function (data) {
                    $("#assignResults").append(data);
                });
            });

            $("#assignSearch").bind('keyup', function (e) {
                var ts = new Date().getMilliseconds();
                var s = $(this).serialize();
                if (s.length > 2) {
                    $("#searchPrompt").hide();

                    clearTimeout(Utils.assignBoxID);
                    Utils.assignBoxID = setTimeout(function () {
                        $("#assignResults").load(searchUri + "&" + s + "&ts=" + new Date().getTime());
                    }, 500);
                } else {
                    $("#searchPrompt").show();
                    $("#assignResults").load(searchUri + "&ts=" + new Date().getTime());
                }
            }).focus();

            $("#facebox").bgiframe();
        });

        jQuery.facebox({ ajax: templatUri });
    },

    assignBox2: function (templatUri, searchUri, saveUri, prompt, email, subteams) {

        var delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $(document).bind('reveal.facebox', function () {

            if (email || subteams) {
                $(".assign-footer-opt").show();
            } else {
                $(".assign-footer-opt").hide();
            }
            if (email) {
                $("#assignEmails").show();
                $("#SendEmail").attr("checked", true);
            } else {
                $("#assignEmails").hide();
            }
            if (subteams) {
                $("#assignTeams").show();
            } else {
                $("#assignTeams").hide();
            }

            $("#assignCancel").click(function (e) {
                jQuery(document).trigger('close.facebox');
                e.preventDefault();
            });

            $(document).on("click", "#assignSave", function (e) {
                $(this).closest("form").attr("action", saveUri).submit();
                jQuery(document).trigger('close.facebox');
            });

            $(document).on("click", "#assignTokenSelect", function (e) {
                var selectedCourseID = $('input[name=ToAssign]:checked', '#selectionForm').val();
                var selectedCourseName = $('input[name=ToAssign]:checked', '#selectionForm').attr('id');
                $('#Tokens_0__typeName').val(selectedCourseName);
                $('#Tokens_0__TypeID').val(selectedCourseID);
                $('#tokenName').text(selectedCourseName);
                //$(this).closest("form").attr("action", saveUri).submit();
                jQuery(document).trigger('close.facebox');
            });

            $("#searchPrompt").html(prompt);

            $("#assignResults").load(searchUri + "&ts=" + new Date().getTime());

            $("#assignSearch").bind('keypress', function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                    return false;
                }
            });

            $(document).on("click", "#loadMore", function (e) {
                $('#loadMoreResults').remove();
                var u = e.target.attributes["url"].value;
                $.get(u + "&h=true&ts=" + new Date().getTime(), function (data) {
                    $("#assignResults").append(data);
                });
            });

            $("#assignSearch").bind('keyup', function (e) {
                var ts = new Date().getMilliseconds();
                var s = $(this).serialize();
                if (s.length > 2) {
                    $("#searchPrompt").hide();

                    clearTimeout(Utils.assignBoxID);
                    Utils.assignBoxID = setTimeout(function () {
                        $("#assignResults").load(searchUri + "&" + s + "&ts=" + new Date().getTime());
                    }, 500);
                } else {
                    $("#searchPrompt").show();
                    $("#assignResults").load(searchUri + "&ts=" + new Date().getTime());
                }
            }).focus();

            $("#facebox").bgiframe();
        });

        jQuery.facebox({ ajax: templatUri });
    },
    assignBoxFromSFDC: function (templatUri, searchUri, saveUri, prompt, email, subteams) {

        var delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $(document).bind('reveal.facebox', function () {

            if (email || subteams) {
                $(".assign-footer-opt").show();
            } else {
                $(".assign-footer-opt").hide();
            }
            if (email) {
                $("#assignEmails").show();
                $("#SendEmail").attr("checked", true);
            } else {
                $("#assignEmails").hide();
            }
            if (subteams) {
                $("#assignTeams").show();
            } else {
                $("#assignTeams").hide();
            }

            $("#assignCancel").click(function (e) {
                jQuery(document).trigger('close.facebox');
                e.preventDefault();
            });

            $(document).on("click", "#assignSave", function (e) {
                if ($("#AssignAll").is(":checked")) {
                    var assignAllMsg = "Are you sure you want to assign to all users?";
                    if (confirm(assignAllMsg)) {
                        $(this).closest("form").attr("action", saveUri).submit();
                        jQuery(document).trigger('close.facebox');
                    }
                    else {
                        e.preventDefault();
                    }
                }
                else {
                    var values = $('input[name="ToAssign"]:checkbox:checked').map(function () {
                        return this.value;
                    }).get();

                    if (values.length > 0) {
                        $(this).closest("form").attr("action", saveUri).submit();
                        jQuery(document).trigger('close.facebox');
                    }
                    else {
                        alert("None selected");
                        e.preventDefault();
                    }
                }
            });

            $(document).on("click", "#assignTokenSelect", function (e) {
                var selectedCourseID = $('input[name=ToAssign]:checked', '#selectionForm').val();
                var selectedCourseName = $('input[name=ToAssign]:checked', '#selectionForm').attr('id');
                $('#Tokens_0__typeName').val(selectedCourseName);
                $('#Tokens_0__TypeID').val(selectedCourseID);
                $('#tokenName').text(selectedCourseName);
                //$(this).closest("form").attr("action", saveUri).submit();
                jQuery(document).trigger('close.facebox');
            });



            $("#searchPrompt").html(prompt);

            $("#assignResults").load(searchUri + "&ts=" + new Date().getTime());

            $("#assignSearch").bind('keypress', function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                    return false;
                }
            });

            $(document).on("click", "#loadMore", function (e) {
                $('#loadMoreResults').remove();
                var u = e.target.attributes["url"].value;
                $.get(u + "&h=true&ts=" + new Date().getTime(), function (data) {
                    $("#assignResults").append(data);
                });
            });

            $("#assignSearch").bind('keyup', function (e) {
                var ts = new Date().getMilliseconds();
                var s = $(this).serialize();
                if (s.length > 2) {
                    $("#searchPrompt").hide();

                    clearTimeout(Utils.assignBoxID);
                    Utils.assignBoxID = setTimeout(function () {
                        $("#assignResults").load(searchUri + "&" + s + "&ts=" + new Date().getTime());
                    }, 500);
                } else {
                    $("#searchPrompt").show();
                    $("#assignResults").load(searchUri + "&ts=" + new Date().getTime());
                }
            }).focus();

            $("#facebox").bgiframe();
        });

        jQuery.facebox({ ajax: templatUri });
    }
};

(function ($) {

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    $.fn.numbersOnly = function () {
        return this.each(function () {
            $(this).keydown(function (event) {
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 190 || event.keyCode == 110) {
                } else {
                    if (event.keyCode < 95) {
                        if (event.keyCode < 48 || event.keyCode > 57) {
                            event.preventDefault();
                        }
                    } else {
                        if (event.keyCode < 96 || event.keyCode > 105) {
                            event.preventDefault();
                        }
                    }
                }
            });
        });
    };

    $.fn.wibble = function () {
        this.effect('shake', { times: 2, distance: 5 }, 150);
    };

    $.fn.cbxSelect = function () {

        return this.change(function () {



            if ($(this).is(":checked")) {
                $(this).closest(".cbx-box").siblings().removeClass("cbx-selected");
                $(this).closest(".cbx-box").addClass("cbx-selected");

            } else {
                $(this).closest(".cbx-box").removeClass("cbx-selected");
            }

        });

    };
})(jQuery);

