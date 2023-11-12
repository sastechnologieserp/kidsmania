import frappe

# @frappe.whitelist()
# def last_price(customer):
#     results = {}
#     query = []
#     query = frappe.get_all('Sales Invoice',filters={"customer": f'{customer}', "docstatus": '1'},fields=['name'], order_by='name asc',as_list=True)
#     for q in query:
#         q = q[0]
#         exst = frappe.db.exists('Sales Invoice', {"customer": f'{customer}', "docstatus": '1', "name": f'{q}'})
#         if exst:
#             qq = frappe.get_doc('Sales Invoice',{"customer": f'{customer}', "docstatus": '1', "name": f'{q}'})
#             if qq:
#                 for it in qq.items:
#                     results[f'{it.item_code}'] = it.rate
    
#     return results

# @frappe.whitelist()
# def stock_qty(item_code):
#     results = False
#     # query = []
#     # query = frappe.get_all('Item',fields=['item_code'], order_by='name asc',as_list=True)
#     # for q in query:
#     #     q = q[0]
#     exst = frappe.db.exists('Stock Ledger Entry', {'item_code': f'{item_code}'})
#     if exst:
#         ldt = frappe.get_last_doc('Stock Ledger Entry', {'item_code': f'{item_code}'}) 
#         results = ldt.qty_after_transaction
#     return results

# @frappe.whitelist()
# def last_buying(item_code):
#     results = False
#     exst = frappe.db.exists('Item Price', {"item_code": f'{item_code}', "buying": 1})
#     if exst:
#         item_price = frappe.get_last_doc('Item Price', {"item_code": f'{item_code}', "buying": 1})
#         results = item_price.price_list_rate
#     return results

# @frappe.whitelist()
# def stock_qty_1(item_code):
#     results = None  # Initialize results to None
#     entries = frappe.get_all(
#         'Stock Ledger Entry',
#         filters={'item_code': item_code},
#         fields=['qty_after_transaction'],
#         order_by='posting_date DESC, posting_time DESC',
#         limit=1  # Limit to one record, which is the latest
#     )

#     if entries:
#         results = entries[0].get('qty_after_transaction')

#     return results

@frappe.whitelist()
def get_image(item_code):
    item = frappe.get_doc('Item', item_code)
    return {
        'item_image': item.get('image'),
    }

@frappe.whitelist()
def update_item_image(item_code):
    item = frappe.get_doc('Item', item_code)
    return item.image

# @frappe.whitelist()
# def custom_field_hook(doc, fieldname, value):
#   """Show the image in the custom_image_view field when you attach an image in the custom_item_image field."""

#   if doc.custom_item_image:
#     # Get the image from the custom_item_image field.
#     image = frappe.get_doc('File', doc.custom_item_image)

#     # Update the custom_image_view field with the image.
#     doc.set(fieldname, image.name)

#     # Return the image name.
#     return image.name