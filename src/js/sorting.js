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
            parent.style.width = "65%";
            parent.style.margin = "0 auto";
        }

      }

      




export {
 sortable
}