import { ExpressContext } from 'apollo-server-express';
import { AuthenticatedUser } from '../../apiBase/auth';
import { IMe } from '../helpers/Authorization';
import {
  GroupLoaderType,
  HouseholdLoaderType,
  PeopleFromHouseholdLoaderType,
  SessionVisitLoaderType,
  PersonLoaderType,
  FundDonationFromFundLoaderType,
  DonationBatchLoaderType,
  DonationsFromDonationBatchLoaderType,
  DonationLoaderType
} from '../loaders'

export type ReqContext = ExpressContext & {
  me?: IMe
  au?: AuthenticatedUser
  peopleFromHouseHoldLoader: PeopleFromHouseholdLoaderType
  householdLoader: HouseholdLoaderType
  groupLoader: GroupLoaderType
  sessionVisitLoader: SessionVisitLoaderType
  personLoader: PersonLoaderType
  fundDonationFromFundLoader: FundDonationFromFundLoaderType
  donationBatchLoader: DonationBatchLoaderType
  donationsFromDonationBatchLoader: DonationsFromDonationBatchLoaderType
  donationsLoader: DonationLoaderType
}