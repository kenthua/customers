
/*
 * GET users listing.
 */

exports.listall = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('customers_all',{page_item:"list",data:rows});
                
           
         });
         
    });
  
};


exports.listsummary = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('customers_summary',{page_item:"list",data:rows});
                
           
         });
         
    });
  
};


exports.details = function(req, res){

  req.getConnection(function(err,connection){
       
        var id = req.params.id;

        var query = connection.query("SELECT * FROM customer WHERE id = ?",[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('customers_all',{page_item:"details",data:rows});
                
           
         });
         
    });
  
};


exports.getname = function(req, res){

  req.getConnection(function(err,connection){
       
        var id = req.params.id;

        var query = connection.query("SELECT name FROM customer WHERE id = ?",[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('name',{page_item:"name",data:rows});
                
           
         });
         
    });
  
};


exports.getaddress = function(req, res){

  req.getConnection(function(err,connection){
       
        var id = req.params.id;

        var query = connection.query("SELECT address FROM customer WHERE id = ?",[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('address',{page_item:"address",data:rows});
                
           
         });
         
    });
  
};


exports.getphone = function(req, res){

  req.getConnection(function(err,connection){
       
        var id = req.params.id;

        var query = connection.query("SELECT phone FROM customer WHERE id = ?",[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('phone',{page_item:"phone",data:rows});
                
           
         });
         
    });
  
};


exports.getemail = function(req, res){

  req.getConnection(function(err,connection){
       
        var id = req.params.id;

        var query = connection.query("SELECT email FROM customer WHERE id = ?",[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('email',{page_item:"email",data:rows});
                
           
         });
         
    });
  
};


exports.add = function(req, res){
  res.render('add_customer',{page_title:"Add Customer"});
};


exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_customer',{page_title:"Edit Customer",data:rows});
                
           
         });
         
    }); 
};


exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            company : input.company,
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone 
        
        };
        
        var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/customers');
          
        });
            
    });
};


exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            company : input.company,
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone 
        
        };
        
        connection.query("UPDATE customer set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/customers');
          
        });
    
    });
};


exports.delete_customer = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM customer  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/customers');
             
        });
        
     });
};


