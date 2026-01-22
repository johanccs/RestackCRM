import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateInvoiceDto {
  custId?: number;
  date?: string;
  status?: string;
  invoiceNr?: number;
  paymentTerms?: string;
  invoiceLines?: CreateUpdateInvoiceLineDto[];
}

export interface CreateUpdateInvoiceLineDto {
  productName?: string;
  description?: string;
  qty?: number;
  price?: number;
}

export interface InvoiceDto extends EntityDto<number> {
  custId?: number;
  date?: string;
  status?: string;
  invoiceNr?: number;
  paymentTerms?: string;
  invoiceLines?: InvoiceLineDto[];
}

export interface InvoiceLineDto extends EntityDto<number> {
  productName?: string;
  description?: string;
  qty?: number;
  price?: number;
}
