import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateCustomerDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  tel?: string;
  cell?: string;
}

export interface CustomerDto extends EntityDto<number> {
  firstName?: string;
  lastName?: string;
  email?: string;
  tel?: string;
  cell?: string;
}
