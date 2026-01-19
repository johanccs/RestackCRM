using System;
using System.Collections.Generic;
using System.Text;

namespace RestackCRM.Invoices
{
    public class CreateUpdateInvoiceDto
    {
        public int CustId { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public int InvoiceNr { get; set; }
        public string PaymentTerms { get; set; }
        public List<CreateUpdateInvoiceLineDto> InvoiceLines { get; set; }
    }
}
