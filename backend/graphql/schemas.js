const graphql = require('graphql');

const connectionObj = {
    user: 'tjb295',
    host: 'office5',
    database: 'pinot',
    password: 'tjb295',
    port: 5432
};

const connectionObj = {
    user: 'postgres_user',
    host: '127.0.0.1',
    database: 'application',
    password: 'password',
    port: 5432
}

const pgp = require('pg-promise')();
const db  = pgp(connectionObj);

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
 } = graphql;

 const CtsPriorityRows = {
    cts_priority_rule_id: { type: GraphQLID },
    order_type_lov: { type: GraphQLString },
    order_type_rank: { type: GraphQLInt },
    creation_date: { type: GraphQLString },
    last_update_date: { type: GraphQLString },
    psd_rank: { type: GraphQLInt },
    product_revenue_rank: { type: GraphQLInt },
    total_revenue_rank: { type: GraphQLInt },
    cbd_rank: { type: GraphQLInt },
    transaction_approval_rank: { type: GraphQLInt },
    transaction_approval_lov: { type: GraphQLString }
};

 const CtsPriorityRuleType = new GraphQLObjectType ({
     name: 'CtsPriorityRule',
     fields: () => (CtsPriorityRows)

 });

 const RootQuery = new GraphQLObjectType({
     name: 'RootQueryType',
     fields: {
         rule: {
             type: CtsPriorityRuleType,
             args: { id: { type: GraphQLID } },
             resolve(parentValue, args) {
                 const query = `SELECT * FROM application.cts_priority_rule WHERE 
                 cts_priority_rule_id=${args.id}`;
                 return db.one(query)
                    .then(data => {
                        return data;
                    })
                    .catch(err => {
                        console.log(err);
                        return 'Error: ' + err;
                    });
             }
         },
         allRules: {
             type: CtsPriorityRuleType,
             args: {},
             resolve(parentValue, args) {
                 const query = `SELECT * FROM application.cts_priority_rule`;
                 return db.one(query)
                    .then(data => {
                        return data;
                    })
                    .catch(err => {
                        console.log(err);
                        return 'Error: ' + err;
                    });
             }
         }
     }
 });

 const RootMutation = new GraphQLObjectType({
    name: 'CtsPriorityMutation',
    fields: {
        ...CtsPriorityRows,
        
    }
 });

 //mutations also exist
 //we can create new data, update existing data, delete existing data
 //with mutations
 // same structure as querie but they need to start with mutation keyword
 // 

 //we also have subscriptions
 // realtime connection to the server
 //in ordr to get immediately informed about importnt events
 //client subscribes to an event initaties steady connection to server
 //stream of data sent to the client

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});