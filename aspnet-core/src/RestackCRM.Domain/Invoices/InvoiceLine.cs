using Volo.Abp.Domain.Entities;

namespace RestackCRM.Invoices
{
    public class InvoiceLine: Entity<int>
    {
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int Qty { get; set; }
        public decimal Price { get; set; } 
    }
}
