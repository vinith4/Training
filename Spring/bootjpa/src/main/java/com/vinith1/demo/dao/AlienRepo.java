package com.vinith1.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.vinith1.demo.model.Alien;

public interface AlienRepo extends JpaRepository<Alien,Integer>
{

	
	
}
