let i =0;
var imageTitle ="pink";
var differentImages = ['pink','purple','red','white','yellow'];
function changeImage(num){
    i = num;
    var imageSrc = "images/flowers-"+differentImages[i]+"-large.jpg";
    document.getElementById("mainImage").src = imageSrc;
    if(differentImages[i]=="pink"){
        document.getElementById("figCaption").innerHTML = "Pink flowers are used as a symbol of love and awareness. For decades, \npink flowers have been used to decorate weddings as a symbol of love.\n They can also be used as a display of love at funerals,\n as demonstrated at the funeral for Anna Nicole Smith. More recently,\n pink flowers have come to symbolize breast cancer awareness."
    }
    else if (differentImages[i]=="purple"){
        document.getElementById("figCaption").innerHTML ="Purple is a common choice of flower due to its variety of\n hues and calming effect on a space. It can range from \nlight lavenders and lilacs to more vibrant violets and magentas.\n Add lavender to your bathroom decor to create a soothing retreat \nor include foxgloves in a bouquet to create a dynamic look."
    }
    else if(differentImages[i]=="red"){
        document.getElementById("figCaption").innerHTML = "The red flower is a symbol of remembrance and a lively imagination.\n Tulip- One of the first flowers to bloom in spring, tulips \nrepresent rebirth. Use red tulips \nfor events celebrating everlasting love! Hibiscus- Red hibiscus come \nin many different sizes and are a symbol of delicate beauty."
    }
    else if(differentImages[i]=="white"){
        document.getElementById("figCaption").innerHTML = "Fresh white flowers are most closely associated with purity and innocence.\n The delicate white blossoms represent honesty, purity, and \nperfection. White flowers are ideal when you are looking to \ncommunicate that wonderful combination of elegance and innocence. \nFor many, white roses are the perfect bridal flower"
    }
    else if(differentImages[i]=="yellow"){
        document.getElementById("figCaption").innerHTML ="Yellow flowers burst with happiness. They symbolize the \nbonds of friendship, the taste of success and pride.\n Joy is also one of the meanings of this flower, \nas that is one of the feelings the color is said to evoke."
    }

}