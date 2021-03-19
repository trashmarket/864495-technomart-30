        let rightRoll = document.querySelector('.right-roll');
        let leftRoll = document.querySelector('.left-roll');
        document.querySelector('.photo').addEventListener("click", event => {
            if(event.target.closest('.right-roll')){
                event.currentTarget.style.background = "url('img/Layer 99.jpg')";
                event.currentTarget.querySelector('.content').innerHTML = "<h2>дрели</h2><p>Соседям на радость</p><a href='#'>ОТКРЫТЬ КАТАЛОГ</a> <span class='ball-left back-ground-red'></span> <span class='ball-right'></span>";
            }
            if(event.target.closest('.left-roll')){
                event.currentTarget.querySelector('.content').innerHTML = "<h2>Перфораторы</h2><p>Настоящие мужские игрушки</p><a href='#'>ОТКРЫТЬ КАТАЛОГ</a> <span class='ball-left'></span> <span class='ball-right back-ground-red'></span>";
                event.currentTarget.style.background = "url('img/Layer199.jpg')";
            }
        })

        document.querySelector('.main-header').addEventListener("click", event => {
            if(event.target.closest('.search-magnifier')){
                event.currentTarget.querySelector("form").style.display = "block";
                event.target.style.display = "none";
                event.currentTarget.querySelector("form input[type=text]").focus();
                event.currentTarget.querySelector("form input[type=text]").oninput = function(event){
                   if(document.querySelector('.search form svg')){
                    document.querySelector('.search form svg').remove();
                   }
                }
            }
            else{
                event.currentTarget.querySelector("form").style.display = "none";
                document.querySelector('.search-magnifier').style.display = "flex";
            }
        })

        document.querySelector('.service-delivery').addEventListener('click', event => {
            if(event.target.closest(".guarantee")){
                if(event.currentTarget.querySelector('.active')){event.currentTarget.querySelector('.active').classList.remove("active");}
                event.target.classList.add("active");
                event.currentTarget.querySelector(".container").style.backgroundImage = "url('img/procent.png')";
                event.currentTarget.querySelector(".service-flex .delivery").innerHTML = "<h3>Гарантия</h3><p>Если купленный у нас товар поломается или заискрит,<br>а также в случае пожара, спровоцированного его <br>возгоранием,  вы всегда можете быть уверены в нашей<br>гарантии. Мы обменяем сгоревший товар на новый. <br>Дом уж восстановите как-нибудь сами.</p>";
            }
            if(event.target.closest(".credit")){
                if(event.currentTarget.querySelector('.active')){event.currentTarget.querySelector('.active').classList.remove("active");}
                event.target.classList.add("active");
                event.currentTarget.querySelector(".container").style.backgroundImage = "url('img/credit.png')";
                event.currentTarget.querySelector(".service-flex .delivery").innerHTML = "<h3>Кредит</h3><p>Залезть в долговую яму стало проще! <br> Кредитные консультанты придут вам на помощь.</p> <button>ОТПРАВИТЬ ЗАЯВКУ</button>"
            }
            if(event.target.closest('.delivery-button')){
                if(event.currentTarget.querySelector('.active')){event.currentTarget.querySelector('.active').classList.remove("active");}
                event.target.classList.add("active");
                event.currentTarget.querySelector(".container").style.backgroundImage = "url('img/Layer1311.png')";
                event.currentTarget.querySelector(".service-flex .delivery").innerHTML = "<h3>Доставка</h3><p>Мы с удовольствием доставим ваш товар прямо<br>к вашему подъезду совершенно бесплатно!<br>Ведь мы неплохо заработаем,<br>поднимая его на ваш этаж!</p>";
            }
        });