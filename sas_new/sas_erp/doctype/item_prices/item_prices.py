# Copyright (c) 2024, rawas@sastechnologies.co and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ItemPrices(Document):
	pass

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

@frappe.whitelist()
def incoming_rate(item_code):
    results = None  # Initialize results to None
    entries = frappe.get_all(
        'Stock Ledger Entry',
        filters={'item_code': item_code, 'is_cancelled': 0},
        fields=['incoming_rate'],
        order_by='posting_date DESC, posting_time DESC',
        limit=1  # Limit to one record, which is the latest
    )

    if entries:
        results = entries[0].get('incoming_rate')

    return results

@frappe.whitelist()
def cost(item_code):
    results = False
    exst = frappe.db.exists('Item Price', {"item_code": f'{item_code}', "price_list": "Standard Buying"})
    if exst:
        item_price = frappe.get_last_doc('Item Price', {"item_code": f'{item_code}', "price_list": "Standard Buying"})
        results = item_price.price_list_rate
    return results

@frappe.whitelist()
def selling_price_1(item_code):
    results = False
    exst = frappe.db.exists('Item Price', {"item_code": f'{item_code}', "price_list": "Retail Price"})
    if exst:
        item_price = frappe.get_last_doc('Item Price', {"item_code": f'{item_code}', "price_list": "Retail Price"})
        results = item_price.price_list_rate
    return results

@frappe.whitelist()
def selling_price_2(item_code):
    results = False
    exst = frappe.db.exists('Item Price', {"item_code": f'{item_code}', "price_list": "Wholesale Price Unit"})
    if exst:
        item_price = frappe.get_last_doc('Item Price', {"item_code": f'{item_code}', "price_list": "Wholesale Price Unit"})
        results = item_price.price_list_rate
    return results

@frappe.whitelist()
def selling_price_3(item_code):
    results = False
    exst = frappe.db.exists('Item Price', {"item_code": f'{item_code}', "price_list": "Wholesale Price DZN"})
    if exst:
        item_price = frappe.get_last_doc('Item Price', {"item_code": f'{item_code}', "price_list": "Wholesale Price DZN"})
        results = item_price.price_list_rate
    return results

@frappe.whitelist()
def selling_price_4(item_code):
    results = False
    exst = frappe.db.exists('Item Price', {"item_code": f'{item_code}', "price_list": "Special Price"})
    if exst:
        item_price = frappe.get_last_doc('Item Price', {"item_code": f'{item_code}', "price_list": "Special Price"})
        results = item_price.price_list_rate
    return results

@frappe.whitelist()
def item_name(item_code):
    item_name = frappe.db.get_value('Item', {'item_code': item_code}, 'item_name')
    return item_name if item_name else None




@frappe.whitelist()
def get_item_code(purchase_invoice):
    item_code = frappe.get_value('Purchase Invoice Item', {
        'parent': purchase_invoice
    }, 'item_code')

    return item_code

@frappe.whitelist()
def fetch_item_codes(purchase_invoice):
    item_codes = []
    pi_doc = frappe.get_doc('Purchase Invoice', purchase_invoice)
    for item in pi_doc.items:
        item_codes.append({
            'item_code': item.item_code
        })
    return item_codes