// JavaScript Document
$(document).ready(function(){
  $("#carddetail li").click(function(){
  $("#carddetail li").removeClass("active");
    $(this).addClass("active");
	
  });

/*Checkbox importer check*/
$("#importer").change(function() {
    if(this.checked) {
        
		$('#importerList').removeAttr('disabled');
    }
	else {
		$('#importerList').attr('disabled', 'disabled');
	}
});
/*Checkbox importer check ends*/
 
/*checkbox email sub*/
$("#emailSubCheck").change(function() {
	if (this.checked)
		$("#emailSub").removeClass('hidden');
	else
		$("#emailSub").addClass('hidden');
});
$('.sub-list-anchor').click(function(e){
	e.preventDefault();
	$('.sub-list').toggleClass('hidden');
	e.stopPropagation();
});
 
$('html').click(function() {
    $('.sub-list').addClass('hidden');
});
$('.sub-list').click(function(e){
	e.stopPropagation();
});
/*checkbox email sub ends*/  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
        var currentTab = $(e.target).text(); // get current tab
        var LastTab = $(e.relatedTarget).text(); // get last tab
        $(".current-tab span").html(currentTab); 
        $(".last-tab span").html(LastTab);
    });
});

/*accordion*/
$('.accordion').click(function(e){
      e.preventDefault();
          var id = $(this).attr("title");
          if($('#'+id).hasClass('show')) {
			    $('#'+id).removeClass('show');
               $('#'+id).toggleClass('hide');
			  
          } else {
			    $('#'+id).removeClass('hide');
               $('#'+id).toggleClass('show');
          }       
      var collapse = '<i class="fa fa-sort-up"></i>';
      var expand = '<i class="fa fa-sort-down"></i>';
      if($(this).text()=='Expand')
              $(this).html('Collapse'+collapse);
      else
              
              $(this).html('Expand'+expand);
});
/*accordion ends*/

/*select option change for bulk action*/
var valueSelected;
$('#selectChoice').change(function() {
	var optionSelected = $("option:selected", this);
	valueSelected = this.value;
	$('#bulkAction').removeAttr('disabled');
	if(valueSelected == 'Bulk Action') {$('#bulkAction').attr('disabled','disabled')}
	/*checkbox check starts*/
	var checked = $(".cb-columns input:checked").length > 0;
	if (!checked){
        alert("Please check at least one checkbox");
        return false;
    }
	/*checkbox check ends*/
	return valueSelected;
});
$('#bulkAction').click(function() {
  $( '#selectChoice' ).change();
  switch(valueSelected)
  {
     case "Bulk Action" : $('#bulkAction').attr('data-target',''); break;
     case "Enable" : $('#bulkAction').attr('data-target','#bulkEnable'); break;
	 case "Disable" : $('#bulkAction').attr('data-target','#bulkDisable'); break;
	 case "Delete" : $('#bulkAction').attr('data-target','#bulkDelete'); break;
	 case "Approve" : $('#bulkAction').attr('data-target','#bulkApprove'); break;
	 case "Disapprove" : $('#bulkAction').attr('data-target','#bulkDisapprove'); break;
  }  
});
/*select option change for bulk action ends*/

/*Direct select choice */
$('#selectChoiceDirect').change(function(){
	var optionSelected = $("option:selected", this);
	var valueSelected = this.value;
	switch(valueSelected)
	{
		case "Select Action" :  break;
		case "Delete" : $('#delete').modal('show'); break;
		case "Activate" : $('#activate').modal('show'); break;
	}  
});
/*ends direct select choice*/

/*select all checkbox*/
$('.cb-columns th:first-child input[type=checkbox]').click(function(event) {  
        if(this.checked) { 
            $('.cb-columns td:first-child input[type=checkbox]').each(function() { 
                this.checked = true;  
            });
        }else{
            $('.cb-columns td:first-child input[type=checkbox]').each(function() { 
                this.checked = false; 
            });         
        }
});
/*select all checkbox ends*/



// Dynamic populate multiple wine input field

  $(document).ready(function(){
		  var counter = 2;
		  
		  
		   $("#addNewrow").click(function(){
		   counter= counter +1;
		 
		   $elem = $('#generaterowform .form-group:nth-child(3)').clone(true);
		   $elem.html($elem.html().replace('2',counter));
		   $elem.html($elem.html().replace('2',counter));
		   $elem.html($elem.html().replace('2',counter));
		 
		   $elem.insertBefore('#adddata');
		   if (counter > 4) {
			$("#adddata").hide();
			
		   }
	 });
  });
