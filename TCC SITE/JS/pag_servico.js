let caixa1 = document.getElementById('caixa1');
let caixa2 = document.getElementById('caixa2');
let caixa3 = document.getElementById('caixa3');
let caixa4 = document.getElementById('caixa4');

console.log(caixa1)

for (const child of caixa1.children) {
    console.log(child.textContent);
}