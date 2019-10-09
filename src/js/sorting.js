// sort by popular
function sortablepopular(cls, attr) {
    
       var elementspopular = document.querySelectorAll(cls),
            length = elementspopular.length,
            parentelement = document.querySelector('.main-content'),
            
            arrayElements = [];

        for(var i = 0; i < length; i++) {
           arrayElements.push({
              dataAttr : elementspopular[i].getAttribute(attr),
              el: elementspopular[i]
           });
        }

       arrayElements.sort(function(a, b){
            return parseInt(a.dataAttr) > parseInt(b.dataAttr) ? 1 : -1;
        });

        for(var j = 0; j < length; j++) {
            parentelement.appendChild(arrayElements[j].el);
            parentelement.style.width = "40%";
            parentelement.style.margin = "0 auto";
     if (window.matchMedia("(max-width: 900px)").matches) {
  parentelement.style.width = "80%";
  parentelement.style.margin = "0 auto";
    var cards = document.querySelector('.block-cards');
        cards.style.display = "none";
} 
        }
          console.log("Correct work");
      }

//sort by new 
function sortablenew(cls, attr) {
    
        var elements = document.querySelectorAll(cls),
            len = elements.length,
            parent = document.querySelector('.main-content'),
            
            arrElements = [];

        for(var i = 0; i < len; i++) {
           arrElements.push({
              dataAttr : elements[i].getAttribute(attr),
              el: elements[i]
           });
        }

       arrElements.sort(function(a, b){
            return parseInt(a.dataAttr) > parseInt(b.dataAttr) ? 1 : -1;
        });

        for(var j = 0; j < len; j++) {
            parent.appendChild(arrElements[j].el);
            parent.style.width = "40%";
            parent.style.margin = "0 auto";
             if (window.matchMedia("(max-width: 900px)").matches) {
 parent.style.width = "80%";
 parent.style.margin = "0 auto";
} 
        }
          console.log("Correct work");
      }


//styles for blocks
      function hidden1() {
        var pict1 = document.getElementById('image_none1');
        var subblocks1 = document.querySelector('.block-card');
        var blockmargin1 = document.querySelector('.section-part2');
        blockmargin1.style.height = "350px";
        subblocks1.style.width = "100%";
        subblocks1.style.height = "100%";
        subblocks1.style.right = "0";
        subblocks1.style.top = "0";
        pict1.style.display = 'none';
        var pict2 = document.getElementById('image_none2');
        var subblocks2 = document.querySelector('.blockpart6-card');
        var blockmargin2 = document.querySelector('.section-part6');
        subblocks2.style.width = "100%";
        subblocks2.style.height = "100%";
        subblocks2.style.left = "0";
        subblocks2.style.top = "0";
        blockmargin2.style.margin = "0";
        blockmargin2.style.height = "350px";
        pict2.style.display = 'none';
        var alignblocks = document.querySelectorAll('.blocks');
        var len = alignblocks.length;
for (var block of alignblocks) {
    block.style.marginBottom = "50px";
}
        var element = document.querySelector(".blockpart6-information__bookmark");
        var bookmark = document.querySelector(".block-information__bookmark");
        bookmark.style.display = "none";
        element.style.left = "90%";
        element.style.bottom = "-5%";
        var modificator = document.querySelector(".block__modificator");
        var mod = document.querySelector(".blockpart4-information__text");
        mod.style.fontSize = "2rem";
        modificator.style.marginTop = "0";
        modificator.style.marginLeft = "0";
        modificator.style.marginRight = "0";
        modificator.style.width = "100%";
        var blocksformat1 = document.querySelectorAll(".block-cards__card1");
        var blocksformat2 = document.querySelectorAll(".block-cards__card2");
        var blocksformat3 = document.querySelectorAll(".block-cards__card3");
        for(var block of blocksformat1) {
        block.style.width = "100%";
      }
        for(var block of blocksformat2) {
        block.style.width = "100%";
      }
      for(var block of blocksformat3) {
        block.style.width = "100%";
      }
   
    }   



export {sortablepopular}; 
export {sortablenew}; 
export {hidden1}; 
