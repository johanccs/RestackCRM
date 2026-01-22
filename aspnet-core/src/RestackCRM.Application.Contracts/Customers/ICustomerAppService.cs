using RestackCRM.CustomerDtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RestackCRM.Customers
{
    public interface ICustomerAppService
        : ICrudAppService<CustomerDto, int, PagedAndSortedResultRequestDto, CreateUpdateCustomerDto>
    {
    }
}
