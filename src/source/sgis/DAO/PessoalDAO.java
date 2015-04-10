package source.sgis.DAO;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import source.sgis.classes.Pessoal;
import source.sgis.conexao.ConnectionFactory;

public class PessoalDAO {
	private Connection connection ; 
	
	public PessoalDAO(){
		this.connection = new ConnectionFactory().getConnection();
	}
	
	public void adicionar(Pessoal pessoal){
		String sql = "insert into pessoal(nome,genero,estadoCivil,"
				+ "nacionalidade,dataNascimento,raca,endereco)"
				+ "values(?,?,?,?,?,?,?)";
		try{
			PreparedStatement inserir = connection.prepareStatement(sql);
			
			inserir.setString(1, pessoal.getNome());
			inserir.setString(2, pessoal.getGenero());
			inserir.setString(3, pessoal.getEstadoCivil());
			inserir.setString(4, pessoal.getNacionalidade());
			inserir.setDate(5, new Date (pessoal.getDataNascimento().getTimeInMillis()));
			inserir.setString(6, pessoal.getRaca());
			inserir.setString(7, pessoal.getEndereco());
			
			inserir.execute();
			inserir.close();
			
		}catch(SQLException e){
			throw new RuntimeException(e);
		}
		
	}
	
}
