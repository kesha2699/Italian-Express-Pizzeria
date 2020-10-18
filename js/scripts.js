var price, crust_price, topping_price ;

let total = 0;
function Getpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

$(document).ready(function(){
    $("button.submit").click(function(event){
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));


        switch(psize) {
            case "0":
                price = 0;
            break;
            case "large":
                price = 1400;
                console.log(price);
            break;
            case "medium":
                price = 950;
                console.log("The price is" +price);
            break;
            case "small":
                price = 600;
                console.log(price);
            default:
                console.log("error");
        }
        switch(pcrust){
            case "0":
                crust_price = 0;
            break;
            case "Crispy":
                crust_price = 250;
            break;
            case "Stuffed":
                crust_price = 200;
            break;
            case "Gluten-free":
                crust_price = 150;
            break;
            default:
                console.log("No price");
        }

        let topping_value = ptopping.length*50;
        console.log("toppings value" + topping_value);

        if((psize == "0") && (pcrust == "0")) {
            console.log("nothing selected");
            $("button.submit").show();
            $("#information").show();
            $("div.choice").hide();
            alert("Please select a pizza size and crust");
        }
        else{
            $("button.submit").hide();
            $("#information").hide();
            $("div.choice").slideDown(500);
        }

        total = price + crust_price + topping_value;
        console.log(total);
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzaname").html($(".name option:selected").val());
        $("#pizzasize").html($("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatoppings").html(ptopping.join(", "));
        $("#totals").html(total);

        $("button.addPizza").click(function(){
            let pname = $(".name option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function(){
                ptopping.push($(this).val());
            });
            console.log(ptopping.join(", "));
            switch(psize){
                case "0":
                    price = 0;
                break;
                case "large":
                    price = 1400;
                    console.log(price);
                break;
                case "medium":
                    price = 950;
                    console.log("The price is" + price);
                break;
                case "small":
                    price = 600;
                    console.log(price);
                default:
                    console.log("error");
            }
            switch(pcrust){
                case "0":
                    crust_price = 0;
                break;
                case "Crispy":
                    crust_price = 250;
                break;
                case "Stuffed":
                    crust_price = 200;
                break;
                case "Gluten-free":
                    crust_price = 150;
                break;
                default:
                    console.log("No price");
            }

            // var checkboxes = $('input[name="toppings"]:checked').length;
            // if (psize === "small") {
            //     var topping_value = checkboxes *50;
            // }
            // else if (psize === "medium") {
            //     var topping_value = checkboxes *100;
            // }
            // else if (psize === "large") {
            //     var topping_value = checkboxes *150;

            let topping_value = ptopping.length*50;
            console.log("toppings value" + topping_value);
            total = price + crust_price + topping_value;
            console.log(total);

            checkoutTotal = checkoutTotal + total;
            console.log(checkoutTotal);
            
            var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

            $("#ordersmade").append('<tr><td id="pizzaname">' +newOrder.name + '</td><td id="pizzasize">' +newOrder.size + '</td><td id="pizzacrust">' +newOrder.crust + '</td><td id="pizzatoppings">' +newOrder.topping + '</td><td id="totals">' +newOrder.total+'</td></tr>');
            console.log(newOrder);
           
        
        });
            
            

    
            
        
        $("button#checkout").click(function(){
            $("button#checkout").hide();
            $("button.addPizza").hide();
            $("button.deliver").slideDown(500);
            $("#addedprice").slideDown(500);
            console.log("Your total bill is ksh. " +checkoutTotal);
            $("#pizzatotal").append("Your bill is ksh. " + checkoutTotal);
        });

        $("button.deliver").click(function(){
            $(".pizzatable").hide();
            $(".choice h2").hide();
            $(".delivery").slideDown(500);
            $("#addedprice").hide();
            $("button.deliver").hide();
            $("#pizzatotal").hide();
            let deliveryamount = checkoutTotal + 100;
            console.log("You will pay ksh. " + deliveryamount + "on delivery");
            $("#totalbill").append("Your bill including delivery price is: "+deliveryamount);
        });
        
        $("button#final-order").click(function(event){
            event.preventDefault();

            $("#pizzatotal").hide();
            $(".delivery").hide();
            $("button#final-order").hide();
            let deliveryamount = checkoutTotal + 100;
            console.log("Final Bill is: " + deliveryamount);
            let person = $("input#name").val();
            let phone = $("input#phone").val();
            let location = $("input#location").val();

            if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

                $("#finalmessage").append(person +", We have received your order and it will be delivered to you at " + location + ". Kindly pay ksh. " + deliveryamount);
                $("#totalbill").hide();
                $("#finalmessage").slideDown(1000);
            }
            else {
                alert("Please fill in the details for Delivery!");
                $(".delivery").show();
                $("button#final-order").show();
            }
        });
        event.preventDefault();
    });
});
