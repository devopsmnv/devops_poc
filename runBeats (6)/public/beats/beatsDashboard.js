$(document).ready(function() { 
	//initialize all panels....
	//refreshAll(); 
	
	showDateTime();
	getEnvName();
	
} );

function getEnvName(){
		
	$('#refreshAllPanels').show();
	$('#refreshAllPanels').text("loading ...");
	
	loadEnvironmentName();
	
	$('#refreshAllPanels').hide();	
}

//------------------------
function loadEnvironmentName(){ 

	$.get("../beats/EnvName", function(data, status){
		console.log(" loadEnvironmentName  :: Data: " + data + "\nStatus: " + status);
		var obj = jQuery.parseJSON (data);
		$('#envName').text(obj);

 	});
	
}	

function showDateTime(){

	var now = new Date($.now());
	//dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
	$('#displayDate').text(now);
}
//------------------------

function refreshOrderPanel(){
	
	$('#refreshAllPanels').show();
	$('#refreshAllPanels').text("loading ...");
	loadOrderCountPanel(); 
	recentOrdersList();
	salesOrderLinesCountByStatus();
	returnOrderLinesCountByStatus();
	stmOrderLinesCountByStatus();
	loadOrderHoldsCount();
	loadShipmentCountPanel();
	loadDuplicateAWBOnShipmentList();	
	
	loadRunningServerCount();
	showDateTime();
	
}
//------------------------

function refreshInventoryPanel(){
	
	$('#refreshAllPanels').show();
	$('#refreshAllPanels').text("loading ...");
	
	loadWcsSyncInvChanges();
	loadWcsReservationCountPanel();
	loadWcsAtpCallsPanel();
	
	loadPendingRefundList()
	loadDadiAuditSummary();
	loadSKUSummary();
	
	loadCountByMotherBrand();
	loadCountByBrandAndMotherBrand();
	
	getEnvName();
	showDateTime();
	
}

//------------------------
 
function refreshExceptionsPanel(){
	
	$('#refreshAllPanels').show();
	$('#refreshAllPanels').text("loading ...");
	
	loadIntegServerCountPanel();
	loadAgentServerCountPanel();
	
	loadOpenAlertsCountPanel();
	loadExceptionsCountPanel();
	loadAwbCountPanel();
	
	getEnvName();
	showDateTime();
	
}
//------------------------
 
function refreshReportsPanel(){
	
	$('#refreshAllPanels').show();
	$('#refreshAllPanels').text("loading ...");
	
	loadSalesOrderReportPanel();
	loadReturnOrderReportPanel();
	 
	getEnvName();
	showDateTime();	
}
//------------------------
function loadOrderCountPanel(){ 
	$('#orderCountSummary').DataTable( {
		"destroy": true,
		"searching": false,
		"paging":   false, 
		"order": [[ 0, "desc" ]],
		async: false,
		"ajax": "../beats/v1/rest/q_0002", 
		"columns": [
//						 {
//							 "className": 'details-control',
//							 "orderable": false,
//							 "data": null,
//							 "defaultContent": '',
//							 "render": function () {
//								 return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
//							 },
//							 width:"15px"
//						 },
			{ "data": "ORDERTYPE" },
			{ "data": "ENTRY_TYPE" },
			{ "data": "ORDERCOUNT" }						
		]
	} ); 
}
//------------------------
function recentOrdersList(){ 
	$('#recentOrders').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0017", 
		"columns": [
			{ "data": "DOCUMENT_TYPE" },
			{ "data": "ENTRY_TYPE" },
			{ "data": "ORDER_NO" },
			{ "data": "ORDER_DATE" },
			{ "data": "FIRST_NAME" },
			{ "data": "LAST_NAME" },
			{ "data": "STATUS_NAME" } 					
		]
	} ); 
}	

//------------------------
function salesOrderLinesCountByStatus(){ 
	$('#soLineByStatus').DataTable( {
		"destroy": true,
		"searching": false,
		"paging":   false, 
		"ajax": "../beats/v1/rest/q_0003", 
		"columns": [
			{ "data": "STATUS_NAME" },
			{ "data": "ORDERLINECOUNT" } 					
		]
	} ); 
}	

//------------------------
function returnOrderLinesCountByStatus(){ 
	$('#roLineByStatus').DataTable( {
		"destroy": true,
		"searching": false,
		"paging":   false, 
		"ajax": "../beats/v1/rest/q_0004", 
		"columns": [
			{ "data": "STATUS_NAME" },
			{ "data": "ORDERLINECOUNT" } 					
		]
	} ); 
}	

//------------------------
function stmOrderLinesCountByStatus(){ 
	$('#poLineByStatus').DataTable( {
		"destroy": true,
		"searching": false,
		"paging":   false, 
		"ajax": "../beats/v1/rest/q_0005", 
		"columns": [
			{ "data": "STATUS_NAME" },
			{ "data": "ORDERLINECOUNT" } 					
		]
	} ); 
}	
//------------------------
function loadOrderHoldsCount(){ 
	$('#openOrderHoldsCount').DataTable( {
		"destroy": true,
		"searching": false,
		"paging":   false, 
		"ajax": "../beats/v1/rest/q_0019", 
		"columns": [
				{ "data": "ENTRY_TYPE" },
				{ "data": "HOLD_TYPE" },
				{ "data": "OPENHOLDCOUNT" } 
		]
	} ); 
}		

//------------------------
function loadDuplicateAWBOnShipmentList(){ 
	$('#loadDuplicateAWBOnShipment').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0021", 
		"columns": [
			{ "data": "EXTN_AIRWAY_BILL_NO" },
			{ "data": "SHIPMENTCOUNT" } 					
		]
	} ); 
}		
//------------------------
function loadShipmentCountPanel(){ 

	//$.fn.dataTable.moment( 'mmm D,yyyy hh:mm:ss' );
	$.fn.dataTable.moment( 'mmm dd,yyyy' );

	$('#shipmentCountSummary').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		 "order": [[ 0, "desc" ]],
		"ajax": "../beats/v1/rest/q_0006", 
		"columns": [
			{ "data": "ORDER_NO" },
			{ "data": "CREATETS" }, 
			{ "data": "FULLNAME" },
			{ "data": "LOCATION" }, 
			{ "data": "EXTN_PAYMENT_TYPE" },
			{ "data": "SHIPMENT_NO" },
			{ "data": "STATUS_NAME" },
			{ "data": "EXTN_TOTAL_NET_AMOUNT" },
			{ "data": "SCAC" },
			{ "data": "AIRWAY_BILL_NO" },
			{ "data": "EXPECTED_DELIVERY_DATE" },
			{ "data": "ACTUAL_DELIVERY_DATE" }
		],
		"createdRow": function ( row, data, index ) {
			var lsHoldFalg = data.HOLD_FLAG;
			 
			if( lsHoldFalg =='Y')  
			$('td', row).eq(5).append($("<i class='fa fa-lock highlight' aria-hidden='true' title='shipment on hold'></i>"));
			
		} 
		
	} ); 
}	

//------------------------
function loadWcsSyncInvChanges(){ 
	$('#wcsSyncInvChanges').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0008", 
		"columns": [
			{ "data": "ITEM_ID" },
			{ "data": "AVAILABLE_QTY" },
			{ "data": "MODIFYTS" } 					
		]
	} ); 
}	
	
//------------------------
function loadWcsReservationCountPanel(){ 
	$('#wcsReservationCountSummary').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0013", 
		"columns": [
					{ "data": "RESERVATION_ID" },
					{ "data": "SHIP_DATE" }, 		
					{ "data": "QUANTITY" },
					{ "data": "EXPIRATION_DATE" },
					{ "data": "PRODUCT_AVAILABILITY_DATE" },
					{ "data": "MODIFYUSERID" },
					{ "data": "MODIFYPROGID" },
					{ "data": "DEMAND_TYPE" }
		]
	} ); 
}	

//------------------------
function loadWcsAtpCallsPanel(){ 
	$('#wcsAtpCallsList').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0015", 
		"columns": [
				{ "data": "CONTEXT_NAME" },
				{ "data": "STATISTIC_VALUE" }, 		
				{ "data": "MODIFYTS" }
		]
	} ); 
}	
//------------------------
function loadRunningServerCount(){ 
	$.get("../beats/v1/rest/q_0009", function(data, status){
		console.log("Data: " + data + "\nStatus: " + status);
		var obj = jQuery.parseJSON (data);
		//console.log("obj: " + obj.data[0].STATUSCOUNT); 
		$('#runningServerCount').text(obj.data[0].STATUSCOUNT);
		$('#refreshAllPanels').hide();
		
	});
}	

//------------------------
function loadCountByMotherBrand(){ 
	$('#countByMotherBrand').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0023", 
		"columns": [
			{ "data": "MANUFACTURER_ITEM_DESC" },
			{ "data": "ITEMCOUNT" } 					
		]
	} ); 
}	
//------------------------
function loadCountByBrandAndMotherBrand(){ 
	$('#countByBrandAndMotherBrand').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0024", 
		"columns": [
			{ "data": "EXTN_BRAND_CODE" },
			{ "data": "MANUFACTURER_ITEM_DESC" },
			{ "data": "ITEMCOUNT" } 					
		]
	} ); 
}	

//------------------------
function loadSKUSummary(){ 
	$('#skuSummary').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0014", 
		"columns": [
			{ "data": "ITEMSTATUSNAME" },
			{ "data": "ITEMCOUNT" } 					
		]
	} ); 
}
//------------------------
function loadPendingRefundList(){ 
	$('#loadPendingRefund').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0022", 
		"columns": [
					{ "data": "ORDER_NO" },
					{ "data": "ORDER_DATE" },
					{ "data": "PAYMENT_TYPE" },
					{ "data": "PAYMENT_STATUS" },
					{ "data": "TOTAL_AUTHORIZED" },
					{ "data": "TOTAL_CHARGED" },
					{ "data": "TOTAL_REFUNDED_AMOUNT" }
		]
	} ); 
}	


//------------------------
function loadDadiAuditSummary(){ 
	$('#dadiAudit').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0016", 
		"columns": [
				{ "data": "UPLOADEDTS" },
				{ "data": "UPLOADEDUSERID" }, 		
				{ "data": "UPLOADEDFILENAME" }
		]
	} ); 
}

//------------------------
function loadIntegServerCountPanel(){ 
	$('#integServerCountSummary').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0010", 
		"columns": [
			{ "data": "SERVER_NAME" },
			{ "data": "INTEG_SERVER_PROCESSED_PER_HR" } 					
		]
	} ); 
}	

//------------------------
function loadAgentServerCountPanel(){ 
	$('#agentServerCountSummary').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0011", 
		"columns": [
			{ "data": "SERVER_NAME" },
			{ "data": "AGENT_SERVER_PROCESSED_PER_HR" } 					
		]
	} ); 
}	


//------------------------
function loadExceptionsCountPanel(){ 
	$('#exceptionCountSummary').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0012", 
		"columns": [
			{ "data": "FLOW_NAME" },
			{ "data": "ERROR_COUNT_PER_HR" } 					
		]
	} ); 
}	
 

//------------------------
function loadOpenAlertsCountPanel(){ 
	$('#openAlertsCountSummary').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0018", 
		"columns": [
				{ "data": "EXCEPTION_TYPE" },
				{ "data": "EXCEPTIONCOUNT" } 
		]
	} ); 
}
 
//------------------------
function loadAwbCountPanel(){ 
	$('#loadAwbCount').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0020", 
		"columns": [
			{ "data": "EXTN_CARRIER_NAME" },
			{ "data": "EXTN_MODE_OF_PAYMENT" },
			{ "data": "EXTN_IS_USED" },
			{ "data": "COUNT" } 					
		]
	} ); 
}	
 					
//------------------------
function loadSalesOrderReportPanel(){ 
	$('#salesOrderReport').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0025", 
		"columns": [
			{ "data": "DATE" },
			{ "data": "ENTRY_TYPE" },
			{ "data": "COUNT" } 					
		]
	} ); 
}	
//------------------------
function loadReturnOrderReportPanel(){ 
	$('#returnOrderReport').DataTable( {
		"destroy": true,
		"searching": true,
		"paging":   true, 
		"ajax": "../beats/v1/rest/q_0026", 
		"columns": [
			{ "data": "DATE" },
			{ "data": "ENTRY_TYPE" },
			{ "data": "COUNT" } 						
		]
	} ); 
}	