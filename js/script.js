pars_xml();

function pars_xml(){

	var xml = '';
	var fileName = 'xml.xml'

	$.get(fileName, function(data){
		recursive_shit($('Victory',data),$('.tree'));
	},'xml')

}

function recursive_shit(xml_piece, parent){

		// Current Element
		var element = $('<div />').appendTo(parent).html('<b>'+ xml_piece[0].nodeName +'</b>');

		// Attributes
		$.each(xml_piece[0].attributes, function(i,e){
			element.append('<span> '+ e.nodeName +' = '+ e.nodeValue +'</span>')
		});

		// Children
		$.each(xml_piece.children(), function(i,e){
			recursive_shit($(e),element)
		});
}


$(function(){

$('.tree').delegate('div', 'click', function(e){

	$(this).children(':not(b)').toggle();
	return false;
})
})
