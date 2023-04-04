const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style: "currency" });

export function formatCurreny(number: number){
    CURRENCY_FORMATTER.format(number)
}