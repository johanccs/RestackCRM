using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RestackCRM.Invoices
{
    public interface IInvoiceAppService: ICrudAppService<
            InvoiceDto,
            int,
            PagedAndSortedResultRequestDto,
            CreateUpdateInvoiceDto>
    {
    }
}
