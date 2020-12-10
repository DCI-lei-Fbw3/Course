/*   Your code goes here! */

/*  jQuery: slim & minified */

/* imports */
import percentage from './percentage.js';
import aspectratio from './aspect-ratio.js';

/* object of all input fields */
const allInputs = $('input');

/* traverse over each input field using .each function from jQuery*/
allInputs.each( function(){
    /* add an "change" - event-listener to the particular input field */
    $(this).change(function(){
        /* decide, based on input field's ID, how to handle the change-event */
        switch(this.id){

            case 'modulo_1':
            case 'modulo_2': 
                $('#modulo_result').val(
                    percentage.modulo(
                        $('#modulo_1').val(), 
                        $('#modulo_2').val()
                    )
                );
                break;

            case 'percentage_1':
            case 'percentage_2':
                $('#percentage_result').val(
                    percentage.percentage(
                        $('#percentage_1').val(), 
                        $('#percentage_2').val()
                    )
                );
                break;

            case 'percentageOf_1':
            case 'percentageOf_2':
                $('#percentageOf_result').val(
                    percentage.percentageOf(
                        $('#percentageOf_1').val(), 
                        $('#percentageOf_2').val()
                    )
                );
                break;

            case 'difference_1':
            case 'difference_2':
                $('#difference_result').val(
                    percentage.difference(
                        $('#difference_1').val(), 
                        $('#difference_2').val()
                    )
                ); 
                break;

            case 'ratio_1':
            case 'ratio_result-height':
                $('#ratio_result-width').val(
                    aspectratio.calculateAspectRatio(
                        $('#ratio_1').val(),
                        $('#ratio_2').val(),
                        $('#ratio_result-height').val(),
                        'h'
                    )
                );
                break;

            case 'ratio_2':
            case 'ratio_result-width':
                $('#ratio_result-height').val(
                    aspectratio.calculateAspectRatio(
                        $('#ratio_1').val(),
                        $('#ratio_2').val(), 
                        $('#ratio_result-width').val(), 
                        'w'
                    )
                );
                break; 

            default:
                console.error(`Error ! ID of element: "${this.id}"`);
                break;

        }         
        
    });

});
