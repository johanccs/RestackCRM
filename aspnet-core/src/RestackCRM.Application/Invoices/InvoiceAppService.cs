using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace RestackCRM.Invoices
{
    public class InvoiceAppService
        : CrudAppService<Invoice, InvoiceDto, int, PagedAndSortedResultRequestDto, CreateUpdateInvoiceDto>,
        IInvoiceAppService
    {
        public InvoiceAppService(IRepository<Invoice, int> repository) : base(repository)
        {
        }

        protected override async Task<IQueryable<Invoice>> CreateFilteredQueryAsync(PagedAndSortedResultRequestDto input)
        {
            var query = await base.CreateFilteredQueryAsync(input);

            return query.Include(x => x.InvoiceLines);
        }
    }
}
