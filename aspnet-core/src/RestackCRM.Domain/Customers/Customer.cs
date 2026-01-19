using Volo.Abp.Domain.Entities.Auditing;

namespace RestackCRM.Customers
{
    public class Customer: FullAuditedEntity<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Tel { get; set; }
        public string Cell { get; set; }
    }
}
