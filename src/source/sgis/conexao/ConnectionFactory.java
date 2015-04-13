package source.sgis.conexao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.management.RuntimeErrorException;

public class ConnectionFactory {
	private Connection connection ;
	
	public Connection getConnection() {

	try{
		return DriverManager.getConnection("jdbc:mysql://localhost:3306/sgis_gean","root","admin");
	}catch(SQLException e){
		throw new RuntimeException(e);
	}
}
}
