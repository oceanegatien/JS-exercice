var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
var mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

for (var i = 0; i < mois.length; i++) {
	console.log(mois[i]);
}


array.push('Courgette');
array[4].push('Citron');
array.splice(3, 1);
array.splice(1, 1);
array.splice(2, 0, 'Poire')
console.log(array);