export const YEBO_URL = "https://www.yeboinvoices.com"
export const YEBO_PARTNER_LINE = "Elite Aluminium is now an official partner of Yebo Invoices."

/**
 * Link to Yebo Invoices with tracking tags, so Yebo's analytics shows which
 * Elite Aluminium page sent the visitor. `medium` names the placement.
 */
export function yeboLink(medium: string) {
  return `${YEBO_URL}/app?utm_source=elitealuminium&utm_medium=${encodeURIComponent(medium)}&utm_campaign=partner`
}
