export interface Group{
    name: string;
    description: string;
    group_owner : string | null;
}

export interface Scheme{
    name: string;
    duration_months: number;
    installment_amount: string;
    total_amount: string;
    withdrawal_installment_amount: string;
}

export interface Chit{
    name: string;
    current_total_amount: string;
    current_month: string;
    start_date: string;
    end_date: string;
    group: number,
    scheme: number,
}