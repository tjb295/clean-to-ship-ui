const schema = `
    Query {
        cts_atp_rule_id(id: ID): Rule
    }

    type Rule {
        id: ID
        rule_name: String
    }
`;

module.exports(schema);