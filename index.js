function virar(){
    let $messeg = document.querySelector('body .container .card .messeger');
    let $env =document.querySelector('body .container .card .envelope')

    $messeg.style.backgroundColor='#fff';
    $messeg.style.border='1px solid #cc2119';
    $messeg.style.transform='rotate(0deg)';
    $messeg.style.transform='rotateY(180deg)';
    $messeg.style.zIndex='2';
    $env.style.backgroundColor='transparent';
}

function fechar(){
    let $messeg = document.querySelector('body .container .card .messeger');
    let $env =document.querySelector('body .container .card .envelope')

    //$messeg.style.backgroundColor='#fff';
    $messeg.style.border='none';
    $messeg.style.transform='rotate(-8deg)';
    //$messeg.style.transform='rotateY(180deg)';
    $messeg.style.zIndex='-2';
    $env.style.backgroundColor='#cb231c';
}