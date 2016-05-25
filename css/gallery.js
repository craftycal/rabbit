
jQuery.ajax({
   url: hubajax.ajaxurl,
   type: 'post',
   data: {
    action: 'ajax_samlCert',
   },
   success: function(result) {
    if( result === 'success' ) {
     jQuery( '#sso_cert_detail' ).removeClass( 'preloader' ).html( 'New Certificate Generated <span style="color: #333333; font-size: 8pt;">Note: you MUST add the certificate to ADFS or perform a Metadata Update in order for ADFS to be able to decrypt communications.</span>' );
    } else {
     jQuery( '#sso_cert_detail' ).removeClass( 'preloader' ).html( 'Error Generating Certificate' );
    }
   },
   error: function(result) {
    jQuery( '#sso_cert_detail' ).removeClass( 'preloader' ).html( 'Unknown Error Generating Certificate' );
   },
   timeout: 10000,
  });