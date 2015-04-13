package source.sgis.servlet;

import java.io.IOException;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Request;

import com.sun.org.apache.xerces.internal.impl.xpath.regex.ParseException;

import source.sgis.DAO.PessoalDAO;
import source.sgis.classes.Pessoal;

/**
 * Servlet implementation class PessoalServlet
 */
@WebServlet("/PessoalServlet")
public class PessoalServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
      
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PessoalDAO dao = new PessoalDAO();
		Pessoal pessoal = new Pessoal();
		
		pessoal.setNome(request.getParameter("name"));
		pessoal.setGenero(request.getParameter("gender"));
		pessoal.setEstadoCivil(request.getParameter("Cidadao-estadoCivil"));
		pessoal.setNacionalidade(request.getParameter("Cidadao-nacionalidade"));
		String dataNascimentoTexto = request.getParameter("Cidadao-nacionalidade");
		Calendar dataNascimento = null;
		
		try{
			Date data = (Date) new SimpleDateFormat("dd/MM/yyyy").parse(dataNascimentoTexto);
			dataNascimento = Calendar.getInstance();
			dataNascimento.setTime(data);
			pessoal.setDataNascimento(dataNascimento);
		}catch(ParseException | java.text.ParseException e){
			return ;
			
		}
		
		dao.adicionar(pessoal);
		RequestDispatcher rd = request.getRequestDispatcher("AdicionadoPessoal.jsp");
		rd.forward(request, response);
		
	}
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PessoalServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
