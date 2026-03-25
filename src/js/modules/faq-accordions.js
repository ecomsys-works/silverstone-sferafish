export function initFaq(firstOpenIndex = null){

  const items = document.querySelectorAll(".faq-item");
  if(!items.length) return;

  // reset при реинициализации
  items.forEach(item=>{
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector("svg");

    content.style.height = "0px";
    item.classList.remove("active");
    icon.classList.remove("rotate-45");
  });

  // открыть по индексу если передан
  if(firstOpenIndex !== null && items[firstOpenIndex]){
    openItem(items[firstOpenIndex], false);
  }

  items.forEach((item, index)=>{
    const header = item.querySelector(".faq-header");

    header.onclick = ()=>{

      // если уже открыт → закрыть
      if(item.classList.contains("active")){
        closeItem(item);
        return;
      }

      // закрыть все
      items.forEach(el=> closeItem(el));

      // открыть текущий
      openItem(item, true);
    };
  });


  // фикс высоты при resize
  window.addEventListener("resize", ()=>{
    const active = document.querySelector(".faq-item.active");
    if(!active) return;

    const content = active.querySelector(".faq-content");
    const inner = content.firstElementChild;
    content.style.height = inner.scrollHeight + "px";
  });


  function openItem(item, animate=true){
    const content = item.querySelector(".faq-content");
    const inner = content.firstElementChild;
    const icon = item.querySelector("svg");

    item.classList.add("active");
    icon.classList.add("rotate-45");

    const h = inner.scrollHeight;

    if(!animate){
      content.style.transition = "none";
      content.style.height = h + "px";
      content.offsetHeight;
      content.style.transition = "";
    } else {
      content.style.height = h + "px";
    }
  }

  function closeItem(item){
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector("svg");

    item.classList.remove("active");
    icon.classList.remove("rotate-45");

    content.style.height = "0px";
  }

}
