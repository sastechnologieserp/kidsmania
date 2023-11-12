frappe.ui.form.on('Delivery Note', {
	refresh(frm) {
        //
	}
});


// frappe.ui.form.on('Sales Invoice Item', {
//     refresh(frm){
//         frm.trigger('item_code');
//     },
//     item_code(frm, cdt, cdn) {
//       let co = locals[cdt][cdn];
//       co.last_buy_price = 0;
//       co.sqty = 0;
//       if (frm.doc.items && frm.doc.customer) {
//             frappe.call({
//                 method: "makkahcool.makkah_cool.custom_script.sales_invoice.last_price",
//                 args: {
//                     "customer": frm.doc.customer,
//                 },
//                 callback: function (r) {
//                     let rmsg = r.message;
//                     if (rmsg) {
//                         Object.entries(rmsg).forEach(([itk, itv]) => {
//                             if (co.item_code == itk) {
//                                 co.last_buy_price = itv;
//                             }
//                         });
//                     }
//                 }
//             });

//             frappe.call({
//                 method: "makkahcool.makkah_cool.custom_script.sales_invoice.stock_qty_1",
//                 args: {
//                     "item_code": co.item_code,
//                 },
//                 callback: function (r) {
//                     let sqty = r.message;
//                     if (sqty) {
//                         co.sqty = sqty;
//                     }
//                 }
//             });

//             frappe.call({
//                 method: "makkahcool.makkah_cool.custom_script.sales_invoice.last_buying",
//                 args: {
//                     "item_code": co.item_code,
//                 },
//                 callback: function (r) {
//                     let sqty = r.message;
//                     if (sqty) {
//                         co.buying_price_list = sqty;
//                     }
//                 }
//             });
//         }
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_item_details',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a popup/modal
//                 if (r.message) {
//                     frappe.msgprint(`<img src="${r.message.item_image}" alt="Item Image">`);
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
        
//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_item_details',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals
//                     $('.item-modal').remove();

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 80%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     $(modal_content).modal('show');
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
        
//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_image',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals
//                     $('.item-modal').remove();

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 100%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     var modalElement = $(modal_content);

//                     // Attach an event listener for modal closing
//                     modalElement.on('hidden.bs.modal', function () {
//                         modalElement.remove(); // Remove the modal from the DOM when closed
//                     });

//                     modalElement.modal('show');
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];

//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_image',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals after a delay
//                     setTimeout(function() {
//                         $('.item-modal').remove();
//                     }, 500);

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 100%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     var modalElement = $(modal_content);

//                     // Attach an event listener for modal closing
//                     modalElement.on('hidden.bs.modal', function () {
//                         modalElement.remove(); // Remove the modal from the DOM when closed
//                     });

//                     modalElement.modal('show');
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];

//         // Fetch item details using a server call
//         frappe.call({
//             method: 'makkahcool.makkah_cool.custom_script.sales_invoice.get_image',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals
//                     $('.item-modal').modal('hide').on('hidden.bs.modal', function () {
//                         $(this).remove(); // Remove the modal from the DOM when closed
//                     });

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 100%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     var modalElement = $(modal_content);

//                     // Attach an event listener for modal closing
//                     modalElement.on('hidden.bs.modal', function () {
//                         modalElement.remove(); // Remove the modal from the DOM when closed
//                     });

//                     modalElement.modal('show');
//                 }
//             }
//         });
//     }
// });

// frappe.ui.form.on('Sales Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];

//         // Fetch item details using a server call
//         frappe.call({
//             method: 'sas_new.sas_erp.custom_script.sales_invoice.get_image',
//             args: {
//                 item_code: child.item_code
//             },
//             callback: function(r) {
//                 // Display item image in a Bootstrap modal
//                 if (r.message && r.message.item_image) {
//                     // Remove any existing modals
//                     $('.item-modal').modal('hide');

//                     // Create and display a new modal
//                     var modal_content = `<div class="modal fade item-modal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog" role="document">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title">Item Image</h5>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                     </button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <img src="${r.message.item_image}" alt="Item Image" style="max-width: 100%;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                     var modalElement = $(modal_content);

//                     // Attach an event listener for modal closing
//                     modalElement.on('hidden.bs.modal', function () {
//                         modalElement.remove(); // Remove the modal from the DOM when closed
//                     });

//                     modalElement.modal('show');
//                 }
//             }
//         });
//     }
// });

frappe.ui.form.on('Delivery Note', {
    refresh: function(frm) {
        frm.fields_dict['items'].grid.get_field('item_code').get_query = function(doc, cdt, cdn) {
            return {
                filters: {
                    
                }
            };
        };
    }
});

frappe.ui.form.on('Delivery Note Item', {
    item_code: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];
        var item_code = child.item_code;

        frappe.call({
            method: 'sas_new.sas_erp.custom_script.sales_invoice.update_item_image',
            args: {
                item_code: item_code
            },
            callback: function(r) {
                if (r.message) {
                    frm.set_value('custom_item_image', r.message);
                    frm.refresh_field('custom_item_image');
                }
            }
        });
    }
});

// frappe.ui.form.on('Sales Invoice', {
//     refresh: function(frm) {
//         frm.fields_dict['custom_item_image'].$input.on('change', function() {
//             // Get the value of the custom_item_image field
//             var imageValue = frm.doc.custom_item_image;

//             // Set the value of the custom_image_view field
//             frm.doc.custom_image_view = imageValue;

//             // Refresh the field to display the updated value
//             frm.refresh_field('custom_image_view');
//         });
//     }
// });