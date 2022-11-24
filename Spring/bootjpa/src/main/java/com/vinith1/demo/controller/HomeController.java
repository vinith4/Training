package com.vinith1.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.vinith1.demo.dao.AlienRepo;
import com.vinith1.demo.model.Alien;   

@RestController
public class HomeController {
	
	@Autowired
	AlienRepo repo;
	
	@RequestMapping("/home")
     public String home()
     {
		 System.out.println("KKK");
    	 return"home";
     }

	@DeleteMapping("/alien/{aid}")
	public String deleteAlien(@PathVariable int aid ) {
		
		Alien a =repo.getOne(aid);
		
		repo.delete(a);
		
		return "Deleted";
	}
	
	@PostMapping("/alien")
     public Alien addAlien(@RequestBody Alien alien)
     { 
		 repo.save(alien);
		 System.out.println("KKK1");
    	 return alien;
     }
	
	@PutMapping("/alien")
    public Alien saveOrUbdateAlien(@RequestBody Alien alien)
    { 
		 repo.save(alien);
		 System.out.println("KKK1");
   	 return alien;
    }
	
	@GetMapping(path= "/aliens")
	
    public List<Alien> getAliens()
    {
		return repo.findAll();
    }
	
	@RequestMapping("/aliens/{aid}")
	
    public Optional<Alien> getAlien(@PathVariable("aid") int aid)
    {
		return repo.findById(aid);
    }
	 
}
