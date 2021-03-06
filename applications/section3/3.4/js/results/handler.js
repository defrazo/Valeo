$(document).ready(function() {

	var sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		sist = localStorage.getItem('sistinp'),
		dia = localStorage.getItem('diainp'),
		pulse = localStorage.getItem('pulseinp'),
		stab = localStorage.getItem('stabinp'),
		ortopulseh = localStorage.getItem('ortopulsehinp'),
		ortopulsev = localStorage.getItem('ortopulsevinp'),
		clinopulseh = localStorage.getItem('clinopulsehinp'),
		clinopulsev = localStorage.getItem('clinopulsevinp'),
		gender = localStorage.getItem('genderinp'),
		fac = localStorage.getItem('facinp');
	
	switch (true) {
			case (stab >= 15) : var romberg = '(Хорошо)'; break;
			case (stab <= 14.99) : var romberg = '(Плохо)'; break;
		}

	var cerdo = ((1 - dia / pulse) * 100).toFixed();

	switch (true) {
			case (cerdo <= -10.01) : var cerdostatus = '(Плохо)'; break;
			case (cerdo >= -10 && cerdo <= 10) : var cerdostatus = '(Норма)'; break;
			case (cerdo >= 10.01) : var cerdostatus = '(Плохо)'; break;
		}

	var orto = Math.abs((ortopulseh - ortopulsev)).toFixed();

	switch (true) {
			case (orto <= 12) : var ortostatus = '(Отлично)'; break;
			case (orto >= 12.01 && orto <= 18) : var ortostatus = '(Хорошо)'; break;
			case (orto >= 18.01 && orto <= 24) : var ortostatus = '(Удовлетворительно)'; break;
			case (orto >= 24.01) : var ortostatus = '(Плохо)'; break;
		}

	var clino = Math.abs((clinopulsev - clinopulseh)).toFixed();
	
	var clinopercent = ((clinopulsev / 100) * clino).toFixed(1);

	switch (true) {
			case (clinopercent <= 6) : var clinostatus = 'Нормальная возбудимость (слабая)'; break;
			case (clinopercent >= 6.1 && clinopercent <= 12.3) : var clinostatus = 'Нормальная возбудимость (средняя)'; break;
			case (clinopercent >= 12.4 && clinopercent <= 18.5) : var clinostatus = 'Нормальная возбудимость (живая)'; break;
			case (clinopercent >= 18.6 && clinopercent <= 24.6) : var clinostatus = 'Повышенная возбудимость (слабая)'; break;
			case (clinopercent >= 24.7 && clinopercent <= 30.8) : var clinostatus = 'Повышенная возбудимость (заметная)'; break;
			case (clinopercent >= 30.9 && clinopercent <= 37.0) : var clinostatus = 'Повышенная возбудимость (значительная)'; break;
			case (clinopercent >= 37.1 && clinopercent <= 43.1) : var clinostatus = 'Повышенная возбудимость (резкая)'; break;
			case (clinopercent >= 43.2) : var clinostatus = 'Повышенная возбудимость (очень резкая)'; break;
		}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#cerdo').append(cerdo + '%. ' + cerdostatus);
	$('#romberg').append(stab + ' сек. ' + romberg);
	$('#orto').append(orto + ' ударов. ' + ortostatus);
	$('#clino').append(clino + '%. ' + clinostatus);
	$('#gender').append(gender);
	$('#fac').append(fac);
});