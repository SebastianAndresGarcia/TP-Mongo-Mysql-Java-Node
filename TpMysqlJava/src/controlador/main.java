package controlador;

import modelo.pais;
import modelo.paisJSON;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class main {

	public static void main(String[] args) throws Exception {

		paisDAO paisDAO = new paisDAO();

		String codeanterior = "";
		/*
		 * Ejecute una llamada mediante a la siguiente URL tipo RESTful
		 * https://restcountries.com/v2/callingcode/{callingcode} Obtenga la
		 * información y migre la misma a la tabla país creada anteriormente. El
		 * proceso debe ejecutarse para los códigos desde 1 hasta 300, contemplando que
		 * si alguno de los códigos no retorna datos se continúe con el siguiente.
		 */
		for (int codigo = 70; codigo < 90; codigo++) {
			URL url = new URL("https://restcountries.com/v2/callingcode/" + codigo);
			try {
				InputStreamReader inputStreamReader = new InputStreamReader(url.openStream());
				Gson gson = new Gson();
				// https://www.jc-mouse.net/java/gson-convertir-array-json-en-list-de-objetos-java
				// :
				List<paisJSON> paisesJSONS = gson.fromJson(inputStreamReader, new TypeToken<List<paisJSON>>() {
				}.getType());

				for (paisJSON paisesJSON : paisesJSONS) {

					System.out.println(paisesJSON.getName() + " " + paisesJSON.getCallingCodes());
					// System.out.println(paisesJSON.getlatlng().get(0)+"
					// "+paisesJSON.getlatlng().get(1));

					String code = paisesJSON.getCallingCodes().get(0);
					/*if (codeanterior == code) {
						code = paisesJSON.getCallingCodes().get(1);
						 
					} */
					System.out.println("codigo " + code);
					// insertar en tabla
					try {
					pais pais = new pais();
					pais.setCallingCodes(Integer.parseInt(code));
					pais.setName(paisesJSON.getName());
					pais.setCapital(paisesJSON.getCapital());
					pais.setRegion(paisesJSON.getRegion());
					pais.setPopulation(paisesJSON.getPopulation());
					pais.setLatitud(paisesJSON.getlatlng().get(0));
					pais.setLongitud(paisesJSON.getlatlng().get(1));

					
						paisDAO.guardarPais(pais);
					} catch (Error e) {
						System.out.println("Error: " + e.getMessage());
					}
					codeanterior = code;
				}
			} catch (FileNotFoundException ex) {
				System.out.println("Error: " + ex.getMessage());
			}
		}
		System.out.println("for terminado");
	}

}
