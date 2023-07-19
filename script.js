let prog = document.getElementById('progresss');

let body = document.body,
    html = document.documentElement;

let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

const setProgresss = () => {
   let scrollFromTop = (document.documentElement.scrollTop || body.scrollTop) + html.clientHeight;
   let width = scrollFromTop / height * 100 + '%';

   console.log('scroll', html.clientHeight, body.scrollTop);

   prog.style.width = width;
}

window.addEventListener('scroll', setProgresss);

setProgresss();

