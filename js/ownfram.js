(function(global, $){

    var greet = function(fname,lname,lang){
        return new greet.init(fname,lname,lang);
    }

    var validlang = ['en','es'];

    var greetings = {
        en:'yello',
        es:'hola'
    }
    var formal = {
        en:'greetings',
        es:'saludos'
    }
    var log = {
        en:'session start',
        es:'sesion iniciado'
    }



    greet.prototype = {
        fullname:function(){
            return this.fname+ ' ' +this.lname
        },
        greetings:function(){
            return greetings[this.lang]+ ' ' +this.fname
        },
        formal:function(){
            return formal[this.lang]+ ' ' +this.fullname()
        },
        validate:function(){
            if(validlang.indexOf(this.lang)=== -1){
                throw 'invalid language'
            }

        },
        greet:function(anythn){
            var msg;
            if(anythn){
                msg = this.formal();
            }
            else{
                msg = this.greetings();
            }
            console.log(msg)
            return this
        },
        setlang:function(langu){
            this.lang = langu;
            this.validate();
            return this
        },
        log:function(){
            return log[this.lang]+' '+this.fullname();
        }
//        html:function(selector,formal){
//
//        $(selector).html(msg)
//
//        }
    };
    $('#login').on("click",function(){
            var fnam = $("#fname").val();
            var lnam = $("#lname").val();
            this.fname = fnam;
            this.lname = lnam;
            var l = $("#lang").val();
            this.setlang(l);
            var msg;
            var gt = $("#gtype").val();
            if(gt){
                msg = this.formal();
            }
            else{
                msg = this.greetings();
            }


            var gree = this.formal();
            $("#msg").html(gree)
    }.bind(greet.prototype));

     $('#submit').on("click",function(){

    }.bind(greet.prototype));


    greet.init = function(fname,lname,lang){
            var self = this;
            self.fname = fname||'';
            self.lname = lname||'';
            self.lang = lang||'en';

    }

    greet.init.prototype = greet.prototype;

    global.greet = global.g$ = greet;


}(window,jQuery))