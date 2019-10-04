// sort by popular

function sortable(cls, attr) {
    
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
            return parseInt(a.dataAttr) < parseInt(b.dataAttr) ? 1 : -1;
        });

        for(var j = 0; j < len; j++) {
            parent.appendChild(arrElements[j].el);
            parent.style.width = "40%";
            parent.style.margin = "0 auto";
        }
          console.log("Correct work");
      }

      function hidden1() {
        var pict = document.getElementById('image_none1');
        var subblocks = document.querySelector('.block-card');
        var blockmargin = document.querySelector('.section-part2');
        var alignblocks = document.querySelectorAll('.blocks');
        var len = alignblocks.length;
for (const block of alignblocks) {
    block.style.marginBottom = "50px";
}
    
        subblocks.style.width = "100%";
        subblocks.style.height = "70%";
        subblocks.style.right = "0";
        pict.style.display = 'none';

    }
    function hidden2() {
        var pict = document.getElementById('image_none2');
        var subblocks = document.querySelector('.blockpart6-card');
        var blockmargin = document.querySelector('.section-part6');
        subblocks.style.width = "100%";
        blockmargin.style.margin = "0";
        pict.style.display = 'none';
    }   

      




export {sortable}; 
export {hidden1}; 
export {hidden2}; 