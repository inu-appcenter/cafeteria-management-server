import IEntity from "./base/IEntity";
import {parseObject, serializeObject} from "../utils/object";
import {camelToSnake, snakeToCamel} from "../utils/naming";

class CafeteriaDiscountRule implements IEntity<CafeteriaDiscountRule> {
    id: number; // Independent from cafeteria.

    name: string;
    description: string;

    enabled: boolean;

    static parse(raw: any) {
        return parseObject(raw, snakeToCamel, CafeteriaDiscountRule);
    }

    serialize(): CafeteriaDiscountRule {
        return serializeObject(this, camelToSnake);
    }

    static type() {
        return `
        type CafeteriaDiscountRule {
            id: Int!
            name: String!
            description: String!
            enabled: Boolean!
        }
        `;
    }

    static input() {
        return `
        input CafeteriaDiscountRuleInput {
            id: Int!
            enabled: Boolean
        }
        `;
    }
}

export default CafeteriaDiscountRule;
