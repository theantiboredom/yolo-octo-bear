$(document).ready(function() {

	// Get username from cookie on form load.
	var remember = $.cookie('remember');
	if (remember == 'true') {
		var username = $.cookie('username');
		var password = $.cookie('password');
		$('#username').val(username);
		$('#password').val(password);
		$('#remember').prop('checked', true);
	}

	$('#login_submit').click(function()
	{
	    if ($('#remember').is(':checked'))
	    {
	        var username = $('#username').val();
	        var password = $('#password').val();
	        
	        $.cookie('username', username, { expires: 365 });
	        $.cookie('password', password, { expires: 365 });
	        $.cookie('remember', true, { expires: 365 });
	    }
	    else {
	    	$.cookie('username', null);
	        $.cookie('password', null);
	        $.cookie('remember', null);
	    }

	});

});