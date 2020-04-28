var acc = document.getElementsByClassName("accordion");
        var acc1 = document.getElementById("acc-1");
        var acc2 = document.getElementById("acc-2");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                for(j=0;j<acc.length;j++){
                    if(acc[j] != this){
                        if(acc[j].classList.contains('active')){
                            acc[j].classList.remove('active');
                            var pan = acc[j].nextElementSibling;
                            if (pan.style.maxHeight) {
                                pan.style.maxHeight = null;
                                acc[j].style.backgroundColor = "#E5C175";
                                acc[j].style.color = "#2D313D";
                            } else {
                                pan.style.maxHeight = pan.scrollHeight + "px";
                            }
                        }
                    }
                }
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    this.style.backgroundColor = "#E5C175";
                    this.style.color = "#2D313D";
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    this.style.backgroundColor = "#2D313D";
                    this.style.color = "#c8c5bc";
                }
            });
        }