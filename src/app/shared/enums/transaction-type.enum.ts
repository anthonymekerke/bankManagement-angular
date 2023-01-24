export enum TransactionType{
    CREDIT = "VIR", // virement reçu
    CREDIT_SEPA = "VIR SEPA", // virement sepa effectué soi-même depuis l'application
    DEBIT_SEPA = "PRLV SEPA", // prélevement sepa (mandat)
    PAYMENT_CARD = "PAIEMENT CB", // paiement carte bancaire
    PAYMENT_CONTACTLESS = "PAIEMENT PSC", // paiement sans contact
    DEPOSIT_MONEY = "VRST", // dépôt d'espèce (agence)
    WITHDRAW_MONEY = "RETRAIT DAB", // retrait d'espèce (distributeur automatique)
    BANK_CHARGES = "F", // frais bancaires
    REFUND_BANK_CHARGES = "RETRO F", // remboursement frais bancaires
    UNPAID = "IMPAYE", // retour d'impayé
}