$(document).ready(function() {
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	date = localStorage.getItem('dateinp');
	weight = localStorage.getItem('weightinp');
	height = localStorage.getItem('heightinp');
	pulse = localStorage.getItem('pulseinp');
	sist = localStorage.getItem('sistinp');
	gender = localStorage.getItem('genderinp');
	rec1 = localStorage.getItem('rec1inp');
	rec2 = localStorage.getItem('rec2inp');
	lung = localStorage.getItem('lunginp');
	dynam = localStorage.getItem('dynaminp');
	fac = localStorage.getItem('facinp');
	
	mass = parseInt(weight * 1000 / height);

	lindex = parseInt(lung / weight);

	strindex = parseInt(dynam / weight);

	robins = parseInt((pulse * sist) / 100);

	recovery = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

	var points = 0;

	if (gender == 'Мужской') {
		switch (true) {
			case (mass > 501 ) : points = points - 2; break;
			case (mass >= 451) && (mass <= 500) : points = points - 1; break;
			case (mass >= 401) && (mass <= 450) : points = points + 0; break;
		}
		
		switch (true) {
			case (lindex < 50) : points = points + 0; break;
			case (lindex >= 51) && (lindex <= 55) : points = points + 1; break;
			case (lindex >= 56) && (lindex <= 60) : points = points + 2; break;
			case (lindex >= 61) && (lindex <= 65) : points = points + 4; break;
			case (lindex > 66) : points = points + 5; break;
		}
		
		switch (true) {
			case (strindex < 60) : points = points + 0; break;
			case (strindex >= 61) && (strindex <= 65) : points = points + 1; break;
			case (strindex >= 66) && (strindex <= 70) : points = points + 2; break;
			case (strindex >= 71) && (strindex <= 80) : points = points + 3; break;
			case (strindex > 81) : points = points + 4; break;
		}
		
		switch (true) {
			case (robins > 111) : points = points - 2; break;
			case (robins >= 95) && (robins <= 110) : points = points + 0; break;
			case (robins >= 85) && (robins <= 94) : points = points + 2; break;
			case (robins >= 70) && (robins <= 84) : points = points + 3; break;
			case (robins < 69) : points = points + 4; break;
		}
		
		switch (true) {
			case (recovery > 3) : points = points - 2; break;
			case (recovery >= 2) && (recovery <= 3) : points = points + 1; break;
			case (recovery >= 1.30) && (recovery <= 1.59) : points = points + 3; break;
			case (recovery >= 1.00) && (recovery <= 1.29) : points = points + 5; break;
			case (recovery < 0.59) : points = points + 7; break;
		}
	} else {
		switch (true) {
			case (mass > 451) : points = points - 2; break;
			case (mass >= 401) && (mass <= 450) : points = points - 1; break;
			case (mass >= 375) && (mass <= 400) : points = points + 0; break;
		}

		switch (true) {
			case (lindex < 40) : points = points + 0; break;
			case (lindex >= 41) && (lindex <= 45) : points = points + 1; break;
			case (lindex >= 46) && (lindex <= 50) : points = points + 2; break;
			case (lindex >= 51) && (lindex <= 55) : points = points + 4; break;
			case (lindex > 56) : points = points + 5; break;
		}

		switch (true) {
			case (strindex < 40) : points = points + 0; break;
			case (strindex >= 41) && (strindex <= 50) : points = points + 1; break;
			case (strindex >= 51) && (strindex <= 55) : points = points + 2; break;
			case (strindex > 56) && (strindex < 60) : points = points + 3; break;
			case (strindex > 61) : points = points + 4; break;
		}

		switch (true) {
			case (robins > 111) : points = points - 2; break;
			case (robins >= 95) && (robins <= 110) : points = points + 0; break;
			case (robins >= 85) && (robins <= 94) : points = points + 2; break;
			case (robins >= 70) && (robins <= 84) : points = points + 3; break;
			case (robins < 69) : points = points + 4; break;
		}

		switch (true) {
			case (recovery > 3) : points = points - 2; break;
			case (recovery >= 2) && (recovery <= 3) : points = points + 1; break;
			case (recovery >= 1.30) && (recovery <= 1.59) : points = points + 3; break;
			case (recovery >= 1.00) && (recovery <= 1.29) : points = points + 5; break;
			case (recovery < 0.59) : points = points + 7; break;
		}
	}

	switch (true) {
		case (points >= 17.0) && (points <= 21.0) : status = 'Высокий'; break;
		case (points >= 14.0) && (points <= 16.0) : status = 'Выше среднего'; break;
		case (points >= 10.0) && (points <= 13.0) : status = 'Средний'; break;
		case (points >= 5.0) && (points <= 9.0) : status = 'Ниже среднего'; break;
		case (points <= 4.0) : status = 'Низкий'; break;
	} 

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#points').append(points.toFixed(2));
	$('#status').append(status);
	$('#fac').append(fac);
});