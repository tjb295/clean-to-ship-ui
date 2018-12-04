const graphql = require('graphql');

const connectionObj = {
    user: 'postgres_user',
    host: '127.0.0.1',
    database: 'application',
    password: 'password',
    port: 5432
};

const pgp = require('pg-promise')();
const db  = pgp(connectionObj);

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQList,
    GraphQLSchema
} = graphql;

const RuleType = {
    name: 'Rule',
    fields: () => ({
       id: {type: GraphQLID },
       name: { type: GraphQLString },
       backward_consumption: { type: GraphQLBoolean },
       atp_item_type_list: { type: GraphQLString }
        
    })
};

//I really don't understand any of this
//hopefully there's a better description to this all somewhere


// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         rule: {
//             type: RuleType,
//             args: {id: {type: GraphQLID } },
//             resolve(parentValue, args) {
//                 const 
//             }
//         }
//     }
// })






module.export = {};