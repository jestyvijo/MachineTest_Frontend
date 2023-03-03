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
                    required:true,
                },
                lname:{
                    required:true,
                },
                bdate:{
                    required:true,
                },
                inlineRadioOptions:{
                    required:true,
                },
                email:{
                    required:true, 
                    email:true ,                         
                },
                phone:{
                    required:true, 
                    number:true ,                         
                },
                sub:{
                    required:true,
                }
            },
            messages:{
                fname:{
                    required:"<span style='color:red;'>*Enter your First name</span>",
                },
                lname:{
                    required:"<span style='color:red;'>* Enter your last name</span>",
                },
                bdate:{
                    required:"<span style='color:red;'>* Select date</span>", 
                },
                inlineRadioOptions:{
                    required:"<span style='color:red;'>* Select any one option</span>",
                },
                email:{
                    required:"<span style='color:red;'>* Enter Email</span>",
                    email:"<span style='color:red;'>* Enter valid Email</span>",                           
                },
                phone:{
                    required:"<span style='color:red;'>* Enter Phone </span>",   
                    number:"<span style='color:red;'>* Please enter only </span>",                        
                },
                sub:{
                    required:"<span style='color:red;'>* Please select Subject</span>",   
                }
           },
           submitHandler: function(form){
                form.submit()
            }  
        })
    })
    
})
