var LitmosModuleTimer = {
    timerUri: null,
    showTimer: false,
    timer: null,
    tUpdate: null,
    tDisplay: null,
    onCloseUpdateTimer: false,
    init: function (uri) {
        if (LitmosModuleTimer.showTimer) {
            $.ajax({
                url: LitmosModuleTimer.timerUri,
                cache: false,
                type: "GET",
                dataType: "json",
                success: function (timer) {
                    if (timer) {
                        if (timer.Limit > 0) {
                            LitmosModuleTimer.timer = timer;
                            LitmosModuleTimer.setDisplay();
                            LitmosModuleTimer.tDisplay = setTimeout(LitmosModuleTimer.updateDisplay, 1000);
                        }
                    }
                }
            });
        }
    },  
    updateDisplay: function () {
        LitmosModuleTimer.timer.Remain = LitmosModuleTimer.timer.Remain - 1;
        if (LitmosModuleTimer.setDisplay()) {
            LitmosModuleTimer.tDisplay = setTimeout(LitmosModuleTimer.updateDisplay, 1000);
        }
    },

    setDisplay: function () {
        var timer = LitmosModuleTimer.timer;

        if (timer) {
            if (timer.Limit > 0) {
                timer = timer;
                $("#timer").fadeIn();

                if (timer.Remain < 0) {
                    $("#timer").html("Times Up!");
                    alert("Your time for this assessment is now up!");
                    $(".auto-submit").submit();
                    return false;
                } else {
                    var r = timer.Remain;
                    var out = "";
                    var hours = 0;
                    var mins = 0;
                    var secs = 0;

                    hours = Math.floor(r / 3600); //hours
                    r = r % 3600;

                    mins = Math.floor(r / 60); //minutes
                    r = r % 60;

                    secs = Math.floor(r); //seconds

                    if (hours !== 0) { out += hours + " hour" + ((hours != 1) ? "s" : "") + ", "; }
                    if (hours !== 0 || mins !== 0) { out += mins + " minute" + ((mins != 1) ? "s" : "") + ", "; }
                    out += secs + " seconds";
                    $("#timer .time-count").html(out);
                }
            }
        }
        return true;
    }
};
