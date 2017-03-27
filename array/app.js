var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
var mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

array.push('Courgette');
array[4].push('Citron');
array.splice(3, 1);
array.splice(1, 1);
console.log(array);
