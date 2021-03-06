Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert:function(userId,doc){
		return !!userId; 
	}
})

Ingredient = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	amount: {
		type:String
	}

})

Recipes.allow({
	insert: function(userId, doc){
		return !!userId;
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	ingredients:{
		type:[Ingredient]
	},
	inMenu:{
		type: Boolean,
		defaultValue:false,
		optional: true

	},
	author: {
		type:String,
		label:"Author",
		autoValue: function () {
			 return this.userId; 
		},
		autoform: {
			type:"hidden"
		}

	},
	createdAt: {
		type: Date,
		label:"Created At",
		autoValue: function () {
			 return new Date();
		},
		autoform: {
			type:"hidden"
		}
	}
});

Recipes.attachSchema(RecipeSchema);