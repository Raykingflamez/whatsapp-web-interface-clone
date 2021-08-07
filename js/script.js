var open = document.getElementById('chatOpen')
open.onclick = function chat_open(){
    document.getElementById('chatBox').style.display = 'none';
    document.getElementById('secondBox').style.opacity = '1';
    document.getElementById('secondBox').style.transition = '300ms ease-in-out';
}