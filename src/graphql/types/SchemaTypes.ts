export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AttendanceSession = {
  __typename?: 'AttendanceSession';
  churchId?: Maybe<Scalars['String']>;
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  serviceTimeId?: Maybe<Scalars['ID']>;
  sessionDate?: Maybe<Scalars['DateTime']>;
  visits: Array<AttendanceVisit>;
};

export type AttendanceVisit = {
  __typename?: 'AttendanceVisit';
  addedBy?: Maybe<Scalars['String']>;
  checkinTime?: Maybe<Scalars['DateTime']>;
  churchId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  person?: Maybe<Person>;
  personId?: Maybe<Scalars['ID']>;
  visitDate?: Maybe<Scalars['DateTime']>;
};

export type CorePagination = {
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortDirection>;
};


export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  notIn?: Maybe<Scalars['DateTime']>;
};

export type GivingDonation = {
  __typename?: 'GivingDonation';
  amount?: Maybe<Scalars['Float']>;
  batchId?: Maybe<Scalars['ID']>;
  donationBatch?: Maybe<GivingDonationBatch>;
  donationDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  method?: Maybe<Scalars['String']>;
  methodDetails?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  person?: Maybe<Person>;
  personId?: Maybe<Scalars['ID']>;
};

export type GivingDonationBatch = {
  __typename?: 'GivingDonationBatch';
  batchDate?: Maybe<Scalars['DateTime']>;
  churchId?: Maybe<Scalars['String']>;
  donations?: Maybe<Array<GivingDonation>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type GivingFund = {
  __typename?: 'GivingFund';
  churchId?: Maybe<Scalars['String']>;
  fundDonations?: Maybe<Array<GivingFundDonation>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  removed?: Maybe<Scalars['Boolean']>;
};

export type GivingFundDonation = {
  __typename?: 'GivingFundDonation';
  amount?: Maybe<Scalars['Float']>;
  donation?: Maybe<GivingDonation>;
  donationId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};

export type Group = {
  __typename?: 'Group';
  categoryName?: Maybe<Scalars['String']>;
  churchId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  parentPickup?: Maybe<Scalars['Boolean']>;
  people?: Maybe<Array<Person>>;
  removed?: Maybe<Scalars['Boolean']>;
  trackAttendance?: Maybe<Scalars['Boolean']>;
};

export type GroupWhereInput = {
  id: Scalars['ID'];
};

export type GroupsResult = {
  __typename?: 'GroupsResult';
  edges: Array<Group>;
  total: Scalars['Int'];
};

export type HouseHold = {
  __typename?: 'HouseHold';
  churchId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Person>>;
};

export type HouseHoldWhereInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  test?: Maybe<Scalars['Boolean']>;
};

export type PeopleWhereInput = {
  birthDate?: Maybe<DateTimeNullableFilter>;
  firstName?: Maybe<StringNullableFilter>;
  lastName?: Maybe<StringNullableFilter>;
};

export type Person = {
  __typename?: 'Person';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  anniversary?: Maybe<Scalars['DateTime']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  churchId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Group>>;
  homePhone?: Maybe<Scalars['String']>;
  household?: Maybe<HouseHold>;
  householdId?: Maybe<Scalars['String']>;
  householdRole?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  membershipStatus?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  nickName?: Maybe<Scalars['String']>;
  photoUpdated?: Maybe<Scalars['DateTime']>;
  prefix?: Maybe<Scalars['String']>;
  removed?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type PersonWhereInput = {
  id: Scalars['ID'];
};

export type PersonsResult = {
  __typename?: 'PersonsResult';
  edges: Array<Person>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  attendanceSessions?: Maybe<Array<AttendanceSession>>;
  givingDonationBatches?: Maybe<Array<GivingDonationBatch>>;
  givingFundDonations?: Maybe<Array<GivingFundDonation>>;
  givingFunds?: Maybe<Array<GivingFund>>;
  group?: Maybe<Group>;
  groups?: Maybe<Array<Group>>;
  household?: Maybe<HouseHold>;
  households?: Maybe<Array<HouseHold>>;
  people: Array<Maybe<Person>>;
  person?: Maybe<Person>;
  q?: Maybe<Scalars['String']>;
};


export type QueryAttendanceSessionsArgs = {
  pagination?: Maybe<CorePagination>;
};


export type QueryGivingDonationBatchesArgs = {
  pagination?: Maybe<CorePagination>;
};


export type QueryGivingFundDonationsArgs = {
  pagination?: Maybe<CorePagination>;
};


export type QueryGivingFundsArgs = {
  pagination?: Maybe<CorePagination>;
};


export type QueryGroupArgs = {
  where?: Maybe<GroupWhereInput>;
};


export type QueryGroupsArgs = {
  pagination?: Maybe<CorePagination>;
};


export type QueryHouseholdArgs = {
  where: HouseHoldWhereInput;
};


export type QueryHouseholdsArgs = {
  pagination?: Maybe<CorePagination>;
};


export type QueryPeopleArgs = {
  pagination?: Maybe<CorePagination>;
  where?: Maybe<PeopleWhereInput>;
};


export type QueryPersonArgs = {
  where: PersonWhereInput;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};
