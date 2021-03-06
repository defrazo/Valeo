$(document).ready(function() {
	$('#sname').focusout(function() {
		var sname = $('#sname').val();
		
		if (sname != '')	{
		
			if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
			else {
				$('#sname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			} 
		}
		
		$('#sname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidSname(valsname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valsname);
}

$(document).ready(function() {
	$('#fname').focusout(function() {
		var fname = $('#fname').val();
		
		if (fname != '')	{
			
			if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
			else {
				$('#fname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#fname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidFname(valfname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valfname);
}

$(document).ready(function() {
	$('#mname').focusout(function() {
		var mname = $('#mname').val();
		
		if (mname != '')	{
			
			if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
			else {
				$('#mname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));	
			}
		}
		
		$('#mname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidMname(valmname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valmname);
}

$(document).ready(function() {
	$('#pulse').focusout(function() {
		var pulse = $('#pulse').val();
		
		if (($(this).val() < 30) || ($(this).val() > 130)) $(this).val($(this).val().substr(0, 0));

		if (pulse != '') {
			
			if (isValidPulse(pulse)) $('#pulse').css('border', '1px solid #0dd01a');
			else {
				$('#pulse').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulse').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#pulse').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidPulse(valpulse) {
	if ($('#pulse').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulse);
	}

	if ($('#pulse').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulse);
	}
}

$(document).ready(function() {
	$('#sist').focusout(function() {
		var sist = $('#sist').val();
		
		if (($(this).val() < 60) || ($(this).val() > 220)) $(this).val($(this).val().substr(0, 0));
		
		if (sist != '') {
			
			if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');
			else {
				$('#sist').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#sist').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#sist').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));       
	});
});

function isValidSist(valsist) {
	if ($('#sist').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valsist);
	}

	if ($('#sist').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valsist);
	}
}

$(document).ready(function() {
	$('#dia').focusout(function() {
		var dia = $('#dia').val();
		
		if (($(this).val() < 30) || ($(this).val() > 140)) $(this).val($(this).val().substr(0, 0));

		if (dia != '') {
			if (isValidDia(dia)) $('#dia').css('border', '1px solid #0dd01a');
			else {
				$('#dia').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#dia').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#dia').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidDia(valdia) {
	if ($('#dia').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdia);
	}

	if ($('#dia').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valdia);
	}
}

$(document).ready(function() {
	$('#pulseop').focusout(function() {
		var pulseop = $('#pulseop').val();
		
		if (($(this).val() < 30) || ($(this).val() > 160)) $(this).val($(this).val().substr(0, 0));

		if (pulseop != '') {
			
			if (isValidPulseop(pulseop)) $('#pulseop').css('border', '1px solid #0dd01a');
			else {
				$('#pulseop').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulseop').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#pulseop').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidPulseop(valpulseop) {
	if ($('#pulseop').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulseop);
	}

	if ($('#pulseop').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulseop);
	}
}

$(document).ready(function() {
	$('#pulsep').focusout(function() {
		var pulsep = $('#pulsep').val();
		
		if (($(this).val() < 30) || ($(this).val() > 160)) $(this).val($(this).val().substr(0, 0));

		if (pulsep != '') {
			
			if (isValidPulsep(pulsep)) $('#pulsep').css('border', '1px solid #0dd01a');
			else {
				$('#pulsep').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulsep').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#pulsep').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidPulsep(valpulsep) {
	if ($('#pulsep').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulsep);
	}

	if ($('#pulsep').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulsep);
	}
}

$(document).ready(function() {
	$('#pulsebb').focusout(function() {
		var pulsebb = $('#pulsebb').val();
		
		if (($(this).val() < 1) || ($(this).val() > 160)) $(this).val($(this).val().substr(0, 0));

		if (pulsebb != '') {
			
			if (isValidPulsebb(pulsebb)) $('#pulsebb').css('border', '1px solid #0dd01a');
			else {
				$('#pulsebb').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulsebb').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#pulsebb').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidPulsebb(valpulsebb) {
	if ($('#pulsebb').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulsebb);
	}

	if ($('#pulsebb').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulsebb);
	}
}

$(document).ready(function() {
	$('#pulseba').focusout(function() {
		var pulseba = $('#pulseba').val();
		
		if (($(this).val() < 1) || ($(this).val() > 160)) $(this).val($(this).val().substr(0, 0));

		if (pulseba != '') {
			
			if (isValidPulseba(pulseba)) $('#pulseba').css('border', '1px solid #0dd01a');
			else {
				$('#pulseba').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulseba').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#pulseba').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidPulseba(valpulseba) {
	if ($('#pulseba').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulseba);
	}

	if ($('#pulseba').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulseba);
	}
}

$(document).ready(function() {
	$('#pulsebaa').focusout(function() {
		var pulsebaa = $('#pulsebaa').val();
		
		if (($(this).val() < 1) || ($(this).val() > 160)) $(this).val($(this).val().substr(0, 0));

		if (pulsebaa != '') {
			
			if (isValidPulsebaa(pulsebaa)) $('#pulsebaa').css('border', '1px solid #0dd01a');
			else {
				$('#pulsebaa').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulsebaa').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#pulsebaa').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidPulsebaa(valpulsebaa) {
	if ($('#pulsebaa').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulsebaa);
	}

	if ($('#pulsebaa').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulsebaa);
	}
}

$(document).ready(function() {
	$('#sistp').focusout(function() {
		var sistp = $('#sistp').val();
		
		if (($(this).val() < 60) || ($(this).val() > 220)) $(this).val($(this).val().substr(0, 0));
		
		if (sistp != '') {
			
			if (isValidSistp(sistp)) $('#sistp').css('border', '1px solid #0dd01a');
			else {
				$('#sistp').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#sistp').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#sistp').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));       
	});
});

function isValidSistp(valsistp) {
	if ($('#sistp').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valsistp);
	}

	if ($('#sistp').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valsistp);
	}
}

$(document).ready(function() {
	$('#diap').focusout(function() {
		var diap = $('#diap').val();
		
		if (($(this).val() < 30) || ($(this).val() > 140)) $(this).val($(this).val().substr(0, 0));

		if (diap != '') {
			if (isValidDiap(diap)) $('#diap').css('border', '1px solid #0dd01a');
			else {
				$('#diap').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#diap').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#diap').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidDiap(valdiap) {
	if ($('#diap').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdiap);
	}

	if ($('#diap').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valdiap);
	}
}

$(document).on('click focuson focusout mousemove', function() {
	var mname = $('#mname').val(),
		fname = $('#fname').val(),
		sname = $('#sname').val(),
		sist = $('#sist').val(),
		dia = $('#dia').val(),
		pulse = $('#pulse').val(),
		pulsep = $('#pulsep').val(),
		pulseop = $('#pulseop').val(),
		pulsebb = $('#pulsebb').val(),
		pulseba = $('#pulseba').val(),
		pulsebaa = $('#pulsebaa').val(),
		sistp = $('#sistp').val(),
		diap = $('#diap').val();
		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
	if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');
	if (isValidDia(dia)) $('#dia').css('border', '1px solid #0dd01a');
	if (isValidPulse(pulse)) $('#pulse').css('border', '1px solid #0dd01a');
	if (isValidPulseop(pulseop)) $('#pulseop').css('border', '1px solid #0dd01a');
	if (isValidPulsep(pulsep)) $('#pulsep').css('border', '1px solid #0dd01a');
	if (isValidSistp(sistp)) $('#sistp').css('border', '1px solid #0dd01a');
	if (isValidDiap(diap)) $('#diap').css('border', '1px solid #0dd01a');
	if (isValidPulsebb(pulsebb)) $('#pulsebb').css('border', '1px solid #0dd01a');
	if (isValidPulseba(pulseba)) $('#pulseba').css('border', '1px solid #0dd01a');
	if (isValidPulsebaa(pulsebaa)) $('#pulsebaa').css('border', '1px solid #0dd01a');
});