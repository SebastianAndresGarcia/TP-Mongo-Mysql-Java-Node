package controlador;

import org.hibernate.Session;
import org.hibernate.Transaction;

import datos.HibernateUtil;

 

public class paisDAO {
	public void guardarPais(Object o) {
		Transaction transaction = null;
		try (Session session = HibernateUtil.getSessionFactory().openSession()) {
			// start a transaction
			transaction = session.beginTransaction();
			// save the object
			session.saveOrUpdate(o); // hay variantes con save, saveorupdate, persist

			// commit transaction
			transaction.commit();
			session.close();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
		}

	}
}
