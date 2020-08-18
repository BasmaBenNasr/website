$(document).ready(function(){
	var flag = 0;
	$('.ul_2 .CLOTHING').css('background-color','green');
   $('.ul_2 li').click(function(){
   	//this to avoid repetition and it refers to the element before it or value
    	$(this).css('background-color','green');

    	//The siblings() method returns all sibling elements of the selected element/ Sibling elements are elements that share the same parent.(w3s)

    	$(this).siblings().css('background-color','#2c3e50');
    });
});

//this for the images of clothing
$('.CLOTHING').click(function(){
	flag = 0;
	$(.'images_clothes').css('display','block');

	$('.photo').animate({height: '200px' , width: '240px'});
$(.'photo').siblings().css('display','block');

//i seted The class img to display none to be completely removed
$('.images_clothes').siblings().('display','none');

});

//this for img accessories
$('.bags').click(function(){
	flag = 0;
	$(.'images_bags').css('display','block');

	$('.photo').animate({height: '200px' , width: '240px'});
$(.'photo').siblings().css('display','block');
$('.images_bags').siblings().('display','none');

});

//on make up too
$('.MAKE-UP').click(function(){
	flag = 0;
	//	Displays an element as a block element /It starts on a new line, and takes up the whole width
	$(.'images_makeup').css('display','block');

	$('.photo').animate({height: '200px' , width: '240px'});
$(.'photo').siblings().css('display','block');
$('.images_makeup').siblings().('display','none');

});
//this part from w3school i want when i click on the photo it will have animation it will be bigger and then small again
//but i think it didnt work 
//i need to analyze it again


