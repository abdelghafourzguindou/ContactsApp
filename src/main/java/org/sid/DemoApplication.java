package org.sid;

import java.text.SimpleDateFormat;

import org.sid.dao.ContactRepository;
import org.sid.entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner{
	
	@Autowired
	ContactRepository contactRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		contactRepository.save(new Contact("XX", "XX", "XX","XX", "XX", new SimpleDateFormat("dd/MM/YY").parse("10/11/1999")));
		contactRepository.save(new Contact("YY", "YY", "YY","YY", "YY", new SimpleDateFormat("dd/MM/YY").parse("10/11/1999")));
		contactRepository.save(new Contact("ZZ", "ZZ", "ZZ","ZZ", "ZZ", new SimpleDateFormat("dd/MM/YY").parse("10/11/1999")));
		contactRepository.save(new Contact("AA", "AA", "AA","AA", "AA", new SimpleDateFormat("dd/MM/YY").parse("10/11/1999")));
		
		contactRepository.findAll().forEach(c -> {
			System.out.println(c.getFirstName());
		});

		
	}
}
