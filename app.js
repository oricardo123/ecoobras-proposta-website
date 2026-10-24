'use strict';
const space=document.querySelector('#space');
const priorities=Array.from(document.querySelectorAll('.priority-list input'));
const bring=[
 'Fotografias, uma planta se existir e uma descrição do uso que pretende dar ao espaço.',
 'Uma planta se existir, fotografias e uma descrição das atividades e zonas de trabalho.',
 'Fotografias, plantas disponíveis e uma descrição da atividade que o espaço deverá acolher.',
 'Fotografias das zonas a analisar, localização e uma descrição dos elementos que pretende conservar ou alterar.'
];
function update(){
 const selected=priorities.filter(input=>input.checked).map(input=>input.value);
 document.querySelector('#summary-space').textContent=space.value;
 document.querySelector('#summary-count').textContent=selected.length===0?'Pode começar por escolher um ponto.':selected.length+' '+(selected.length===1?'ponto para explicar':'pontos para explicar');
 document.querySelector('#summary-priorities').replaceChildren(...selected.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
 document.querySelector('#bring-copy').textContent=bring[space.selectedIndex];
}
space.addEventListener('change',update);
priorities.forEach(input=>input.addEventListener('change',update));
document.querySelector('#reset').addEventListener('click',()=>{space.selectedIndex=0;priorities.forEach((input,index)=>input.checked=index===0);update();});
update();
