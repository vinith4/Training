package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class FirstApplication {
      
	public static void main(String[] args) {
		ConfigurableApplicationContext context=SpringApplication.run(FirstApplication.class, args);
		
	    vinith a=context.getBean(vinith.class);
	    
	    a.show();
	    
	}

}
  