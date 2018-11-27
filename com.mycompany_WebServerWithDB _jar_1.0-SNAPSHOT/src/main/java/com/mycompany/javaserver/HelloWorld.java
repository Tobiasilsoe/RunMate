/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.javaserver;

/**
 *
 * @author andrea
 */
import io.javalin.Javalin;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/*
   1. Open http://localhost:7000/ in your browers after running this code!
 */

//hello is it working
public class HelloWorld {

    static Connection connection = null;
    static Statement statement = null;
    static ResultSet resultSet = null;

    public static void main(String[] args) {
        Javalin app = Javalin.create();
        app.enableCorsForOrigin("*");
        app.start(7000);
        System.out.println("Server running at port 7000...");

// --- 1. answering GET requests for / address ----------
        app.get("/", ctx -> ctx.result("Hi, this is the WebServer With DB!"));

// --- 2. Create Web API to insert and read data from the DB -------------------
        // example1: http://localhost:7000/insert/Andrea
        // example2: http://localhost:7000/read/Andrea
        String dbUrl = "jdbc:mysql://localhost:6666/runmate";
        String dbUser = "sqluser";
        String dbPassword = "sqluserpw";

        app.get("/insert/:name/:passwd", ctx -> {
            String message
                    = InsertInDB(dbUrl, dbUser, dbPassword,
                            ctx.pathParam("name"), ctx.pathParam("passwd"));

            ctx.result(message);
        });
        /*app.get("/insert/:name/:passwd", ctx -> {
            String message
                    = readFromAktivitet(dbUrl, dbUser, dbPassword,
                            ctx.pathParam("name"), ctx.pathParam("passwd"));

            ctx.result(message);
        });*/
        app.get("/read/:name", ctx -> {
            ctx.result("Result: "
                    + readFromDB(dbUrl, dbUser, dbPassword, ctx.pathParam("name"))
            );
        });
         app.get("/readaktivitet", ctx -> {
            ctx.result("Result: "
                    + readFromAktivitet(dbUrl, dbUser, dbPassword));
        });
        
         app.get("/read-emails", ctx -> {
            ctx.result("Result: "
                    + readFromDB1(dbUrl, dbUser, dbPassword)
            );
        });
         
         app.post("/make-reservation/:name/:passwd", ctx -> {
            String message
                    = InsertInDB(dbUrl, dbUser, dbPassword,
                            ctx.pathParam("name"), ctx.pathParam("passwd"));

            ctx.result(message);
           
        });
         
             app.get("/readlogin/:name/:passwd", ctx -> {
            String message
                    = readLogin(dbUrl, dbUser, dbPassword,
                            ctx.pathParam("name"), ctx.pathParam("passwd"));

            ctx.result(message);
           
        });
         
         
          app.post("/aktivitetstype/:aktivitetstype/:distance", ctx -> {
            String message
                    = InsertAktivitetsFormInDB(dbUrl, dbUser, dbPassword,
                            ctx.pathParam("aktivitetstype"), ctx.pathParam("distance"));

            ctx.result(message);
           
        });
         
         /*
         app.post("/make-reservation", ctx -> {
            System.out.println(ctx );
            System.out.println(ctx.formParamMap());
            System.out.println(ctx.body());
            String name = ctx.formParam("name");
            String pass = ctx.formParam("passwd");
            System.out.println( name + " -> " +pass );
            
             
            String message
                    = InsertInDB(dbUrl, dbUser, dbPassword,
                            ctx.formParam("name"), ctx.formParam("passwd"));

            ctx.result(message);
           
        });
*/
         


    }
    
     public static String readFromDB(String url, String user, String password, String name) {
        String textResult = "";
        try {
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            // Result set get the result of the SQL query
            String selectText = "SELECT * FROM feedback.comments WHERE myuser='" + name + "'";
            System.out.println(selectText);
            resultSet = statement.executeQuery(selectText);

            // Write result
            while (resultSet.next()) {
                System.out.printf("%d | %s | %s | %s | %s | %tc | %s\n",
                        resultSet.getInt("id"),
                        resultSet.getString("myuser"),
                        resultSet.getString("email"),
                        resultSet.getString("webpage"),
                        resultSet.getString("summary"),
                        resultSet.getDate("datum"),
                        resultSet.getString("comments")
                );
                textResult += resultSet.getInt("id") + "|"
                        + resultSet.getString("myuser") + "|"
                        + resultSet.getString("email") + "|"
                        + resultSet.getString("webpage") + "|"
                        + resultSet.getString("summary") + "|"
                        + resultSet.getDate("datum") + "|"
                        + resultSet.getString("comments");
            }
        } catch (SQLException ex) {
            System.out.println("SQLException occurred! " + ex);
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException ex) {
                System.out.println("SQLException occurred while closing the connection. " + ex);
            }
        }

        if (textResult.equals("")) {
            textResult = "-nothing found-";
        }
        return textResult;
    }


    public static String readFromDB1(String url, String user, String password) {
        String textResult = "";
        try {
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            // Result set get the result of the SQL query
            String selectText = "SELECT * from runmate.users";
            System.out.println(selectText);
            resultSet = statement.executeQuery(selectText);

            // Write result
            while (resultSet.next()) {
                System.out.printf("%s | %s ",
                      
                        resultSet.getString("name"),
                        resultSet.getString("passwd")
                        
                );
                textResult += 
                        resultSet.getString("name") + "|"
                        + resultSet.getString("passwd") + "|"
                        ;
            }
        } catch (SQLException ex) {
            System.out.println("SQLException occurred! " + ex);
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException ex) {
                System.out.println("SQLException occurred while closing the connection. " + ex);
            }
        }

        if (textResult.equals("")) {
            textResult = "-nothing found-";
        }
        return textResult;
    }
    
    public static String readFromAktivitet(String url, String user, String password) {
        String textResult = "";
        try {
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            // Result set get the result of the SQL query
            String selectText = "SELECT * from runmate.aktivitet";
            System.out.println(selectText);
            resultSet = statement.executeQuery(selectText);

            // Write result
            while (resultSet.next()) {
                System.out.printf("%s | %s ",
                      
                        resultSet.getString("aktivitetstype"),
                        resultSet.getString("distance")
                        
                );
                textResult += 
                        resultSet.getString("aktivitetstype") + "|"
                        + resultSet.getString("distance") + "|"
                        ;
            }
        } catch (SQLException ex) {
            System.out.println("SQLException occurred! " + ex);
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException ex) {
                System.out.println("SQLException occurred while closing the connection. " + ex);
            }
        }

        if (textResult.equals("")) {
            textResult = "-nothing found-";
        }
        return textResult;
    }

    public static String InsertInDB(String url, String user, String password,
            String name, String passwd) {
        String message = "Data inserted.";
        try {
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            String insertText = "INSERT INTO users values (" + "default,'" + name + "','" + passwd+"', 1" + ");";
            System.out.println(insertText);
            statement.executeUpdate(insertText);

        } catch (SQLException ex) {
            System.out.println("SQLException occurred! " + ex);
            message = "Error." + ex;
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException ex) {
                System.out.println("SQLException occurred while closing the connection. " + ex);
                message = "Error." + ex;
            }
        }

        return message;
    }
    
    public static String readLogin(String url, String user, String password,
            String name, String passwd) {
        String textResult = "";
        String message = "Data inserted.";
        try {
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            String selectText = "SELECT id FROM users WHERE navn = '" + name + "'and pw = '" + passwd + "';";
            System.out.println(selectText);
            resultSet = statement.executeQuery(selectText);
            System.out.println("id");
            
            while (resultSet.next()) {
                System.out.printf("%s",
                      
                        resultSet.getString("id")
                        
                );
                textResult += 
                        resultSet.getString("id")
                      
                        ;
            }

        } catch (SQLException ex) {
            System.out.println("SQLException occurred! " + ex);
            message = "Error." + ex;
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException ex) {
                System.out.println("SQLException occurred while closing the connection. " + ex);
                message = "Error." + ex;
            }
        }

        return textResult;
    }
    
    public static String InsertAktivitetsFormInDB(String url, String user, String password,
            String aktivitetsType, String distance) {
        String message = "Data inserted.";
        try {
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            String insertText = "INSERT INTO aktivitet values (" + "1,'" + aktivitetsType + "','" + distance+"', default" + ");";
            System.out.println(insertText);
            statement.executeUpdate(insertText);

        } catch (SQLException ex) {
            System.out.println("SQLException occurred! " + ex);
            message = "Error." + ex;
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException ex) {
                System.out.println("SQLException occurred while closing the connection. " + ex);
                message = "Error." + ex;
            }
        }

        return message;
    }

}
