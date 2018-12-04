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
import java.util.logging.Level;
import java.util.logging.Logger;

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
        String dbUrl = "jdbc:mysql://localhost:3306/runmate";
        String dbUser = "sqluser";
        String dbPassword = "sqluserpw";
        
        

        app.get("/insert/:name/:passwd", ctx -> {
            String message
                    = InsertInDB(dbUrl, dbUser, dbPassword,
                            ctx.pathParam("name"), ctx.pathParam("passwd"));

            ctx.result(message);
        });
        
        app.get("/read_cykel/:id", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("id"));
            System.out.println( id );
            ctx.result(
                    readCykelFromID(dbUrl, dbUser, dbPassword, id)
            );
        });
        
        app.get("/read_cykelgrp/:id", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("id"));
            System.out.println( id );
            ctx.result(
                    readCykelFromGruppe(dbUrl, dbUser, dbPassword, id)
            );
        });
        
        app.get("/read_lobgrp/:id", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("id"));
            System.out.println( id );
            ctx.result(
                    readLobFromGruppe(dbUrl, dbUser, dbPassword, id)
            );
        });
        
        app.get("/read_gaagrp/:id", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("id"));
            System.out.println( id );
            ctx.result(
                    readGaaFromGruppe(dbUrl, dbUser, dbPassword, id)
            );
        });
        
        app.get("/read_lob/:id", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("id"));
            System.out.println( id );
            ctx.result(
                    readLobFromID(dbUrl, dbUser, dbPassword, id)
            );
        });
        
        app.get("/read_gaa/:id", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("id"));
            System.out.println( id );
            ctx.result(
                    readGaaFromID(dbUrl, dbUser, dbPassword, id)
            );
        });

         app.get("/readaktivitet", ctx -> {
            ctx.result("Result: "
                    + readFromAktivitet(dbUrl, dbUser, dbPassword));
        });
        
         app.get("/read-users", ctx -> {
            ctx.result("Result: "
                    + readUsersFromDB(dbUrl, dbUser, dbPassword)
            );
        });
         
         app.post("/create-user/:name/:passwd", ctx -> {
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
         
         
          app.post("/aktivitetstype/:id/:aktivitetstype/:distance", ctx -> {
            String message
                    = InsertAktivitetsFormInDB(dbUrl, dbUser, dbPassword,
                           ctx.pathParam("id"), ctx.pathParam("aktivitetstype"), ctx.pathParam("distance"));

            ctx.result(message);
           
        });

    }

    public static String readUsersFromDB(String url, String user, String password) {
        String textResult = "";
        try {
            Thread.sleep(800);
            System.out.println("hejsa");
        
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
            
        } catch (InterruptedException ex) {
            Logger.getLogger(HelloWorld.class.getName()).log(Level.SEVERE, null, ex);
        }finally {
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

            String insertText = "INSERT INTO users values (" + "default,'" + name + "','" + passwd+"', 1, 0);";
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

            String selectText = "SELECT id, laerer FROM users WHERE navn = '" + name + "'and pw = '" + passwd + "';";
            System.out.println(selectText);
            resultSet = statement.executeQuery(selectText);
            System.out.println("id");
            
            while (resultSet.next()) {
                System.out.printf("%s | %s",
                      
                        resultSet.getString("id"),
                        resultSet.getString("laerer")
                        
                );
                textResult += 
                        resultSet.getString("id") + "|"
                        + resultSet.getString("laerer")
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
           String id, String aktivitetsType, String distance) {
        String message = "Data inserted.";
        try {
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            String insertText = "INSERT INTO aktivitet values (" + id+",'" + aktivitetsType + "','" + distance+"', default" + ");";
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
    
    public static String readCykelFromID(String url, String user, String password, int id) {
        String textResult = "";
        try {
              Thread.sleep(1600);
            System.out.println("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            // Result set get the result of the SQL query
            String selectText = "SELECT * FROM runmate.aktivitet WHERE aktivitetstype = 'cykel' AND userid = "+id+";";
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
        } catch (InterruptedException ex) {
            Logger.getLogger(HelloWorld.class.getName()).log(Level.SEVERE, null, ex);
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
    
    public static String readCykelFromGruppe(String url, String user, String password, int id) {
        String textResult = "";
       
        try {
            Thread.sleep(2000);
            System.out.println("hejsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database

            // Result set get the result of the SQL query
            //SELECT @a := gruppe FROM users WHERE id = 1;
//SELECT aktivitet.aktivitetstype, aktivitet.distance from aktivitet INNER JOIN users ON aktivitet.userid = users.id WHERE users.gruppe LIKE @a AND aktivitet.aktivitetstype = 'gang';
            String selectText = "SELECT gruppe FROM users WHERE id ="+id+";";
            System.out.println(selectText);
            statement = connection.createStatement();
            resultSet = statement.executeQuery(selectText);
            System.out.println("ok so far...");
            resultSet.next();
            int gr = resultSet.getInt("gruppe");
            System.out.println( "group: " + gr );
                    
            selectText = "SELECT aktivitet.aktivitetstype, aktivitet.distance FROM aktivitet INNER JOIN users "
                    +"ON aktivitet.userid = users.id WHERE users.gruppe="+gr+" AND aktivitet.aktivitetstype = 'cykel';" ;
            System.out.println(selectText);
            statement = connection.createStatement();
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
        }catch (InterruptedException ex) {
            Logger.getLogger(HelloWorld.class.getName()).log(Level.SEVERE, null, ex);
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
    
    public static String readLobFromGruppe(String url, String user, String password, int id) {
        String textResult = "";
       
        try {
            Thread.sleep(1900);
            System.out.println("hejsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database

            // Result set get the result of the SQL query
            //SELECT @a := gruppe FROM users WHERE id = 1;
//SELECT aktivitet.aktivitetstype, aktivitet.distance from aktivitet INNER JOIN users ON aktivitet.userid = users.id WHERE users.gruppe LIKE @a AND aktivitet.aktivitetstype = 'gang';
            String selectText = "SELECT gruppe FROM users WHERE id ="+id+";";
            System.out.println(selectText);
            statement = connection.createStatement();
            resultSet = statement.executeQuery(selectText);
            System.out.println("ok so far...");
            resultSet.next();
            int gr = resultSet.getInt("gruppe");
            System.out.println( "group: " + gr );
                    
            selectText = "SELECT aktivitet.aktivitetstype, aktivitet.distance FROM aktivitet INNER JOIN users "
                    +"ON aktivitet.userid = users.id WHERE users.gruppe="+gr+" AND aktivitet.aktivitetstype = 'lob';" ;
            System.out.println(selectText);
            statement = connection.createStatement();
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
        }catch (InterruptedException ex) {
            Logger.getLogger(HelloWorld.class.getName()).log(Level.SEVERE, null, ex);
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
    
    public static String readGaaFromGruppe(String url, String user, String password, int id) {
        String textResult = "";
       
        try {
            Thread.sleep(1800);
            System.out.println("hejsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database

            // Result set get the result of the SQL query
            //SELECT @a := gruppe FROM users WHERE id = 1;
//SELECT aktivitet.aktivitetstype, aktivitet.distance from aktivitet INNER JOIN users ON aktivitet.userid = users.id WHERE users.gruppe LIKE @a AND aktivitet.aktivitetstype = 'gang';
            String selectText = "SELECT gruppe FROM users WHERE id ="+id+";";
            System.out.println(selectText);
            statement = connection.createStatement();
            resultSet = statement.executeQuery(selectText);
            System.out.println("ok so far...");
            resultSet.next();
            int gr = resultSet.getInt("gruppe");
            System.out.println( "group: " + gr );
                    
            selectText = "SELECT aktivitet.aktivitetstype, aktivitet.distance FROM aktivitet INNER JOIN users "
                    +"ON aktivitet.userid = users.id WHERE users.gruppe="+gr+" AND aktivitet.aktivitetstype = 'gang';" ;
            System.out.println(selectText);
            statement = connection.createStatement();
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
        }catch (InterruptedException ex) {
            Logger.getLogger(HelloWorld.class.getName()).log(Level.SEVERE, null, ex);
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
    
    public static String readLobFromID(String url, String user, String password, int id) {
        String textResult = "";
        
        try {
             Thread.sleep(2400);
            System.out.println("hejsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            // Result set get the result of the SQL query
            String selectText = "SELECT * FROM runmate.aktivitet WHERE aktivitetstype = 'lob' AND userid = "+id+";";
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
        } catch (InterruptedException ex) {
            Logger.getLogger(HelloWorld.class.getName()).log(Level.SEVERE, null, ex);
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
    
    public static String readGaaFromID(String url, String user, String password, int id) {
        String textResult = "";
        try {
             Thread.sleep(400);
            System.out.println("hejsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            // Result set get the result of the SQL query
            String selectText = "SELECT * FROM runmate.aktivitet WHERE aktivitetstype = 'gang' AND userid = "+id+";";
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
        }  catch (InterruptedException ex) {
            Logger.getLogger(HelloWorld.class.getName()).log(Level.SEVERE, null, ex);
        }finally {
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

}

