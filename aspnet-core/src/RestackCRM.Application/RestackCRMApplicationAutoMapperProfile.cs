using AutoMapper;
using RestackCRM.CustomerDtos;
using RestackCRM.Customers;
using RestackCRM.Invoices;

namespace RestackCRM
{
    public class RestackCRMApplicationAutoMapperProfile: Profile
    {
        public RestackCRMApplicationAutoMapperProfile()
        {
            CreateMap<Customer, CustomerDto>();
            CreateMap<CreateUpdateCustomerDto, Customer>();

            CreateMap<Invoice, InvoiceDto>();
            CreateMap<InvoiceLine, InvoiceLineDto>();

            CreateMap<CreateUpdateInvoiceDto, Invoice>();
            CreateMap<CreateUpdateInvoiceLineDto, InvoiceLine>();
        }
    }
}
