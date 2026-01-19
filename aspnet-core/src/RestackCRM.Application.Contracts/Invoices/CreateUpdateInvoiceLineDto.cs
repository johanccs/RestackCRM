

namespace RestackCRM.Invoices
{
    public class CreateUpdateInvoiceLineDto
    {
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int Qty { get; set; }
        public decimal Price { get; set; }
    }
}
