var CC_Checker = {
    
    init: function (cc_input) {
        this.cc = $(cc_input);
        this.cc.addClass('unknown_card');
        this.card_type;

        this.cc.keyup(function() {
            this.cc_value = parseInt($(this).val().charAt(0));
            
            switch(this.cc_value) {
                case 3:
                    CC_Checker.change_card('amex');
                    break;
                case 4:
                    CC_Checker.change_card('visa');
                    break;
                case 5:
                    CC_Checker.change_card('mastercard');
                    break;
                case 6:
                    CC_Checker.change_card('discover');
                    break;
                default:
                    CC_Checker.change_card('unknown_card');
            }

        });
    },

    cleanUp: function () {
        this.cc.removeClass("amex");
        this.cc.removeClass("visa");
        this.cc.removeClass("mastercard");
        this.cc.removeClass("discover");
        this.cc.removeClass("unknown_card");
    },

    change_card: function (class_to_check) {
        if (this.cc.hasClass(class_to_check) === false) {
            this.cleanUp();
            this.cc.addClass(class_to_check);
        }
    }

}
