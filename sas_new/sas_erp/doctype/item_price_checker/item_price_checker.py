# Copyright (c) 2024, rawas@sastechnologies.co and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


class ItemPriceChecker(Document):
	pass


@frappe.whitelist()
def update_item_image(item_code):
    item = frappe.get_doc('Item', item_code)
    return item.image

@frappe.whitelist()
def price_list(item_code):
    results = {'selling_price_1': False, 'selling_price_2': False, 'selling_price_3': False, 'selling_price_4': False, 'selling_price_5': False}

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

    exst_5 = frappe.db.exists('Stock Ledger Entry',{'item_code': item_code, 'is_cancelled': 0})
    if exst_5:
        item_price_5 = frappe.get_last_doc('Stock Ledger Entry',{'item_code': item_code, 'is_cancelled': 0})
        results['selling_price_5'] = item_price_5.valuation_rate


    # exst_5 = frappe.db.exists('Item Price', {'item_code': item_code, 'price_list': 'Customer Last Price', 'customer': customer})
    # if exst_5:
    #     item_price_5 = frappe.get_last_doc('Item Price', {'item_code': item_code, 'price_list': 'Customer Last Price', 'customer': customer})
    #     results['selling_price_5'] = item_price_5.price_list_rate

    return results

# ///////////////////////////////////////WHAREHOUSE TABLE QTY IN SALES INVOICE///////////////////////////////////////
@frappe.whitelist()
def avail_qty(item_code):
    results = {'warehouse_1': False, 'warehouse_2': False, 'warehouse_3': False}

    exst_1 = frappe.db.exists('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'KIDSMANIA WAREHOUSE SALMIYAH  - KM', 'is_cancelled': 0})
    if exst_1:
        warehouse__1 = frappe.get_last_doc('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'KIDSMANIA WAREHOUSE SALMIYAH  - KM', 'is_cancelled': 0})
        results['warehouse_1'] = warehouse__1.qty_after_transaction

    exst_2 = frappe.db.exists('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'OUTLET MUBRAKIYA - KM', 'is_cancelled': 0})
    if exst_2:
        warehouse__2 = frappe.get_last_doc('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'OUTLET MUBRAKIYA - KM', 'is_cancelled': 0})
        results['warehouse_2'] = warehouse__2.qty_after_transaction

    exst_3 = frappe.db.exists('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'WAREHOUSE 1 MUBARAKIYA - KM', 'is_cancelled': 0})
    if exst_3:
        warehouse__3 = frappe.get_last_doc('Stock Ledger Entry', {'item_code': item_code, 'warehouse': 'WAREHOUSE 1 MUBARAKIYA - KM', 'is_cancelled': 0})
        results['warehouse_3'] = warehouse__3.qty_after_transaction

    return results
# /////////////////////////////////////WHAREHOUSE TABLE QTY IN SALES INVOICE/////////////////////////////////////////

@frappe.whitelist()
def item_barcode(item_barcode):
    parent_item = frappe.db.get_value("Item Barcode", {"barcode": item_barcode}, "parent")
    return parent_item

@frappe.whitelist()
def valuation_rate(item_code):
    results = None  # Initialize results to None
    entries = frappe.get_all(
        'Stock Ledger Entry',
        filters={'item_code': item_code, 'is_cancelled': 0},
        fields=['valuation_rate'],
        order_by='posting_date DESC, posting_time DESC, creation DESC',
        limit=1  # Limit to one record, which is the latest
    )

    if entries:
        results = entries[0].get('valuation_rate')

    return results