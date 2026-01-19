
using Volo.Abp.Application.Dtos;

namespace RestackCRM.Invoices
{
    public class InvoiceLineDto: EntityDto<int>
    {
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int Qty { get; set; }
        public decimal Price { get; set; }
    }
}
