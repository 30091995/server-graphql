import { IResolvers } from '@graphql-tools/utils'
import { merge } from "lodash"
import { UserResolver } from "./resolvers/UserResolver"

const resolverMap: IResolvers = merge(UserResolver);

export default resolverMap;