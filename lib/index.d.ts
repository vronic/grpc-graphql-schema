import { GraphQLSchema } from 'graphql';
import { GrpcGraphqlSchemaConfiguration } from './types';
export { getGraphqlQueriesFromProtoService, getGraphqlMutationsFromProtoService, getGraphQlSubscriptionsFromProtoService, } from './service_converter';
export { convertGrpcTypeToGraphqlType, getGraphqlTypeFromProtoDefinition, } from './type_converter';
export { GRPC_GQL_TYPE_MAPPING, GrpcGraphqlSchemaConfiguration, typeDefinitionCache, } from './types';
export declare function getGraphqlSchemaFromGrpc({ endpoint, protoFilePath, serviceName, packageName, }: GrpcGraphqlSchemaConfiguration): Promise<GraphQLSchema>;
