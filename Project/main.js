let header = document.createElement('div')
header.classList.add('header')
header.innerHTML =`<h1>The Naked Journalism</h1>
                    <p>by Tanya Popko</p>`
document.body.appendChild(header)

let container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

let img = document.createElement('img')
img.src = 'photo/tatiana popko ps.png'
img.classList.add('imgTania')
container.appendChild(img)

let hr = document.createElement('hr')
hr.classList.add('hr')
header.appendChild(hr)

let box = document.createElement('div')
box.classList.add('box')
container.appendChild(box)

let nameOfCourse = document.createElement('div')
nameOfCourse.classList.add('nameOfCourse')
nameOfCourse.innerHTML = `<p>Повний комплексний курс професійного<br>тележурналіста, редактора та ведучого:</p>`
box.appendChild(nameOfCourse)

let boxForInfo = document.createElement('div')
boxForInfo.classList.add('boxForInfo')
boxForInfo.innerHTML=`<div><h2>MINIMAL</h2>
                            <div>
                            <p><i class="fa-solid fa-check"></i> Смарт-конспект, що включає:</p>
                            <p>15 розділів</p>
                            <p>80 тем</p>
                            <p><i class="fa-solid fa-xmark"></i> 20 онлайн-лекцій</p>
                            <p><i class="fa-solid fa-xmark"></i> Менторська підтримка</p>
                            <p><i class="fa-solid fa-xmark"></i> Пакет з обробки фото та монтажу відео</p>
                            </div>
                            <button class="buttonInfo" onClick='location.href="https://instagram.com/tetyana.popko?igshid=YmMyMTA2M2Y="' >Замовити</button>
                            </div>

                            <div><h2>PRO</h2>
                            <div>
                            <p><i class="fa-solid fa-check"></i> Смарт-конспект, що включає:</p>
                            <p>15 розділів</p>
                            <p>80 тем</p>
                            <p><i class="fa-solid fa-check"></i> 20 онлайн-лекцій</p>
                            <p><i class="fa-solid fa-check"></i> Менторська підтримка</p>
                            <p><i class="fa-solid fa-xmark"></i> Пакет з обробки фото та монтажу відео</p>
                            </div>
                            <button class="buttonInfo" onClick='location.href="https://instagram.com/tetyana.popko?igshid=YmMyMTA2M2Y="'>Замовити</button>
                            </div>
                            
                             <div><h2>PREMIUM</h2>
                             <div>
                            <p><i class="fa-solid fa-check"></i> Смарт-конспект, що включає:</p>
                            <p>15 розділів</p>
                            <p>80 тем</p>
                            <p><i class="fa-solid fa-check"></i> 20 онлайн-лекцій</p>
                            <p><i class="fa-solid fa-check"></i> Менторська підтримка</p>
                            <p><i class="fa-solid fa-check"></i> Пакет з обробки фото та монтажу відео</p>
                            </div>
                            <button class="buttonInfo" onClick='location.href="https://instagram.com/tetyana.popko?igshid=YmMyMTA2M2Y="'>Замовити</button>
                            </div>`
box.appendChild(boxForInfo)

let moreInfo = document.createElement('div')
moreInfo.classList.add('moreInfo')
moreInfo.innerHTML =`<p><i class="fa-solid fa-minus"></i> Професія тележурналіста: роль, функції, місія і зміст ЗМІ.</p>
<p><i class="fa-solid fa-minus"></i> Процес комунікації та комунікаційні процеси: мова, текст, кадр.</p>
<p><i class="fa-solid fa-minus"></i> Жанри і стилі журналістики, їх впровадження і використання. Що таке і як його підготувати: БЗ, сюжет, репортаж, інтерв’ю, бліц, звіт…</p>
<p><i class="fa-solid fa-minus"></i> Інформаційна і аналітична журналістика. Фільм-портрет.</p>
<p><i class="fa-solid fa-minus"></i> Етичні принципи та стандарти журналістики. Як написати інформаційний запит?</p>
<p><i class="fa-solid fa-minus"></i> Майстерність ведучого: від начитки до кадру.</p>
<p><i class="fa-solid fa-minus"></i> Особливості розмовної мови на ТБ (дикторство).</p>
<p><i class="fa-solid fa-minus"></i> Ви в кадрі – що далі?</p>
<p><i class="fa-solid fa-minus"></i> Якщо ти редактор, як будувати ефір?</p>`
box.appendChild(moreInfo)

let button = document.createElement('button')
button.classList.add('button')
button.innerText='Деталі курсу'
box.appendChild(button)

button.onclick = function (){
    moreInfo.classList.toggle('moreInfoView')
    boxForInfo.classList.toggle('boxForInfoHidden')
    nameOfCourse.classList.toggle('nameOfCourseHidden')

    if(button.dataset.trigger === 'false'){
        button.innerText = 'Деталі курсу';
        button.style.display = 'block';
        button.dataset.trigger = true;
    }else{
        button.innerText = button.dataset.text;
        button.innerText = 'Вибрати курс';
        button.dataset.trigger = false;
    }
}

let social = document.createElement('div')
social.classList.add('social')
social.innerHTML=`<div><a class="fa-brands fa-linkedin" href="https://www.linkedin.com/feed/" target="_blank"></a></div>
                    <div><a class="fa-brands fa-square-instagram" href="https://www.instagram.com/tetiana_popko/" target="_blank"></a></div>
                    <div><a class="fa-brands fa-facebook" target="_blank" href="https://www.facebook.com/taniypopko"></a></div>
                    <div><a class="fa-regular fa-at" target="_blank" href="mailto:taniypopko@ukr.net"></a></div>`
document.body.appendChild(social)

