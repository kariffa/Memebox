/**
 * Created by memebox on 16/7/7.
 */
jQuery(function(){
    jQuery(".customer_Id_Card.idcard").hide()


    if( jQuery(".customer_Id_Card.idcard").length ){
        jQuery(".customer_Id_Card.idcard").each(function(){
            var idCardValue = jQuery(this).html();
            jQuery(this).html( global.util.encryption(idCardValue) )
        })
        ;
    }
    jQuery(".customer_Id_Card.idcard").show()
})
