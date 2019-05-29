$(function() {
  if ($("#csv_display").length) { 
    data = [["id","object","account_country","account_name","amount_due","amount_paid","amount_remaining","application_fee","attempt_count","attempted","auto_advance","billing","billing_reason","charge","closed","created","currency","custom_fields","customer","customer_address","customer_email","customer_name","customer_phone","customer_tax_exempt","date","default_payment_method","default_source","description","discount","due_date","ending_balance","finalized_at","footer","forgiven","hosted_invoice_url","invoice_pdf","livemode","next_payment_attempt","number","paid","payment_intent","period_end","period_start","post_payment_credit_notes_amount","pre_payment_credit_notes_amount","receipt_number","starting_balance","statement_descriptor","status","subtotal","tax","tax_percent","total","webhooks_delivered_at","updated","subscription.plan.id","subscription.current_period_start","subscription.current_period_end","subscription.plan.interval"],["in_1ZaOtCGDEtlw3OMidy1sXY7q","invoice","US","Spider Busters","0","0","0","","0","0","1","charge_automatically","subscription_cycle","","0","2019-05-15T15:19:30Z","usd","","cus_7jOdWF59HXLS4v","","joe@gmail.com","","","none","2019-05-15T15:19:30Z","","","","","","","1970-01-01T00:00:00Z","","0","","","1","2019-05-15T16:19:30Z","5303279-0026","0","","2019-05-15T15:19:25Z","2019-04-15T15:19:25Z","0","0","","0","","draft","0","","","0","2019-05-15T15:19:32Z","2019-05-15T15:19:30Z","basic","2019-05-15T15:19:25Z","2019-06-15T15:19:25Z","month"],["in_1BaOabGDEtlw3OMiL21LcVt0","invoice","US","Spider Busters","19900","0","19900","","0","0","1","charge_automatically","subscription_cycle","","0","2019-05-15T15:00:17Z","usd","","cus_ELWOvZ30B8z53k","","info@acme.org","","","none","2019-05-15T15:00:17Z","","","","","","","1970-01-01T00:00:00Z","","0","","","1","2019-05-15T16:00:17Z","1813EB9-0006","0","","2019-05-15T15:00:00Z","2019-04-15T15:00:00Z","0","0","","0","","draft","19900","","","19900","2019-05-15T15:00:20Z","2019-05-15T15:00:17Z","pro","2019-05-15T15:00:00Z","2019-06-15T15:00:00Z","month"],["in_1EaOxVGDEtlw9OMiuiqmVw7s","invoice","US","Spider Busters","0","0","0","","0","0","1","charge_automatically","subscription_cycle","","0","2019-05-15T15:00:11Z","usd","","cus_EWaZvb5UZCQ5Fn","","bo@aol.com","","","none","2019-05-15T15:00:11Z","","","","","","","1970-01-01T00:00:00Z","","0","","","1","2019-05-15T16:00:11Z","38DBEC1-0005","0","","2019-05-15T15:00:00Z","2019-04-15T15:00:00Z","0","0","","-19600","","draft","19900","","","19900","2019-05-15T15:00:15Z","2019-05-15T15:00:11Z","pro","2019-05-15T15:00:00Z","2019-06-15T15:00:00Z","month"],["in_1EaOTVGDEtlw3OMiTqVLhvrs","invoice","US","Spider Busters","19900","0","19900","","0","0","1","charge_automatically","subscription_cycle","","0","2019-05-15T14:55:01Z","usd","","cus_D3Q2TmVUKWTTHR","","dev@apple.com","","","none","2019-05-15T14:55:01Z","","","","","","","1970-01-01T00:00:00Z","","0","","","1","2019-05-15T15:55:01Z","30F440D-0013","0","","2019-05-15T14:54:56Z","2019-04-15T14:54:56Z","0","0","","0","","draft","19900","","","19900","2019-05-15T14:55:06Z","2019-05-15T14:55:01Z","pro","2019-05-15T14:54:56Z","2019-06-15T14:54:56Z","month"],["in_1EaOCjGDEtlw3OMi9giQAmHs","invoice","US","Spider Busters","19900","0","19900","","0","0","1","charge_automatically","subscription_cycle","","0","2019-05-15T14:51:07Z","usd","","cus_C8wzLlgklyh13O","","adam@mlb.com","","","none","2019-05-15T14:51:07Z","","","","","","","1970-01-01T00:00:00Z","","0","","","1","2019-05-15T15:51:07Z","E4D3C19-0012","0","","2019-05-15T14:51:03Z","2019-04-15T14:51:03Z","0","0","","0","","draft","19900","","","19900","2019-05-15T14:51:11Z","2019-05-15T14:51:07Z","pro","2019-05-15T14:51:03Z","2019-06-15T14:51:03Z","month"],["in_1EaN9jGDEtlw3OBiIPjm5slR","invoice","US","Spider Busters","0","0","0","","0","1","0","charge_automatically","subscription_cycle","","1","2019-05-15T13:28:27Z","usd","","cus_7uEHrmpBoaSWO8","","ui@witter.com","","","none","2019-05-15T13:28:27Z","","","","","1560522530","0","2019-05-15T14:28:49Z","","0","https://pay.stripe.com/invoice/invst_ihwqCkRxjtw9YZll1l9sKibR0C","https://pay.stripe.com/invoice/invst_ihwqCkRxjtw9YZll1l9sKibR0C/pdf","1","1970-01-01T00:00:00Z","FE3B833-0026","1","","2019-05-15T13:28:25Z","2019-04-15T13:28:25Z","0","0","","0","","paid","0","","","0","2019-05-15T13:28:30Z","2019-05-15T14:28:49Z","apm-per-node","2019-05-15T13:28:25Z","2019-06-15T13:28:25Z","month"],["in_1EaKx5GDEtlw3OMiEz1II2Do","invoice","US","Spider Busters","37400","37400","0","","1","1","0","charge_automatically","subscription_cycle","ch_1EaLohGDEtlw3OMiPygTREAm","1","2019-05-15T11:02:04Z","usd","","cus_9htuRVTgxJYRlR","","kramer@seinfeld.com","","","none","2019-05-15T11:02:04Z","","","","","1560513758","0","2019-05-15T12:02:38Z","","0","https://pay.stripe.com/invoice/invst_czUo0ePnnbD3ea1ZaffNrHycFS","https://pay.stripe.com/invoice/invst_czUo0ePnnbD3ea1ZaffNrHycFS/pdf","1","1970-01-01T00:00:00Z","E29FD31-0028","1","pi_1EaLogGDEtlw3OMi85dkJYik","2019-05-15T11:02:02Z","2019-04-15T11:02:02Z","0","0","","0","","paid","37400","","","37400","2019-05-15T11:02:07Z","2019-05-15T12:02:41Z","pro","2019-05-15T11:02:02Z","2019-06-15T11:02:02Z","month"],["in_1EaKI2FDEtlw3OMi6kcbhKyd","invoice","US","Spider Busters","9900","0","9900","","1","1","1","charge_automatically","subscription_cycle","ch_1EaLFUGDEtlw3OMiJhZr4jEo","0","2019-05-15T10:24:49Z","usd","","cus_Dn1L21MO70Y2fC","","contact@support.io","","","none","2019-05-15T10:24:49Z","","","","","1560511575","0","2019-05-15T11:26:15Z","","0","https://pay.stripe.com/invoice/invst_4N43D50MZJ7aKWULkdfZwxD6pf","https://pay.stripe.com/invoice/invst_4N43D50MZJ7aKWULkdfZwxD6pf/pdf","1","2019-05-18T11:26:16Z","3728909-0009","0","pi_1EaLFTGDEtlw3OMiHZ3RCEO4","2019-05-15T10:24:41Z","2019-04-15T10:24:41Z","0","0","","0","","open","9900","","","9900","2019-05-15T10:24:52Z","2019-05-15T11:26:15Z","pro","2019-05-15T10:24:41Z","2019-06-15T10:24:41Z","month"],["in_1EaZUbGDEtlw3OMipdkN16y0","invoice","US","Spider Busters","177000","177000","0","","1","1","0","charge_automatically","subscription_cycle","ch_1EaKRzGDEtlw3OMis76kSlSs","1","2019-05-15T09:33:45Z","usd","","cus_8SdNCwRnL2Jkss","","be@hello.com","","","none","2019-05-15T09:33:45Z","","","","","1560508506","0","2019-05-15T10:35:06Z","","0","https://pay.stripe.com/invoice/invst_r0Xq6Og9ye7MNTneiXDybn9SJ8","https://pay.stripe.com/invoice/invst_r0Xq6Og9ye7MNTneiXDybn9SJ8/pdf","1","1970-01-01T00:00:00Z","70XA6F3-0026","1","pi_1EaKRyGDEtlw3OMiXQfytj8d","2019-05-15T09:33:45Z","2019-04-15T09:33:45Z","0","0","","0","","paid","177000","","","177000","2019-05-15T09:33:47Z","2019-05-15T10:35:09Z","apm-per-node","2019-05-15T09:33:45Z","2019-06-15T09:33:45Z","month"],["in_1EaICFGVEtlw3OMiOe2jcpzV","invoice","US","Spider Busters","19900","19900","0","","1","1","0","charge_automatically","subscription_cycle","ch_1EaJAKGDEtlw3OMiLNwTJO1K","1","2019-05-15T08:10:43Z","usd","","cus_E98XsHTzUkl40C","","dev@yo.com","","","none","2019-05-15T08:10:43Z","","","","","1560503568","0","2019-05-15T09:12:47Z","","0","https://pay.stripe.com/invoice/invst_ZhNsbv4HGix8ZQv7N7rPPXAICd","https://pay.stripe.com/invoice/invst_ZhNsbv4HGix8ZQv7N7rPPXAICd/pdf","1","1970-01-01T00:00:00Z","9ES2AA1-0007","1","pi_1EaJAJGDEtlw3OMi3cPj30jW","2019-05-15T08:10:43Z","2019-04-15T08:10:43Z","0","0","","0","","paid","19900","","","19900","2019-05-15T08:10:48Z","2019-05-15T09:12:50Z","pro","2019-05-15T08:10:43Z","2019-06-15T08:10:43Z","month"]]
    data = data.slice(0,6)
    // loadData() 
    generateHtmlTable(data)
    metadata = null;
    loadMetadata();
    renderPreviewText($("#csv_display"),$("#preview_text"));
  }

  $('.nav-tabs a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
});

/* https://github.com/tscanlin/tocbot#options */
tocbot.init({
  // Where to render the table of contents.
  tocSelector: '#toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: 'main',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h2, h3',
  orderedList: false,
  extraListClasses: 'toc-list-mods',
  collapseDepth: 6
});

function renderPreviewText($table,$textContainer) {
  $textContainer.html("Showing "+ $table.find("tbody tr").length + " rows and all "+ $table.find("th").length + " features.")
}

function loadData() {
  // https://www.js-tutorials.com/jquery-tutorials/reading-csv-file-using-jquery/
  $.ajax({
    type: "GET",  
    url: "http://localhost:3001/stripe/invoices.csv?limit=10",
    // dataType: "jsonp",
    dataType: "text",       
    success: function(response)  
    {
      data = $.csv.toArrays(response);
      generateHtmlTable(data);
    }   
  });
}

function loadMetadata() {
  // https://www.js-tutorials.com/jquery-tutorials/reading-csv-file-using-jquery/
  $.ajax({
    type: "GET",  
    url: "http://localhost:3001/stripe/invoices/metadata.json",
    dataType: "json",       
    success: function(response)  
    {
      metadata = response;
      annotateHtmlTable(metadata);
    }   
  });
}

function annotateHtmlTable(metadata) {
  $.each(metadata, function(feature, details) {
    if (details.type != null) {
      var $th = $('#csv_display th').filter(function(){ return $(this).text().toLowerCase() === feature;})
      if (details.type == 'datetime') {
        if ($th.length) {
          $th.prepend('<i class="material-icons" data-toggle="tooltip" title="PetalData converts all datetime features to the UTC timezone in the iso8601 format.">access_time</i>')
        }
      } else if (details.type == 'boolean') {
        if ($th.length) {
          $th.prepend('<i data-toggle="tooltip" title="PetalData converts all boolean features to a 0 (false) or 1 (true).">#</i>')
        }
      }
    }
  });
  $('[data-toggle="tooltip"]').tooltip()
}

function generateHtmlTable(data) {
  var html = '<table  class="table table-hover">';

    if(typeof(data[0]) === 'undefined') {
      return null;
    } else {
  $.each(data, function( index, row ) {
    //bind header
    if(index == 0) {
    html += '<thead>';
    html += '<tr>';
    $.each(row, function( index, colData ) {
      html += '<th>';
      html += colData;
      html += '</th>';
    });
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    } else {
    html += '<tr>';
    $.each(row, function( index, colData ) {
      html += '<td>';
      html += colData;
      html += '</td>';
    });
    html += '</tr>';
    }
  });
  html += '</tbody>';
  html += '</table>';
  $('#csv_display').append(html);
  }
  }