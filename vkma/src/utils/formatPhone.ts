/**
 * Принимает строку вида +78805553535
 * Форматирует в +7 (880) 555-35-35
 */
export const formatPhone = (phone: string) =>
    `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(
        5,
        8
    )}-${phone.slice(8, 10)}-${phone.slice(10, 12)}`;
