using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace RestackCRM.Invoices
{
    public class InvoiceDto : EntityDto<int>
    {
        public int CustId { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public int InvoiceNr { get; set; }
        public string PaymentTerms { get; set; }
        public List<InvoiceLineDto> InvoiceLines { get; set; } = new ();
    }
}
