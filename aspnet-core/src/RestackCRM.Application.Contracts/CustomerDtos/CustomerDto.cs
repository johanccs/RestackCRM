using Volo.Abp.Application.Dtos;

namespace RestackCRM.CustomerDtos
{
    internal class CustomerDto: EntityDto<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Tel { get; set; }
        public string Cell { get; set; }
    }
}
