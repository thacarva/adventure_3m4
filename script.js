const avanca = document.querySelectorAll(' .bnt-proximo');
avanca.forEach(button => {
button.addEventListener('claick', function(){
const atual = document.querySelector(' .ativo');
const proximoPasso = 'passo-' + this.getAttribute('data-orximo')

atual.classList.remove('ativo');
document.getElementById(proximoPasso).classicList.add('ativo');
   })
})


