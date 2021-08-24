/**
 * Examples of how we use closures to create and return functions as variables (first class functions)
 * This lets us bundle up a bunch of logic and data and delay execution of that code, as we can then pass
 * that function as a callback to other functions.
 * 
 * The example uses an imaginary SQL query constructor
 */

function constructUserSQLQuery(desiredFields, whereClause) {
  // like a private variable on a class
  var baseQuery = `SELECT ${desiredFields} FROM USERS `;

  function executeQuery() { // displayName() is the inner function, a closure
    // PRETEND WE ACTUALLY TALK TO THE DATABASE AND EXECUTE THIS QUERY
    console.log(`${baseQuery} ${whereClause}.`); // use variable declared in the parent function
  }

  return executeQuery;
}

var query1 = constructUserSQLQuery("FIRST_NAME, LAST_NAME", "WHERE ID IS 7");
var query2 = constructUserSQLQuery("EMAIL_ADDRESS", "WHERE AGE > 18");

// Maybe database calls go over the network and take time so we have to batch them
query1();
query2();