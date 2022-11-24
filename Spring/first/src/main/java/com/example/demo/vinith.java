package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component 

public class vinith {

	public vinith() {
		super();
	}

	private int aid;
	private String aname;
	private String tech;
	@Autowired
	@Qualifier("lap1")

	private laptop laptop; 
	
	public int getAid() {
		return aid;
	}
	
	public void setAid(int aid) {
		this.aid =aid;
	} 
	
	public String getAname() {
		return aname;
	}
	
	public void setAname(String aname) {
		this.aname=aname;
	} 
	
	public String getTech() {
		return tech;
	}
	
	public laptop getLaptop() {
		return laptop;
	}

	public void setLaptop(laptop laptop) {
		this.laptop = laptop;
	}

	public void setTech(String tech) {
		this.tech=tech;
	} 
	
	public void show() {
		System.out.println("SHOW");
		laptop.compile();	
	}
}
