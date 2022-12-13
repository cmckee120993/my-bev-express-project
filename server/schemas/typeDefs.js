const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		orders: [Order]
	}

	type Product {
	_id: ID
	name: String
	price: Int
	quantity: Int
	}

	type Order {
	_id: ID
	purchaseDate: String
	deliveryDate: String
	products: [Product]
	}

	type Auth {
	token: ID
	user: User
	}

	type Query {
		products: [Product]
		orders: [Order]
		order(_id: ID!): Order
		users: [User]
	}

	type Mutation {
		addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
		addProduct(name: String!, price: Int!, quantity: Int!): Product
		addOrder(orderOwner: String!, orderDelivDate: String!): Order
		addToOrder(orderId: ID!, name: String!, price: Int!, quantity: Int!): User
		updateUser(firstName: String, lastName: String, email: String, password: String): User
		login(email: String!, password: String!): Auth
		removeFromOrder(orderId: ID!, productId: ID!): Order
	}
`;

module.exports = typeDefs;
