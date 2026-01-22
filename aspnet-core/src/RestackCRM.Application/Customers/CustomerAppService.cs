using RestackCRM.CustomerDtos;
using RestackCRM.Customers;
using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace RestackCRM.Cstomers
{
    public class CustomerAppService : 
        CrudAppService<Customer, CustomerDto, int, PagedAndSortedResultRequestDto, CreateUpdateCustomerDto>, ICustomerAppService
    {
        public CustomerAppService(IRepository<Customer, int> repository) : base(repository)
        {
        }
    }
}
