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


@frappe.whitelist()
def price_list(item_code):
    results = {'selling_price_1': False, 'selling_price_2': False, 'selling_price_3': False, 'selling_price_4': False}

    exst_1 = frappe.db.exists('Item Price', {'item_code': item_code, 'price_list': 'Retail Price'})
    if exst_1:
        item_price_1 = frappe.get_last_doc('Item Price', {'item_code': item_code, 'price_list': 'Retail Price'})
        results['selling_price_1'] = item_price_1.price_list_rate

    exst_2 = frappe.db.exists('Item Price', {'item_code': item_code, 'price_list': 'Wholesale Price Unit'})
    if exst_2:
        item_price_2 = frappe.get_last_doc('Item Price', {'item_code': item_code, 'price_list': 'Wholesale Price Unit'})
        results['selling_price_2'] = item_price_2.price_list_rate

    exst_3 = frappe.db.exists('Item Price', {'item_code': item_code, 'price_list': 'Wholesale Price DZN'})
    if exst_3:
        item_price_3 = frappe.get_last_doc('Item Price', {'item_code': item_code, 'price_list': 'Wholesale Price DZN'})
        results['selling_price_3'] = item_price_3.price_list_rate

    exst_4 = frappe.db.exists('Item Price', {'item_code': item_code, 'price_list': 'Special Price'})
    if exst_4:
        item_price_4 = frappe.get_last_doc('Item Price', {'item_code': item_code, 'price_list': 'Special Price'})
        results['selling_price_4'] = item_price_4.price_list_rate

    return results

# ///////////////////////////////////////WHAREHOUSE TABLE QTY IN SALES INVOICE///////////////////////////////////////
# @frappe.whitelist()
# def avail_qty(item_code):
#     results = {'warehouse_1': False, 'warehouse_2': False}

#     exst_1 = frappe.db.exists('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'Stores - KM'})
#     if exst_1:
#         warehouse__1 = frappe.get_last_doc('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'Stores - KM'})
#         results['warehouse_1'] = warehouse__1.qty_after_transaction

#     exst_2 = frappe.db.exists('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'Finished Goods - KM'})
#     if exst_2:
#         warehouse__2 = frappe.get_last_doc('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'Finished Goods - KM'})
#         results['warehouse_2'] = warehouse__2.qty_after_transaction

#     return results
# /////////////////////////////////////WHAREHOUSE TABLE QTY IN SALES INVOICE/////////////////////////////////////////

# @frappe.whitelist()
# def get_valuation_rate(item_code, warehouse):
#     valuation_rate = frappe.db.get_value('Stock Ledger Entry',
#                                          {'item_code': item_code, 'warehouse': warehouse},
#                                          'valuation_rate', order_by='posting_date DESC')

#     return valuation_rate

@frappe.whitelist()
def fetch_item_codes(purchase_invoice):
    items_data = []
    pi_doc = frappe.get_doc('Purchase Invoice', purchase_invoice)
    
    for item in pi_doc.items:
        items_data.append({
            'item_code': item.item_code,
            'item_name': item.item_name 
        })
        
    return items_data




