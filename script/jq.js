$(document).ready(function(){
    $(".h22").mouseenter(function(){
        $(this).css('color','red')
        $(".h22").animate({
            width:"250px",
            fontSize:"50px"
        })
    })
    $(".h22").mouseleave(function(){
        $(".h22").animate({
            width:"150px",
            fontSize:"30px"
        })
    })
    $("input").focus(function(){
        $(this).css("border-bottom", "solid red");
    });
    $("input").blur(function(){
        $(this).css("border-bottom", "solid white");
    });
    $("#submit").click(function(){
        $("#register").validate({
            rules:{
                fname:{
                    required:true
                },
                lname:{
                    required:true
                },
                bdate:{
                    required:true
                },
                inlineRadioOptions:{
                    required:true
                },
                email:{
                    required:true, 
                    email:true                          
                },
                phone:{
                    required:true, 
                    number:true                          
                },
                sub:{
                    required:true
                }
            },
            messages:{
                fname:{
                    required:"Enter your First name"
                },
                lname:{
                    required:"Enter your last name"
                },
                bdate:{
                    required:"Select date" 
                },
                inlineRadioOptions:{
                    required:"Select any one option"
                },
                email:{
                    required:"Enter Email",
                    email:"Enter valid Email"                           
                },
                phone:{
                    required:"Enter Phone Number",   
                    number:"Please enter only numbers"                        
                },
                sub:{
                    required:"Please select Subject"   
                }
           },
           submitHandler: function(form){
                form.submit()
            }                   
        })
    })
    
})