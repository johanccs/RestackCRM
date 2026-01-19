using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Domain.Entities.Auditing;

namespace RestackCRM.Invoices
{
    public class Invoice: FullAuditedEntity<int>
    {
        public int CustId { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public int InvoiceNr { get; set; }
        public string PaymentTerms { get; set; }
        public ICollection<InvoiceLine> InvoiceLines { get; set; }

        public Invoice()
        {
            Status = "new";
            InvoiceLines = new List<InvoiceLine>();
        }
    }
}
