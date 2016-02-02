var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;


/*var Category_Master=new Schema({
category_type_id: Number,
category_name: String,
Description: String,
     Active: Number,
school_id: Number,
AYID: Number,
sequence_number:Number,
    updated_by:String,
    created_date: Date,
    modified_date: Date
});

var Feature_Master=new Schema({
Feature_Name: String,
Description: String,
Parent_Feature_ID: Number,
Type_ID: {
        type: Schema.Types.ObjectId,
        ref: 'Category_Master'
    },
    Active: Number,
    created_date: Date,
    modified_date: Date
});

var Feature_Actions=new Schema({
Feature_ID: {
        type: Schema.Types.ObjectId,
        ref: 'Feature_Master'
    },
Title: String,
    Active: Number,
    created_date: Date,
    modified_date: Date
});

var Role_Master=new Schema({
    role_name: String,
    Active: Number,
    updated_by:String,
    created_date: Date,
    modified_date: Date
});*/

var School_Access_Rules=new Schema({
S_GroupID: Number,
    Feature_id: Number,
    Action_ID: Number,
S_Role_ID: Number,
    Access: String,
    T_Role_ID:Number,
Remarks:String
});

/*mongoose.model( 'Category_Master', Category_Master );
mongoose.model( 'Feature_Master', Feature_Master );
mongoose.model( 'Feature_Actions', Feature_Actions );
mongoose.model( 'Role_Master', Role_Master );*/

mongoose.model( 'School_Access_Rules', School_Access_Rules );

mongoose.connect( 'mongodb://localhost/express-RoleModule' );
